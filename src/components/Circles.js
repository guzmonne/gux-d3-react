import React from 'react'
import T from 'prop-types'
import uniqueId from 'lodash/uniqueId'
import {IStyle} from './propTypes.js'

class Circles extends React.Component {
  render() {
    const {
      className,
      circleClassName,
      labelClassName,
      data,
      xScale,
      xAccesor,
      yScale,
      yAccesor,
      zScale,
      zAccesor,
      labels,
      labelAccesor,
      labelY,
      labelFontSize,
      style,
    } = this.props
    
    return (
      <g className={className}>
      {data.map(d => (
        <g key={uniqueId('circle')} 
          transform={`translate(${
            xScale(xAccesor(d))
          }, ${
            yScale(yAccesor(d))
          })`}
        >
        {labels && 
          <text className={labelClassName}
            y={labelY}
            style={{
              textAnchor: 'middle',
              fill: 'black',
              fontSize: labelFontSize,
            }}
          >
            {labelAccesor ? labelAccesor(d) : zAccesor(d)}
          </text>
        } 
          <circle
            className={circleClassName}
            cx={0}
            cy={0}
            r={zScale(zAccesor(d))}
            style={style}
          />  
        </g>
      ))}
      </g>
    )
  }
}

Circles.propTypes = {
  className: T.string,
  circleClassName: T.string,
  labelClassName: T.string,
  labelAccesor: T.func,
  labels: T.bool,
  labelFontSize: T.string,
  labelY: T.number,
  data: T.array,
  xScale: T.func, // D3 Scale
  xAccesor: T.func,
  yScale: T.func, // D3 Scale
  yAccesor: T.func,
  zScale: T.func, // D3 Scale
  zAccesor: T.func,
  radius: T.number,
  style: IStyle,
}

Circles.defaultProps = {
  className: 'rd3__circles',
  circleClassName: 'rd3__circles',
  labelClassName: 'rd3__label',
  labelFontSize: '6px',
  labelY: 2,
  labels: true,
  radius: 5,
  style: {
    fill: "steelblue",
    fillOpacity: 0.5,
  }
}

export default Circles
