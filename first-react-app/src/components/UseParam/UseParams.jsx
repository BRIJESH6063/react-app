import React from 'react'
import { useParams } from 'react-router-dom';

const UseParams  = () => {
  let { name, lname } = useParams(); 

  return (
    <div>
      <h1>UserParam <span style={{color: 'red'}}>{ name } { lname }</span> page</h1>
    </div>
  )
}

export default UseParams ;
