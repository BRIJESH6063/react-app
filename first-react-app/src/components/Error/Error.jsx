import React from 'react'
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <div>
        <h1>Error 404 page</h1>
        <p>Sorry page doesn't exist </p>
        <NavLink to="/">Go Back</NavLink>

    </div>
  )
}

export default Error ;
