import React from 'react';
import ReactDom from 'react-dom';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.flip = this.flip.bind(this);
  }

  flip() {
    this.setState({
      isClicked: !this.state.isClicked
    });
  }

  render() {
    const isClicked = this.state.isClicked;
    const position = isClicked ? 'On' : 'Off';
    const positionClass = isClicked ? 'on slider' : 'slider';
    const containerBG = isClicked ? 'container-slider-on' : 'container-slider';

    return (
      <div className='container'>
        <div className={containerBG}>
          <div onClick={this.flip} className={positionClass}></div>
        </div>
        <div className='container'>
          <h2>{position}</h2>
        </div>
      </div>
    );
  }
}

ReactDom.render(
  <ToggleSwitch />,
  document.getElementById('root')
);
