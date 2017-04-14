import React from 'react'
import T from 'prop-types'
import Chart from './Chart.js'
import D3Background from './D3Background.js'
import D3XAxis from './D3XAxis.js'
import D3YAxis from './D3YAxis.js'
import D3Bars from './D3Bars.js'

const D3SubjectBarsChart = ({data}) => (
  <Chart 
    data={data}
    xAccesor={d => d.subject}
    yAccesor={d => d.score}
    xScale="band"
    xScaleOptions={{
      padding: 0.2,
    }}
    yScale="linear"
    yScaleOptions={{
      minRange: 0,
    }}
  >
    <D3Background />
    <D3XAxis textAngle={-45}/>
    <D3YAxis ticks={10}/>
    <D3Bars />
  </Chart>
)

D3SubjectBarsChart.propTypes = {
  data: T.array
}

export default D3SubjectBarsChart
