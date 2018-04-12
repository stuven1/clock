import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  pause = () => {
    clearInterval(this.timerID)
  }

  restart = () => {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  clockName = () => {
    this.state.date.getMinutes()
  }

  render() {
    return (
      <div>
        <div className={this.clockName()}>

          <img src="./time.png" alt="Im a clock" width="150px" height="150px" />
          <h1>Hello world!</h1>
          <h4>The current time is:</h4>
          <p>{this.state.date.toLocaleTimeString()}</p>

          <button className="button-1" onClick={this.pause}>Stop time</button>
          <button className="button-2" onClick={this.restart}>Restart time</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Clock />, document.getElementById("root"))
