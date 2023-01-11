import React from 'react'

export default function Winning({setresult,result,className}) {
  return (
    <div className={className}>
        <div className='result'> {result} </div>
        <button onClick={()=>{setresult("")}} className='btn btn-primary play_again'>Play again</button>
        </div>
  )
}
