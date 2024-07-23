import React, { useState } from 'react'

const DigitalClock = () => {
  let newTime = new Date().toLocaleTimeString() ;
  console.log(newTime) ;
  const [cTime, setTime] = useState(newTime) ;

  const UpdateTime = () => {
    let time = new Date().toLocaleTimeString() ;
    setTime(time)
  }

  setInterval(UpdateTime, 1000) ;

  return (
    <>
      <div className="container">
        <h1>{cTime}</h1>
        
      </div>
    
    </>
  )
}



export default DigitalClock ;