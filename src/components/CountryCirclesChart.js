import React from 'react'
import T from 'prop-types'
import Chart from './Chart.js'
import Background from './Background.js'
import Axis from './Axis.js'
import Circles from './Circles.js'

const d3 = require('d3-array')

const CountryCirclesChart = ({data}) => (
  <Chart 
    data={data}
    xAccesor={d => d.cost}
    yAccesor={d => d.expectancy}
    zAccesor={d => d.population}
    margin={{top: 10, right: 20, bottom: 20, left: 30}}
    xScale="linear"
    xScaleOptions={{
      padding: 0.2,
      minRange: 0,
    }}
    yScale="linear"
    yScaleOptions={{
      minRange: 0,
      maxRange: d3.max(data, d => d.expectancy) * 1.1
    }}
    zScale="sqrt"
    zScaleOptions={{
      maxRadius: 10,
    }}
  >
    <Background />
    <Axis variable="x" fontSize={6}/>
    <Axis variable="y" fontSize={6} />
    <Circles labelAccesor={d => d.country.slice(0, 2)}/>
  </Chart>
)

CountryCirclesChart.propTypes = {
  data: T.arrayOf(T.shape({
    cost: T.number,
    expectancy: T.number,
    population: T.number,
  }))
}

export default CountryCirclesChart
