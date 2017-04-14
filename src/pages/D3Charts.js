import React from 'react'
import D3SubjectBarsChart from '../components/D3SubjectBarsChart.js'
import D3CountryCirclesChart from '../components/D3CountryCirclesChart.js'
import D3StocksLineChart from '../components/D3StocksLineChart.js'
import D3StocksAreaChart from '../components/D3StocksAreaChart.js'
import {subjectData, countriesData, stocksData} from '../data.js'

const D3Charts = () => (
  <div className="D3Charts">
    <D3SubjectBarsChart data={subjectData.slice(0, 10)}/>
    <D3CountryCirclesChart data={countriesData.slice(0, 30)}/>
    <D3StocksLineChart data={stocksData}/>
    <D3StocksAreaChart data={stocksData}/>
  </div>
)

export default D3Charts
