import React from 'react'
import T from 'prop-types'

const d3 = Object.assign({}, 
  require('d3-shape')
)

class Area extends React.Component {
  render() {
    const {
      className,
      areaClassName,
      data,
      xScale,
      xAccesor,
      yScale,
      yAccesor,
      stroke,
      strokeWidth,
      fill,
      fillOpacity,
      alpha,
    } = this.props
    
    const area = (
      d3.area()
      .x(d => xScale(xAccesor(d)))
      .y0(yScale(yScale.domain()[0]))
      .y1(d => yScale(yAccesor(d)))
    )
    
    if (alpha) area.curve(d3.curveCatmullRom.alpha(alpha))
    
    return (
      <g className={className}>
        <path className={areaClassName}
          d={area(data)}
          style={{
            stroke,
            strokeWidth,
            fill,
            fillOpacity,
          }}
        />
      </g>
    )
  }
}

Area.propTypes = {
  className: T.string,
  areaClassName: T.string,
  xScale: T.func, // D3 Scale
  xAccesor: T.func,
  yScale: T.func, // D3 Scale
  yAccesor: T.func,
  stroke: T.string,
  strokeWidth: T.number,
  fill: T.string,
  fillOpacity: T.number,
  alpha: T.number,
}

Area.defaultProps = {
  className: 'rd3__area',
  areaClassName: 'rd3__area-path',
  stroke: 'steelblue',
  strokeWidth: 1,
  fill: 'steelblue',
  fillOpacity: 0.5,
  alpha: 0,
}

export default Area
