import React from 'react'
import Chance from 'chance'
import SubjectBarsChart from '../components/SubjectBarsChart.js'
import CountryCirclesChart from '../components/CountryCirclesChart.js'
import StocksLineChart from '../components/StocksLineChart.js'
import StocksAreaChart from '../components/StocksAreaChart.js'
import {countriesData, stocksData} from '../data.js'

const chance = new Chance()

class ReactCharts extends React.Component {
    state = {
    subjectData: []
  }

  componentWillMount() {
    this.randomize()
  }

  randomize = () => (
    this.setState({
      subjectData: this.randomSubjectData()
    })
  )
  
  randomSubjectData = () => (
    [
      'Calculus',
      'Science',
      'Philosophy',
      'English',
      'Physics',
      'Algebra',
      'Spanish',
      'Chemistry'
    ].slice(0, chance.d8()).map(subject => ({
      subject,
      score: chance.d4() > 1 ? chance.d100() : 0,
    }))
  )

  render() {
    return (
      <div className="ReactCharts">
        <button onClick={this.randomize}>Randomize</button>
        <SubjectBarsChart data={this.state.subjectData}/>
        <CountryCirclesChart data={countriesData.slice(0, 30)}/>
        <StocksLineChart data={stocksData}/>
        <StocksAreaChart data={stocksData}/>
      </div>
    )
  }
}

export default ReactCharts
