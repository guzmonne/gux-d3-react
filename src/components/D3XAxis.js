import React from 'react'
import T from 'prop-types'
import {DELAY} from '../variables.js'

const d3 = Object.assign({}, 
  require('d3-selection'),
  require('d3-axis'),
  require('d3-transition')
)

class D3XAxis extends React.Component {
  componentDidMount(){
    this.draw()
  }

  componentDidUpdate() {
    this.draw()
  }

  draw = () => {
    const {
      height,
      xScale,
      ticks,
      tickSize,
      tickPadding,
      textAnchor,
      textAngle,
      textSize,
    } = this.props

    this.axis = (
      d3.axisBottom(xScale)
      .ticks(ticks)
      .tickSize(tickSize)
      .tickPadding(tickPadding)
    )

    d3.select(this.container)
    .attr('transform', `translate(0, ${height})`)
    .transition(d3.transition().duration(DELAY))
    .call(this.axis)
    .selectAll('text')
    .style('text-anchor', textAnchor)
    .attr('font-size', textSize + 'px')
    .attr('transform', `rotate(${textAngle})`)
  }

  render() {
    const {className} = this.props

    return (
      <g className={className} ref={c => this.container = c}></g>
    )
  }
}

D3XAxis.propTypes = {
  className: T.string,
  height: T.number,
  xScale: T.func,
  ticks: T.number,
  tickSize: T.number,
  tickPadding: T.number,
  textAnchor: T.string,
  textAngle: T.number,
  textSize: T.number,
}

D3XAxis.defaultProps = {
  className: 'rd3__x-axis',
  ticks: 5,
  tickSize: 10,
  tickPadding: 5,
  textAnchor: 'end',
  textAngle: 0,
  textSize: 10,
}

export default D3XAxis
