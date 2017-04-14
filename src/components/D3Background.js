import React from 'react'
import T from 'prop-types'

const d3 = Object.assign({}, 
  require('d3-selection')
)

class D3Background extends React.Component {
  componentDidMount() {
    this.draw()
  }

  componentDidUpdate() {
    this.draw()
  }

  draw = () => {
    const {
      width,
      height,
      fill,
      stroke,
    } = this.props

    d3.select(this.container)
    .append('rect')
      .attr('width', width)
      .attr('height', height)
      .attr('fill', fill)
      .attr('stroke', stroke)
  }

  render() {
    const {className} = this.props
    return (
      <g ref={c => this.container = c} className={className}></g>
    )
  }
}

D3Background.propTypes = {
  className: T.string,
  fill: T.string,
  sroke: T.string,
}

D3Background.defaultProps = {
  className: 'rd3__background',
  fill: '#eee',
  stroke: 'none',
}

export default D3Background
