import React, { useState } from 'react' ;
import "../Styles/click.css" ;


/*

let count = 1 ;

function click() {
    console.log("Button Clicked! " + (count++))
}




const arr = ["add", "sub"] ;
const [add, sub] = arr ;
// destructuring the array

const [state, fun] = useState() ;
-- destructuring useState
-- console.log(state) ;
-- hooks can only be called inside function 






*/





const Click = () => {
    let [count, setCount] = useState(0) ;
    console.log(count) ;

    function click () {
        setCount(count+1) ;
    }
    

  return (
    <>
        <div className="container">
          <h1>{count}</h1>
          <button onClick={click}>Click Me</button>
        </div>
    </>
  )
}



export default Click ;









