import React, { Component } from 'react'
import FlipCard from './FlipCard'
import './styles.css'

// Define the type for the FlipCountdownTimer props
interface FlipCountdownTimerProps {}

// Define the type for the FlipCountdownTimer state
interface FlipCountdownTimerState {
    remainingTime: {
        days: number
        hours: number
        minutes: number
        seconds: number
    }
}

class FlipCountdownTimer extends Component<
    FlipCountdownTimerProps,
    FlipCountdownTimerState
> {
    private animationFrame: number | null = null

    constructor(props: FlipCountdownTimerProps) {
        super(props)

        this.state = {
            remainingTime: {
                days: 7,
                hours: 0,
                minutes: 0,
                seconds: 0,
            },
        }
    }

    calculateRemainingTime() {
        const currentDate = new Date()
        const nextSunday = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate() + (7 - currentDate.getDay())
        )
        const timeDifference = nextSunday.getTime() - currentDate.getTime()

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
        const hours = Math.floor(
            (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        const minutes = Math.floor(
            (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        )
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

        return { days, hours, minutes, seconds }
    }

    componentDidMount() {
        const updateCounter = () => {
            this.setState({
                remainingTime: this.calculateRemainingTime(),
            })

            this.animationFrame = requestAnimationFrame(updateCounter)
        }

        this.animationFrame = requestAnimationFrame(updateCounter)
    }

    componentWillUnmount() {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame)
        }
    }

    render() {
        const { days, hours, minutes, seconds } = this.state.remainingTime

        return (
            <div className="container  mx-auto">
                <div className="container-segment">
                    <div className="segment">
                        <FlipCard type="days-ones" content={days} />
                    </div>
                    <span className="segment-title text-xs md:text-lg">
                        Jours
                    </span>
                </div>
                <div className="container-segment">
                    <div className="segment">
                        <FlipCard type="hours-ones" content={hours} />
                    </div>
                    <span className="segment-title text-xs md:text-lg">
                        Heures
                    </span>
                </div>
                <div className="container-segment">
                    <div className="segment">
                        <FlipCard type="minutes-ones" content={minutes} />
                    </div>
                    <span className="segment-title text-xs md:text-lg">
                        Minutes
                    </span>
                </div>
                <div className="container-segment">
                    <div className="segment">
                        <FlipCard type="seconds-ones" content={seconds} />
                    </div>
                    <span className="segment-title text-xs md:text-lg">
                        Secondes
                    </span>
                </div>
            </div>
        )
    }
}

export default FlipCountdownTimer
