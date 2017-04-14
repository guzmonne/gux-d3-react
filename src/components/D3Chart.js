import React from 'react'
import T from 'prop-types'
import {IMargin} from './propTypes.js'
import uniqueId from 'lodash/uniqueId'

const d3 = Object.assign({}, 
  require('d3-selection'),
  require('d3-scale'),
  require('d3-axis'),
  require('d3-array')
)

class D3Chart extends React.Component {
  id = uniqueId('chart')
  
  state = {
    targetWidth: 0,
    targetHeiht: 0,
    height: 0,
    width: 0,
  }

  componentDidMount() {
    //d3.select(window)
    //  .on("resize." + this.id, this.forceUpdate.bind(this))
    this.define()
    this.draw()
  }

  componentWillUpdate() {
    this.draw()
  }

  draw() {
    const {margin:m, width:w, height:h, data} = this.props
    
    const width = w - m.left - m.right
    const height = h - m.top - m.bottom
    const targetWidth = parseInt(this.container.offsetWidth, 10)
    const targetHeight = Math.round(targetWidth / (w / h))
    
    //this.svg
    //.attr('width', targetWidth || w)
    //.attr('height', targetHeight || h)

    this.body
    .attr('transform', `translate(${m.left}, ${m.top})`)

    this.rect
    .attr('width', width)
    .attr('height', height)
    .attr('fill', 'lightblue')
    .attr('stroke', 'green')

    this.yScale
    .domain([0, d3.max(data, d => d.score)])
    .range([height, 0])
    .nice()

    this.yAxis
    .call(d3.axisLeft(this.yScale))

    this.xScale
    .domain([new Date(2017, 0, 1), new Date(2017, 11, 31)])
    .range([0, width])

    this.xAxis
    .attr('transform', `translate(0, ${height})`)
    .call(
      d3.axisBottom(this.xScale)
      .ticks(5)
    )
  }
 
  define = () => {
    const {width:w, height:h} = this.props
    
    this.svg = (
      d3.select(`#${this.container.id}`)
        .append('svg')
          //.attr('viewbox', `0 0 ${w} ${h}`)
          //.attr('preserveAspectRatio', 'xMinYMid')
        .call(this.responsivefy)
    )

    this.body = this.svg.append('g')
    this.rect = this.body.append('rect')
    this.yScale = d3.scaleLinear()
    this.yAxis = this.body.append('g')
    this.xScale = d3.scaleTime()
    this.xAxis = this.body.append('g')
  }

  responsivefy = () => {
    const {width, height} = this.props
    const container = d3.select(this.container)
    const aspect = width / height

    const resize = () => {
      const targetWidth = parseInt(container.style('width'))
      this.svg
      .attr("width", targetWidth)
      .attr("height", Math.round(targetWidth / aspect))
    }

    d3.select(window).on(`resize.${this.id}`, resize)

    this.svg
    .attr("viewBox", "0 0 " + width + " " + height)
    .attr("preserveAspectRatio", "xMinYMid")
    .call(resize)
  }

  render() {
    return (
      <div className="rd3__chart"
           id={this.id}
           ref={c => this.container = c}>
      </div>
    )
  }
}

D3Chart.propTypes = {
  margin: IMargin,
  width: T.number,
  height: T.number,
}

D3Chart.defaultProps = {
  margin: { top: 10, right: 20, bottom: 60, left: 30 },
  width: 300,
  height: 200,
}

export default D3Chart
