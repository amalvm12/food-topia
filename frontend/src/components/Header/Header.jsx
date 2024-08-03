import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className='header' >
      <img className='background_img' src={assets.header} alt="" />
        <div className='header-content'>
            <h2>Order your favourite food here </h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, nam. Magni placeat soluta sint.  </p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header