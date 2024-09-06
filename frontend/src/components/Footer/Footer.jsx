import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <h2 className='footer-logo'>FoodTopia</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequuntur maiores assumenda ex deserunt voluptatem error deleniti modi voluptate </p>
                <div className='footer-social-icon'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 9812345670</li>
                    <li>contact@Foodtopia.com</li>
                </ul>
            </div>
        </div>
        <hr />
            <p className="footer-copyright">
                Copyright 2024 	&copy; FoodTopia.com - All Right Reserved
            </p>
        
        
    </div>
  )
}

export default Footer