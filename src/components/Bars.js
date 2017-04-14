import React from 'react'
import T from 'prop-types'
import {IStyle} from './propTypes.js'
import uniqueId from 'lodash/uniqueId'

class Bars extends React.Component {
  render() {
    const {
      className,
      barClassName,
      data,
      xScale,
      xAccesor,
      yScale,
      yAccesor,
      height,
      style,
    } = this.props
    
    return (
      <g className={className}>
      {data.map(d => (
        <rect key={uniqueId('bar')} 
          className={barClassName}
          x={xScale(xAccesor(d))}
          y={yScale(yAccesor(d))}
          width={xScale.bandwidth()}
          height={height - yScale(yAccesor(d))}
          style={style}
        />
      ))}
      </g>
    )
  }
}
        
Bars.propTypes = {
  className: T.string,
  barClassName: T.string,
  data: T.array,
  xScale: T.func, // D3 Scale
  xAccesor: T.func,
  yScale: T.func, // D3 Scale
  yAccesor: T.func,
  height: T.number,
  style: IStyle,
}

Bars.defaultProps = {
  className: 'guxrd3__bars',
  barClassName: 'guxrd3__bar',
  style: {
    fill: 'steelblue',
    stroke: 'none',
  }
}

export default Bars
