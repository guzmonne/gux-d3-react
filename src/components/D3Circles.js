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
      height,
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
      textY,
    } = this.props

    this.circles = (
      d3.select(this.container)
      .selectAll('.' + circleClassName)
      .data(data)
      .enter()
      .append('g')
      .attr('class', circleClassName)
      .attr('transform', d => `translate(${
        xScale(xAccesor(d))
      }, ${
        yScale(yAccesor(d))
      })`)
    )

    this.circles
    .append('circle')
    .attr('class', circleClassName)
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('r', d => zScale(zAccesor(d)))
    .attr('fill', fill)
    .attr('fill-opacity', fillOpacity)

    this.circles
    .append('text')
    .attr('class', textClassName)    
    .attr('text-anchor', textAnchor)
    .attr('fill', textfill)
    .attr('y', textY)
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
}

export default D3Circles
