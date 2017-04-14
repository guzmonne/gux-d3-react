import React from 'react'
import T from 'prop-types'
import Chart from './Chart.js'
import Background from './Background.js'
import Axis from './Axis.js'
import Bars from './Bars.js'

const SubjectBarsChart = ({data}) => (
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
    <Background />
    <Axis variable="x" textAngle={-45}/>
    <Axis variable="y" ticks={10} tickSize={5} />
    <Bars />
  </Chart>
)

SubjectBarsChart.propTypes = {
  data: T.arrayOf(T.shape({
    subject: T.string.isRequired,
    score: T.number.isRequired,
  }))
}

export default SubjectBarsChart
