import React from 'react'
import {useParams, useLocation} from 'react-router-dom'
import useHistory, {Link} from 'use-history'

const UseLocation = () => {
  const location = useLocation() ;
  const { history } = useHistory() ;
  console.log(history) ;


  return (
    <div>
      <h1>We are currently at address {location.pathname}</h1>

      { location.pathname === `/user/trimoka/bsda` ? (
          <button>Click Me</button>
      ) : null }
      
    </div>
  )
}

export default UseLocation ;
