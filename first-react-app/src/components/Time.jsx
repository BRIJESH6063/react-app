import React from 'react'
import { useState } from 'react';

const Time = () => {
  let newTime = new Date().toLocaleTimeString() ;
  console.log(newTime) ;
  const [ctime, setTime] = useState(newTime) ;

  let UpdateTime = () => {
    newTime = new Date().toLocaleTimeString() ;
    setTime(newTime) ;
  }
  return (
    
    <>
        <div className="container">
          <h1>{ctime}</h1>
          <button onClick={UpdateTime}>Get Time</button>
        </div>
    </>
  )
}




export default Time ;