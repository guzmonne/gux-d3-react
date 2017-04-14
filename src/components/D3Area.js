import React from 'react'
import T from 'prop-types'

const d3 = Object.assign({}, 
  require('d3-selection'),
  require('d3-shape')
)

class D3Area extends React.Component {
  componentDidMount() {
    this.draw()
  }

  componentDidUpdate() {
    this.draw()
  }

  draw = () => {
    const {
      data,
      pathClassName,
      xScale,
      yScale,
      xAccesor,
      yAccesor,
      alpha,
      stroke,
      strokeWidth,
      fill,
      fillOpacity,
    } = this.props

    this.area = (
      d3.area()
        .x(d => xScale(xAccesor(d)))
        .y0(yScale(yScale.domain()[0]))
        .y1(d => yScale(yAccesor(d)))
    )

    if (alpha) 
      this.area = this.area.curve(d3.curveCatmullRom.alpha(alpha))

    d3.select(this.container)
      .append('path')
      .attr('class', pathClassName)
      .attr('d', this.area(data))
      .attr('stroke', stroke)
      .attr('stroke-width', strokeWidth)
      .attr('fill', fill)
      .attr('fill-opacity', fillOpacity)
  }

  render() {
    const {className} = this.props

    return (
      <g className={className} ref={c => this.container = c}></g>
    )
  }
}

D3Area.propTypes = {
  className: T.string,
  pathClassName: T.string,
  data: T.array,
  xScale: T.func,
  yScale: T.func,
  xAccesor: T.func,
  yAccesor: T.func,
  stroke: T.string,
  strokeWidth: T.number,
  fill: T.string,
  fillOpacity: T.number,
  alpha: T.number,
}

D3Area.defaultProps = {
  className: 'rd3__line',
  pathClassName: 'rd3__path',
  stroke: 'steelblue',
  strokeWidth: 2,
  fill: 'steelblue',
  fillOpacity: 0.5,
  alpha: 0,
}

export default D3Area
