import React from 'react'
import T from 'prop-types'
import {IStyle} from './propTypes.js'

class Background extends React.Component {
  render() {
    return (
      <rect className="rd3__chart-svg-body-bg" 
        width={this.props.width} 
        height={this.props.height} 
        style={this.props.style}/>
    )
  }
}

Background.propTypes = {
  width: T.number,
  height: T.number,
  style: IStyle,
}

Background.defaultProps = {
  style: {
    fill: '#eeeeee',
  }
}

export default Background
