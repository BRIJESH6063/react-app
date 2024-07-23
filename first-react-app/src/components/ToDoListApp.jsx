import React, { useState } from 'react'
import ToDoList from './ToDoList';

// Material-Ui Icons Import
import AddIcon from '@mui/icons-material/Add';

const ToDoListApp = () => {
  const [inputList, setInputList] = useState() ;
  const [Items, setItems] = useState([]) ;

  const itemEvent = (event) => {
      setInputList(event.target.value) ;
  }

  const addItems = () => {
    setItems((prevList) => {
      return [...prevList, inputList] ;
    })
  }
  const deleteItem = (id) => {
    console.log("Item deleted Sucessfully!..") ;

    setItems((prevList) => {
      return prevList.filter((item, index) => {
          return id !== index ;
      })
    })
  }
  return (
    <>
      <div className="main_div">
        <div className="inner_div">
          <h1>TODO LIST</h1>
          <br />
          <input 
            type="text" 
            placeholder='Input TODO List' 
            name = 'list'
            onChange={itemEvent}
          />
          <button onClick={addItems}> ADD </button>
          <ul>
            
            {
              Items.map((item, index) => {
                return <ToDoList 
                        text={item} 
                        id={index} 
                        key={index}
                        onSelect={deleteItem}
                      />
              })
            }
          </ul>
        </div>
      </div>
    
    </>
  )
}





export default ToDoListApp ;