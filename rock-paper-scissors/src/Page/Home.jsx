import React from 'react'
import { Link } from 'react-router-dom'
import paper from '../images/paper-transparent.png';
import rock from '../images/rock-transparent.png';
import scissors from '../images/scissor-transaprent.png';

export default function Home() {
  return (
    <div className='home'>
        <div className="rock-paper">
          <img src={paper} className="App-logo rock-ani" alt="logo"/>
          <img src={rock} className="App-logo paper-ani" alt="logo" />
        </div>
        <img src={scissors} className="App-logo scissor-ani" alt="logo" />
        <Link to='play' className="btn btn-primary" >Play</Link>
    </div>
  )
}
