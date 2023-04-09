import React from 'react'
import {Link} from 'react-router-dom'
import img from '../assets/man face.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Hemo Chat</span>
      <div className="user">
        <img className='img' src={img} alt="" />
        <span>Lama</span>
        <Link to="/login"><button className='button'>Log-out</button></Link>
     
      </div>
    </div>
  )
}

export default Navbar