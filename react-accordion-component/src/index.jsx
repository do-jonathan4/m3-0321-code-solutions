import React from 'react'
import ReactDOM from 'react-dom'
import Accordion from './accordion'

const topics = [
  { id:'01', title: "HTML", value: "Lorem ipsum dolor sit amet, consectetur" },
  { id: '02', title: "CSS", value: "Lorem ipsum dolor sit amet, consectetur" },
  { id: '03', title: "JavaScript", value: "Lorem ipsum dolor sit amet, consectetur" }
]

ReactDOM.render(
  <Accordion items={topics}/>,
  document.getElementById('root')
);
