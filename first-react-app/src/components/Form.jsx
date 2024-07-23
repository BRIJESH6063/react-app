import React, {useState} from 'react'
import "../Styles/click.css"





/*

const FullName = {
  fname: 'Vinod',
  lname: 'Thapa'
}

const biodata = {
  id: 1,
  ...FullName,
  age: 26,
  gender: 'Male'
}




*/





const Form = () => {
  const [fullName, setName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: ""
  }) ;

  const submit = (event) => {
    // console.log(biodata) ;
    event.preventDefault() ;
    alert("Form Submitted Sucessfully!... ")
  }

  // event has two properties -- value and name
  const inputEvent = (event) => {
    const {value, name} = event.target ;
    setName((preValue) => {
      console.log(preValue) ;

      return {
        ...preValue,
        [name]: value,
      } ;
    })

  }



  return (
    <>
      <div className="container">
        <form onSubmit={submit}>
          <h1>Hello {fullName.fname} {fullName.lname}</h1>
          <p>email: {fullName.email}</p>
          <p>phone: {fullName.phone}</p>
          <input 
            type="text" 
            placeholder='Enter Your First Name' 
            onChange={inputEvent}
            name= 'fname'
            value={fullName.fname}
          />

          <input 
            type="text" 
            placeholder='Enter Your Last Name' 
            onChange={inputEvent}
            name= 'lname'
            value={fullName.lname}
          />

          <input 
            type="text" 
            placeholder='Enter Your Email Id' 
            onChange={inputEvent}
            name= 'email'
            value={fullName.email}
          />

          <input 
            type="text" 
            placeholder='Enter Your Phone Number' 
            onChange={inputEvent}
            name= 'phone'
            value={fullName.phone}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    
    </>
  )
}



export default Form ;



/*

const [userName, setUserName] = useState("") ;
const [password, setPassword] = useState("") ;
const [finalUserName, setFinalUserName] = useState("") ;

const storeUserName = (event) => {
  setUserName(event.target.userName) ;
}

const storePassword = (event) => {
  setPassword(event.target.password) ;
}

const submit = (event) => {
  event.preventDefault() ;
  setFinalUserName(userName) ;
  alert(`Hello ${finalUserName}, Your password is ${event.target.password}`) ;
}




<div className="container">
  <form onSubmit={submit}>
    <h1>Hello {finalUserName}</h1>
    <input 
      type="text" 
      placeholder='Enter Your UserName' 
      onChange={storeUserName}
      name={userName}
      value={userName}
    />

    <input 
      type="password" 
      placeholder='Enter Your Password' 
      onChange={storePassword}
      name={password}
      value={password}
    />
    <button type='submit'>Submit</button>
  </form>
</div>



// event has two properties -- value and name
const inputEvent = (event) => {
  const {value, name} = event.target ;
  setName((preValue) => {
    console.log(preValue) ;
    if(name === 'fname') {
      return {
        fname: value,
        lname: preValue.lname ,
        email: preValue.email,
        phone: preValue.phone
      }
    } else if(name === 'lname') {
      return {
        fname: preValue.fname,
        lname: value,
        email: preValue.email,
        phone: preValue.phone
      }
    } else if(name === 'email') {
      return {
        fname: preValue.fname,
        lname: preValue.lname ,
        email: value,
        phone: preValue.phone
      }
    } else if(name === 'phone') {
      return {
        fname: preValue.fname,
        lname: preValue.lname ,
        email: preValue.email,
        phone: value
      }
    }
  })

}




*/






