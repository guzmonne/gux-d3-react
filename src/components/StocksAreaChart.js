import React from 'react'
import T from 'prop-types'
import Chart from './Chart.js'
import Area from './Area.js'
import Background from './Background.js'
import Axis from './Axis.js'

const d3 = Object.assign({}, 
  require('d3-array')
)

const StocksAreaChart = ({data}) => (
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
    <Background />
    <Axis variable="x" ticks={8} textAngle={-45} fontSize={6}/>
    <Axis variable="y" ticks={8} fontSize={6}/>
    <Area data={data[0].values} 
      stroke={'#FF9900'} 
      fill={'#FF9900'} 
      alpha={0}/>
    <Area data={data[1].values} 
      stroke={'#3369E8'} 
      fill={'#3369E8'} 
      alpha={0}/>
  </Chart>
)

StocksAreaChart.propTypes = {
  data: T.array,
}

export default StocksAreaChart
