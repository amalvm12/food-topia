import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
        
        <div >
            <b className='logo' >Food-App</b>
            <p className='admin-text' >Admin panel</p>

        </div>

        <img  className='profile' src={assets.profile_image} alt="" />
        
    </div>
  )
}

export default Navbar