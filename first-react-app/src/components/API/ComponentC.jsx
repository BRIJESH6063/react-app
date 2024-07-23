import React, {useContext} from 'react' ;
import { FirstName, LastName } from './ContextAPI';


const ComponentC = () => {
  const fname = useContext(FirstName) ;
  const lname = useContext(LastName) ;
  return (
    <>
      <h1>My name is {fname} {lname} </h1>
      <h2>I am H2 from ComponentC</h2>
      
    </>
  )
}

export default ComponentC ;




/*

<FirstName.Consumer>{(fname) => {
  return (
    <LastName.Consumer>{(lname) => {
      return <h1>My name is {fname} {lname}</h1>
    }}</LastName.Consumer>
  )
}}</FirstName.Consumer>










*/