import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='main-navbar'>
        <div className='navbar-logo'>
        <Link to='/'>
            <h1 className='logo-title'>FarmSpace</h1>
        </Link>
        </div>
        <div className='navbar-links'>
            <Link to='/'>Home</Link>
            <Link to='/Form'>Product</Link>
        </div>

    </div>
  )
}

export default Navbar
