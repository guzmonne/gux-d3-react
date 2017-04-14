import React from 'react'
import Chance from 'chance'
import range from 'lodash/range'
import D3SubjectBarsChart from '../components/D3SubjectBarsChart.js'
import D3CountryCirclesChart from '../components/D3CountryCirclesChart.js'
import D3StocksLineChart from '../components/D3StocksLineChart.js'
import D3StocksAreaChart from '../components/D3StocksAreaChart.js'
import {subjectData, countriesData, stocksData} from '../data.js'

const chance = new Chance()

class D3Charts extends React.Component {
  state = {
    subjectData
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
    range(0, chance.d10()).map(d => ({
      subject: chance.word(),
      score: chance.d4() > 1 ? chance.d100() : null,
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
