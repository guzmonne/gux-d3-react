import React from 'react'
import SubjectBarsChart from '../components/SubjectBarsChart.js'
import CountryCirclesChart from '../components/CountryCirclesChart.js'
import StocksLineChart from '../components/StocksLineChart.js'
import StocksAreaChart from '../components/StocksAreaChart.js'
import {subjectData, countriesData, stocksData} from '../data.js'

const ReactCharts = () => (
  <div className="ReactCharts">
    <SubjectBarsChart data={subjectData.slice(0, 10)}/>
    <CountryCirclesChart data={countriesData.slice(0, 30)}/>
    <StocksLineChart data={stocksData}/>
    <StocksAreaChart data={stocksData}/>
  </div>
)

export default ReactCharts
