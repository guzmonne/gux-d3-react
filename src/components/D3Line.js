import React from 'react'
import T from 'prop-types'

const d3 = Object.assign({}, 
  require('d3-selection'),
  require('d3-shape')
)

class D3Line extends React.Component {
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
    } = this.props

    this.line = (
      d3.line()
        .x(d => xScale(xAccesor(d)))
        .y(d => yScale(yAccesor(d)))
    )

    if (alpha) 
      this.line = this.line.curve(d3.curveCatmullRom.alpha(alpha))

    d3.select(this.container)
      .append('path')
      .attr('class', pathClassName)
      .attr('d', this.line(data))
      .attr('stroke', stroke)
      .attr('stroke-width', strokeWidth)
      .attr('fill', 'none')
  }

  render() {
    const {className} = this.props

    return (
      <g className={className} ref={c => this.container = c}></g>
    )
  }
}

D3Line.propTypes = {
  className: T.string,
  pathClassName: T.string,
  data: T.array,
  xScale: T.func,
  yScale: T.func,
  xAccesor: T.func,
  yAccesor: T.func,
  stroke: T.string,
  strokeWidth: T.number,
  alpha: T.number,
}

D3Line.defaultProps = {
  className: 'rd3__line',
  pathClassName: 'rd3__path',
  stroke: 'steelblue',
  strokeWidth: 2,
  alpha: 0,
}

export default D3Line
