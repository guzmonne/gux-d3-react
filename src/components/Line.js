import React from 'react'
import T from 'prop-types'

const d3 = Object.assign({}, 
  require('d3-shape')
)

class Line extends React.Component {
  render() {
    const {
      className,
      pathClassName,
      data,
      xScale,
      xAccesor,
      yScale,
      yAccesor,
      stroke,
      strokeWidth,
      fill,
      alpha,
    } = this.props
    
    const line = (
      d3.line()
      .x(d => xScale(xAccesor(d)))
      .y(d => yScale(yAccesor(d)))
    )
    
    if (alpha) line.curve(d3.curveCatmullRom.alpha(alpha))
    
    return (
      <g className={className}>
        <path className={pathClassName}
          d={line(data)}
          style={{
            stroke,
            strokeWidth,
            fill,
          }}
        />
      </g>
    )
  }
}

Line.propTypes = {
  className: T.string,
  pathClassName: T.string,
  data: T.array,
  xScale: T.func, // D3 Scale
  xAccesor: T.func,
  yScale: T.func, // D3 Scale
  yAccesor: T.func,
  stroke: T.string,
  strokeWidth: T.number,
  fill: T.string,
  alpha: T.number,
}

Line.defaultProps = {
  className: 'rd3__line',
  pathClassName:'rd3__line-path',
  stroke: 'steelblue',
  strokeWidth: 2,
  fill: 'none',
  alpha: 0,
}

export default Line
