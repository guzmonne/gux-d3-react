import React from 'react'
import T from 'prop-types'

const d3 = require('d3-selection')

class D3Circles extends React.Component {
  componentDidMount() {
    this.draw()
  }

  componentDidUpdate() {
    this.draw()
  }

  draw = () => {
    const {
      data,
      xScale,
      yScale,
      zScale,
      xAccesor,
      yAccesor,
      zAccesor,
      labelAccesor,
      circleContainerClassName,
      circleClassName,
      textClassName,
      fill,
      fillOpacity,
      textAnchor,
      textFill,
      textSize,
      textY,
    } = this.props

    this.circles = (
      d3.select(this.container)
      .selectAll('.' + circleContainerClassName)
      .data(data)
      .enter()
      .append('g')
      .attr('class', circleContainerClassName)
      .attr('transform', d => `translate(${
        xScale(xAccesor(d))
      }, ${
        yScale(yAccesor(d))
      })`)
    )
    // Circles
    this.circles
    .append('circle')
    .attr('class', circleClassName)
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('r', d => zScale(zAccesor(d)))
    .attr('fill', fill)
    .attr('fill-opacity', fillOpacity)
    // Labels
    this.circles
    .append('text')
    .attr('class', textClassName)    
    .attr('text-anchor', textAnchor)
    .attr('fill', textFill)
    .attr('y', textY)
    .attr('font-size', textSize)
    .text(labelAccesor)
  }

  render() {
    const {className} = this.props

    return (
      <g className={className} ref={c => this.container = c}></g>
    )
  }
}

D3Circles.propTypes = {
  className: T.string,
  circleContainerClassName: T.string,
  circleClassName: T.string,
  textClassName: T.string,
  data: T.array,
  height: T.number,
  xScale: T.func,
  yScale: T.func,
  zScale: T.func,
  xAccesor: T.func,
  yAccesor: T.func,
  zAccesor: T.func,
  labelAccesor: T.func,
  fill: T.string,
  fillOpacity: T.number,
  textAnchor: T.string,
  textFill: T.string,
  textY: T.number,
  textSize: T.number,
}

D3Circles.defaultProps = {
  className: 'rd3__circles',
  circleContainerClassName: 'rd3__circle-container',
  circleClassName: 'rd3__circle',
  circleText: 'rd3__circle-text',
  fill: 'steelblue',
  fillOpacity: 0.5,
  textAnchor: 'middle',
  textFill: 'black',
  textY: 2,
  textSize: 6,
}

export default D3Circles
