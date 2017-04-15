import React from 'react'
import Chance from 'chance'
import D3SubjectBarsChart from '../components/D3SubjectBarsChart.js'
import D3CountryCirclesChart from '../components/D3CountryCirclesChart.js'
import D3StocksLineChart from '../components/D3StocksLineChart.js'
import D3StocksAreaChart from '../components/D3StocksAreaChart.js'
import {countriesData, stocksData} from '../data.js'

const chance = new Chance()

class D3Charts extends React.Component {
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
      <div className="D3Charts">
        <button onClick={this.randomize}>Randomize</button>
        <D3SubjectBarsChart data={this.state.subjectData}/>
        <D3CountryCirclesChart data={countriesData.slice(0, 30)}/>
        <D3StocksLineChart data={stocksData}/>
        <D3StocksAreaChart data={stocksData}/>
      </div>
    )    
  }
}

export default D3Charts
