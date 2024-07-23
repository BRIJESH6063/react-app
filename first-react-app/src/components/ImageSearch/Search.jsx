import React from 'react'
import Sresult from './Sresult';

const Search = () => {
  const [img, setImg] = useState() ;

  const inputValue = (event) => {
    setImg(event.target.value) ;
  }
  return (
    <div>
      <input  
        type="text" 
        placeholder='Type here anything to search' 
        onChange={inputValue}
        value={img}
      />

      <Sresult name="img"/>
      
    </div>
  )
}

export default Search
