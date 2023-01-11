import React from 'react'
import './Play.css'
import { Link } from 'react-router-dom'
import paper from '../images/paper2.png';
import rock from '../images/rock3.png';
import scissors from '../images/scissors5.png';
import { useState } from 'react';
import Winning from './Winning';

export default function Play() {
  const [score, setScore] = useState(0);
  const [result, setresult] = useState("");

  // const [playObject] = useState([
  //   {"id":1,"name":"Rock"},
  //   {"id":2,"name":"Papaer"},
  //   {"id":3,"name":"Scissors"},
  // ])



  function mainfunction(e){
    const random = Math.floor(Math.random() * (4 - 1)) + 1;
    if (random === e) {
      setScore((pre)=> {return pre+1})
      setresult("win")
    }else{
      setScore((pre)=> {return pre-1})
      setresult("lose")
    }
  }

  return (
    <div className='home'>
        <div className='float-left'>
          <div className='score_name'>Score</div> <br/>          
          <div className='score_value'>{score}</div> 
        </div>
        <div className="rock-paper">
          <button onClick={()=>mainfunction(2)}><img src={paper} className="play-paper play-obj" alt="logo"/></button>
          <button onClick={()=>mainfunction(1)}><img src={rock} className=" play-rock play-obj" alt="logo" /></button>
        </div>
        <button onClick={()=>mainfunction(3)}><img src={scissors} className="play-scissor play-obj" alt="logo" /></button>
        <span> <Link to='/' className="btn btn-primary" >Home</Link> </span>
        
        {result && result === "win" && <Winning setresult={setresult} result={result} className="result-modal winimage"/>}
        {result && result === "lose" && <Winning setresult={setresult} result={result} className="result-modal loseimage"/>}
    </div>
  )
}
