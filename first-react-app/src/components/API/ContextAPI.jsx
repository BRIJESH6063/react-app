import React, {createContext} from 'react'
import ComponentA from './ComponentA';

const FirstName = createContext() ;
const LastName = createContext() ;



const ContextAPI = () => {
  return (
    <>
      <FirstName.Provider value={"BRIJESH"}>
        <LastName.Provider value={"YADAV"}>
          <ComponentA />
        </LastName.Provider>
      </FirstName.Provider>

      
      
    </>
  )
}


export default ContextAPI ;
export {FirstName, LastName } ;


/*

REACT CONTEXT API
allow data to pass from parent to different level cpmponent tree 

createContext() -- pass
provider 
consumer

*/