import React from 'react'
import T from 'prop-types'

const d3 = Object.assign({}, 
  require('d3-selection'),
  require('d3-axis')
)

class Axis extends React.Component {
  constructor() {
    super()
    
    this.drawAxis = this.drawAxis.bind(this)
    this.drawXAxis = this.drawXAxis.bind(this)
    this.drawYAxis = this.drawYAxis.bind(this)
  }
  
  componentDidMount() {
    this.drawAxis()
  }
  
  componentDidUpdate() {
    this.drawAxis()
  }
  
  drawAxis() {
    return (
      this.props.variable === 'x' 
      ? this.drawXAxis()
      : this.drawYAxis()
    )
  }
      
  drawXAxis() {
    const height = this.props.height
    
    return (
      d3.select(this.container)
      .attr('transform', `translate(0, ${height})`)
      .call(this.createAxis())
      .selectAll('text')
      .style('text-anchor', this.props.textAnchor)
      .attr('font-size', this.props.fontSize + 'px')
      .attr('transform', `rotate(${this.props.textAngle})`)
    )
  }
  
  drawYAxis() {
    if (!this.props.body) return
      
    d3.select(this.container)
      .call(this.createAxis())
      .selectAll('text')
      .style('text-anchor', this.props.textAnchor)
      .style('font-size', this.props.fontSize)
      .attr('transform', `rotate(${this.props.textAngle})`)
  }
  
  createAxis() {
    const axis = this.props.variable === 'x' 
                 ? d3.axisBottom(this.props.xScale)
                 : d3.axisLeft(this.props.yScale)
    return (
      axis
      .ticks(this.props.ticks)
      .tickSize(this.props.tickSize)
      .tickPadding(this.props.tickPadding)
    )
  }
  
  render() {
    return (
      <g className={`rd3__${this.props.variable}Axis`} 
        ref={c => this.container = c}>
      </g>
    )
  }
}

Axis.propTypes = {
  variable: T.oneOf(['x', 'y']),
  xScale: T.func,
  targetHeight: T.number,
  ticks: T.number,
  tickSize: T.number,
  tickPadding: T.number,
  textAnchor: T.string,
  textAngle: T.number,
  fontSize: T.number,
}

Axis.defaultProps = {
  ticks: 5,
  tickSize: 10,
  tickPadding: 5,
  textAnchor: 'end',
  textAngle: 0,
  fontSize: 10,
}

export default Axis
