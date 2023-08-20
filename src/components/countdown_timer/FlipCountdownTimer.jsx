import React, { Component } from 'react'
import FlipCard from './FlipCard'
import "./styles.css"

class FlipCountdownTimer extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       seconds: 0,
       minutes: 0,
       hours: 0,
       days: 7

    }
  }

  getNextSunday = () => {
    const today = new Date();
    const daysUntilNextSunday = 7 - today.getDay();
    const nextSunday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + daysUntilNextSunday);
    return nextSunday;
  }
  
  countToDate = this.getNextSunday()

  componentDidMount() {
    setInterval(() => {
      const currentDate = new Date()
      const timeBetweenDates = Math.ceil((this.countToDate - currentDate) / 1000)
        this.setState({
          seconds: timeBetweenDates % 60,
          minutes: Math.floor(timeBetweenDates / 60) % 60,
          hours: Math.floor(timeBetweenDates / 3600) % 24,
          days: Math.floor(timeBetweenDates / (3600 * 24))
        })
    }, 250)
  }

  

  render() {

    return (
      <div className="container">
        <div className="container-segment">
            <div className='segment'>
              <FlipCard type='days-ones' content={this.state.days}/>
            </div>
            <span className="segment-title">Days</span>
          </div>
          <div className="container-segment">
            <div className='segment'>
              <FlipCard type='hours-ones' content={this.state.hours}/>
            </div>
            <span className="segment-title">Hours</span>
          </div>
          <div className="container-segment">
            <div className='segment'>
              <FlipCard type='minutes-ones' content={this.state.minutes }/>
            </div>
            <span className="segment-title">Minutes</span>
          </div>
          <div className="container-segment">
          <div className='segment'>
              <FlipCard type='seconds-ones' content={this.state.seconds}/>
            </div>
          <span className="segment-title">Seconds</span>
          </div>
        </div>
    )
  }
}

export default FlipCountdownTimer
