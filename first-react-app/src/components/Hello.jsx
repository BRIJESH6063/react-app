import React, {useState} from 'react'

const Hello = () => {
  const [name, setName] = useState("") ;
  const [fullName, setFullName] = useState("") ;

  let storeFullName = (event) => {
    setName(event.target.value) ;
  }

  const submit = (event) => {
    event.preventDefault() ;
    setFullName(name) ;
  }
  return (
    <>
      
      <div className="container">
        <form onSubmit={submit}>
          <h1>Hello {fullName}</h1>
          <input 
            type="text" 
            placeholder='Enter Your Name' 
            onChange={storeFullName}
          />
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}


export default Hello ;