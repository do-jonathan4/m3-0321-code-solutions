import React from 'react'
import ReactDOM from 'react-dom'

class StopWatch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {num: 0}
    this.state = {tick: false}
    this.count = this.count.bind(this)
  }
  count() {
    this.setState({
      tick: !this.state.tick
    })
  }
  stop() {
    if (!this.state.tick) {
      this.setState({
        num: 0
      })
    }
  }
  render() {
    const num = this.state.num
    const tick = this.state.tick

    const pausePlay = tick ? 'play' : 'pause'

    return (
      <div>
        <div id='face' onClick={this.stop}></div>
        <div id='icon-container' onClick={this.count}>{pausePlay}</div>
      </div>
    )
  }
}

ReactDOM.render(
  <StopWatch />,
  document.getElementById('root')
)
