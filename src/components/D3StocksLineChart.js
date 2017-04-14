import React from 'react'
import T from 'prop-types'
import Chart from './Chart.js'
import D3Line from './D3Line.js'
import D3Background from './D3Background.js'
import D3XAxis from './D3XAxis.js'
import D3YAxis from './D3YAxis.js'

const d3 = Object.assign({}, 
  require('d3-array')
)

const D3StocksLineChart = ({data}) => (
  <Chart
    data={data}
    xAccesor={d => new Date(d.timestamp)}
    yAccesor={d => +d.close}
    margin={{top: 10, right: 20, bottom: 30, left: 30}}
    xScale="time"
    xScaleOptions={{
      startDate: d3.min(data, co => (
        d3.min(co.values, d => new Date(d.timestamp))
      )),
      endDate: d3.max(data, co => (
        d3.max(co.values, d => new Date(d.timestamp))
      )),           
    }}
    yScale="linear"
    yScaleOptions={{
      minRange: d3.min(data, co => d3.min(co.values, d => +d.close)),
      maxRange: d3.max(data, co => d3.max(co.values, d => +d.close)),
    }}
  >
    <D3Background />
    <D3XAxis ticks={8} textAngle={-45} textSize={6}/>
    <D3YAxis ticks={8} textSize={6}/>
    <D3Line data={data[0].values} stroke={'#FF9900'}/>
    <D3Line data={data[1].values} stroke={'#3369E8'}/>
  </Chart>
)

D3StocksLineChart.propTypes = {
  data: T.array,
}

export default D3StocksLineChart
