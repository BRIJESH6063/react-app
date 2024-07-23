import React, { useEffect, useState } from 'react'

const UseEffectHooks = () => {
  const [num1, setNum1] = useState(1) ;
  const [num2, setNum2] = useState(2) ;

  useEffect(() => {
    // render only when num2 renders / changes
    alert("I am Cloicked") ;
    document.title = `You clicked me ${num1-1} times`
  }, [num1])

  
  return (
    <>
      <button onClick = {() => {setNum1(num1+1)}}>Button {num1}</button>
      <br />
      <button onClick = {() => {setNum2(num2+1)}}>Button {num2}</button>
    </>
  )
}

export default UseEffectHooks


/*

useEffect -- component need to do something after render ..

useEffect(() => {
  // run every time page renders
})

useEffect(() => {
  //renders only first time render 
}, [])


*/