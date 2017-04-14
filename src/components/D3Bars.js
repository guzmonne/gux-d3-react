import React from 'react'
import T from 'prop-types'

const d3 = Object.assign({}, 
  require('d3-selection'),
  require('d3-transition')
)

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

    const DELAY = 1000

    const svg = d3.select(this.container)

    const t = d3.transition().duration(DELAY)
      
    const update = (
      svg
      .selectAll('rect')
      .data(data.filter(d => xAccesor(d)), xAccesor)
    )

    update
      .exit()
      .transition(t)
      .attr('y', height)
      .attr('height', 0)
      .remove()

    update
      .transition(t)
      .delay(DELAY)
      .attr('y', d => yScale(yAccesor(d)))
      .attr('height', d => height - yScale(yAccesor(d)))

    update  
      .enter()
      .append('rect')
      .attr('class', barClassName)
      .attr('fill', fill)
      .attr('x', d => xScale(xAccesor(d)))
      .attr('width', d => barWidth 
                        ? barWidth(d) 
                        : xScale.bandwidth && xScale.bandwidth())
      .attr('y', height)
      .attr('height', 0)
      .transition(t)
//      .delay(update.exit().size() ? 2 * DELAY : 0)
      .attr('y', d => yScale(yAccesor(d)))
      .attr('height', d => height - yScale(yAccesor(d)))
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
