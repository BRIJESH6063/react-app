import React from 'react'

const ToDoList = (props) => {
  return (
    <>
      <li>
        <button onClick={() => {
          props.onSelect(props.id) ;
        }}>X</button>
        {props.text}
      </li>
    </>
  )
}



export default ToDoList ;