import React from 'react';
import ReactCharts from './ReactCharts.js'
import D3Charts from './D3Charts.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ReactCharts />
        <D3Charts />
      </div>
    )
  }
}

export default App
