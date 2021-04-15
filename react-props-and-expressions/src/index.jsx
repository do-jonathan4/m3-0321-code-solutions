import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  return <button>{props.text}</button>;
}

const element = (
  <div>
    <CustomButton text="I" />
    <CustomButton text="know" />
    <CustomButton text="React!" />
  </div>
);
const container = document.getElementById('root');

ReactDOM.render(element, container);
