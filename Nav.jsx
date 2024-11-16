import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
       <div className="nav">
        <div className="log">
            <h1>Tatto Design</h1>
        </div>
        <div className="search">
            <input type="text"  placeholder='Search.....'/>
        </div>
        <div className="pages">
          <Link to='/home'>
          <h1>Home</h1>
          </Link>
          <Link to='/design'>
          <h1>Designs</h1>
          </Link>
          <Link to='/form'>
          <h1>Artists</h1>
          </Link>
           
            
            <h1>Bookings</h1>
            <h1>Profile</h1>
        </div>
        <div className="sign">
            <button>SignIn/SignUp</button>
        </div>
       </div>
    </div>
  )
}

export default Nav




