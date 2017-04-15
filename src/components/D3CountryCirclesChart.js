import React from 'react'
import T from 'prop-types'
import Chart from './Chart.js'
import D3Background from './D3Background.js'
import D3XAxis from './D3XAxis.js'
import D3YAxis from './D3YAxis.js'
import D3Circles from './D3Circles.js'

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
    <D3Background />
    <D3XAxis textSize={6}/>
    <D3YAxis textSize={6} />
    <D3Circles labelAccesor={d => d.country.slice(0, 2)}/>
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
