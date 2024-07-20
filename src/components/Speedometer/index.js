// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  accelerate = () => {
    const {count} = this.state

    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  decelerate = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="speedometer"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <p className="speed">
          Speed is <span>{count}</span>mph
        </p>
        <p className="description">Min Limit is Omph, Max Limit is 200mph</p>
        <div>
          <button
            className="accelerate button"
            type="submit"
            onClick={this.accelerate}
          >
            Accelerate
          </button>
          <button
            className="apply-brake button"
            type="submit"
            onClick={this.decelerate}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
