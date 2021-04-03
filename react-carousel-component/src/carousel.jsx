import React from 'react'

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imgIndex: 0,
      activeInterval: null
    }
    this.changeIndex = this.changeIndex.bind(this)
    this.slideShow = this.slideShow.bind(this)
  }
  slideShow() {
    if (this.state.state.activeInterval) {
      clearInterval(this.state.activeInterval)
      this.setState({ activeInterval: null })
    } else {
      const newInterval = setInterval(this.changeIndex, 1000)
      this.setState({ activeInterval: newInterval })
    }
  }
  changeIndex(n) {
    const slides = document.getElementsByClassName("slide");
    this.setState({ imgIndex: n })

    if (n > slides.length - 1) {
      n = 0
      this.setState({ imgIndex: n })
    }
    if (n < 0) {
      n = slides.length - 1
      this.setState({ imgIndex: n })
    }
  }
  render() {
    const slides = this.props.items.map((x, i) =>
      <div key={x.id}
      className={`slide ${this.state.imgIndex === i ? '' : 'hidden'}`}>
        <img src={x.url}/>
      </div>
    )
    const dot = this.props.items.map((x, i) =>
      <div key={x.id}
      className={`dot ${this.state.imgIndex === i ? 'active' : ''}`}
        onClick={() => this.changeIndex(i)}
      ></div>
    )

    return (
      <div>
        <div className="slide-container">
          {slides}
          <div className="fas fa-chevron-left fa-3x prev"
          onClick={() => this.changeIndex(this.state.imgIndex-1)}></div>
          <div className="fas fa-chevron-right fa-3x next"
          onClick={() => this.changeIndex(this.state.imgIndex+1)}></div>
        </div>
        <div className="dot-container">
          {dot}
        </div>
      </div>
    )
  }
}

export default Carousel
