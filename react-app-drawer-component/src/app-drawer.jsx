import React from 'react'

class AppDrawer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      isClicked: !this.state.isClicked
    })
  }
  render() {
    const isClicked = this.state.isClicked
    const hidden = isClicked ? '' : 'hidden'

    return (
      <div>
        <i className={`fas fa-bars fa-2x`} onClick={this.handleClick}></i>
        <div className={`menu-container ${hidden}`} onClick={this.handleClick}>
          <div className="menu">
            <h1>Menu</h1>
            <h2>About</h2>
            <h2>Get Started</h2>
            <h2>Sign In</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default AppDrawer
