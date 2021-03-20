import React from 'react'
import ReactDom from 'react-dom'

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isClicked: false}
    this.flip = this.flip.bind(this)
  }
  flip() {
    this.setState({
      isClicked: !this.state.isClicked
    })
   }
  render () {
    let isClicked = this.state.isClicked
    let position;
    let positionClass;
    let containerBG;

    isClicked ? position = 'On' : position = 'Off'
    isClicked ? positionClass = 'on slider' : positionClass = 'slider'
    isClicked ? containerBG = 'container-slider-on' : containerBG = 'container-slider'

    return (
      <div class='container'>
        <div class={containerBG}>
          <div onClick={this.flip} class={positionClass}></div>
        </div>
        <div class='container'>
          <h2>{position}</h2>
        </div>
      </div>
    )
  }
}

ReactDom.render(
  <ToggleSwitch />,
  document.getElementById('root')
)
