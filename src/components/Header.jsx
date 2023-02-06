import React from 'react'

const Header = ({ title }) => {
  return (
    <div className="text-header">
    <h1>{title}</h1>   
    <hr className="line-header" /> 
    </div>
  )
}

export default Header