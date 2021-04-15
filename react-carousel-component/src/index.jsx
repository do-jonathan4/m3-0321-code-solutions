import React from 'react'
import ReactDOM from 'react-dom'
import Carousel from './carousel'

const imgURL = [
  { id: '00', url: "https://static.wikia.nocookie.net/p__/images/4/4b/833_Madoka_Kaname.png/revision/latest?cb=20171107173633&path-prefix=protagonist" },
  { id: '01', url: "https://static.wikia.nocookie.net/p__/images/d/d0/835_Homura_Akemi.png/revision/latest/scale-to-width-down/1000?cb=20171107173921&path-prefix=protagonist" },
  { id: '02', url: "https://static.wikia.nocookie.net/p__/images/0/0b/841_Kyoko_Sakura.png/revision/latest/scale-to-width-down/1000?cb=20171107174228&path-prefix=protagonist" },
  { id: '03', url: "https://static.wikia.nocookie.net/p__/images/3/3e/839_Mami_Tomoe.png/revision/latest/scale-to-width-down/1000?cb=20171107174151&path-prefix=protagonist" }
]

ReactDOM.render(
  <Carousel items={imgURL} />,
  document.getElementById('root')
);
