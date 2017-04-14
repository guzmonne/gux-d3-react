import React from 'react'
import T from 'prop-types'

const d3 = require('d3-selection')

class D3Bars extends React.Component {
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
      xAccesor,
      yAccesor,
      barClassName,
      barWidth,
      fill,
    } = this.props

    d3.select(this.container)
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', barClassName)
      .attr('x', d => xScale(xAccesor(d)))
      .attr('y', d => yScale(yAccesor(d)))
      .attr('width', d => barWidth 
                        ? barWidth(d) 
                        : xScale.bandwidth && xScale.bandwidth())
      .attr('height', d => height - yScale(yAccesor(d)))
      .attr('fill', fill)
  }

  render() {
    const {className} = this.props

    return (
      <g className={className} ref={c => this.container = c}></g>
    )
  }
}

D3Bars.propTypes = {
  className: T.string,
  barClassName: T.string,
  data: T.array,
  height: T.number,
  xScale: T.func,
  yScale: T.func,
  xAccesor: T.func,
  yAccesor: T.func,
  barWidth: T.func,
  fill: T.string,
}

D3Bars.defaultProps = {
  className: 'rd3__bars',
  barClassName: 'rd3__bar',
  fill: 'steelblue',
}

export default D3Bars
