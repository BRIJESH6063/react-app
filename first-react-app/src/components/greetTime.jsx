import React from 'react'

const curDate = new Date() ;
const hours = curDate.getHours() ;
let greeting = "" ;

const greetStyle = {} 

if(hours >= 1 && hours < 12) {
    greeting = "GOOD MORNING" ;
    greetStyle.color = "orange" ;
} else if(hours >=12 && hours < 19 ) {
    greeting = "GOOD AFTERNOON" ;
    greetStyle.color = "yellow" ;
} else {
    greeting = "GOOD NIGHT" ;
    greetStyle.color = "blue" ;
}

const GreetTime = () => {
  return (
    <>
        <h1 style={greetStyle}>Hello Sir, {greeting}</h1>
    </>
  )
}

export default GreetTime ;