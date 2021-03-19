import React from 'react'
import ReactDom from 'react-dom'

class CustomButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
    this.countClick = this.countClick.bind(this)
  }
  countClick() {
    let count = this.state.count
    let result = count + 1
  count < 21
    ? this.setState({ count: result })
    : this.setState({ count: 0 })
  }
  render() {
    let count = this.state.count
    let color;

    count >= 3 && count < 6 ? color = 'three'
    : count >= 6 && count < 9 ? color = 'six'
    : count >= 9 && count < 12 ? color = 'nine'
    : count >= 12 && count < 15 ? color = 'twelve'
    : count >= 15 && count < 18 ? color = 'fifteen'
    : count >= 18 && count < 21 ? color = 'eighteen'
    : color = ''

    return (
      <button onClick={this.countClick} class={color}>
        Hot Button
      </button>
    )
  }
}

ReactDom.render(
  <CustomButton />,
  document.getElementById('root')
)
