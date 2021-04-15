import React from 'react'

class Accordion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openIndex: null
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(index) {
    index === this.state.openIndex ?
      this.setState({
        openIndex: null
      })
    :
      this.setState({
        openIndex: index
      })
  }
  render() {
    const listItems = this.props.items.map((x, i) =>
      <div key={x.id}>
        <div className="accordion" onClick={() => this.handleClick(i)}>{x.title}</div>
        <div className={`panel ${this.state.openIndex === i ? '' : 'hidden'}`}>
          <p>{x.value}</p>
        </div>
      </div>
    )
    return <div>{listItems}</div>
  }
}

export default Accordion
