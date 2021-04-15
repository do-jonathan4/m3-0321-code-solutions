import React from 'react'
import ReactDOM from 'react-dom'

class StopWatch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isTick: false,
      num: 0
    }
    this.count = this.count.bind(this)
    this.reset = this.reset.bind(this)
  }
  count() {
    this.setState({ isTick: !this.state.isTick})

    if (!this.state.isTick) {
      this.intervalId = setInterval(() => {
        this.setState({ num: this.state.num + 1})
      }, 1000)
    } else {
      clearInterval(this.intervalId)
    }
  }
  reset() {
    if (!this.state.isTick) {
      this.setState({ num: 0 })
    }
  }
  render() {
    const num = this.state.num < 10 ? '0' + this.state.num : this.state.num
    const pausePlay = this.state.isTick ? 'fas fa-pause fa-5x' : 'fas fa-play fa-5x'

    return (
      <div>
        <div id='face' onClick={this.reset}>{num}</div>
        <div id='icon-container' onClick={this.count} class={pausePlay}></div>
      </div>
    )
  }
}

ReactDOM.render(
  <StopWatch />,
  document.getElementById('root')
)
