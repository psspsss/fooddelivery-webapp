import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <p className='logo'>Kitchen.in</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima beatae quod delectus mollitia, iste possimus quidem ab sapiente itaque eius molestias! Numquam, earum! Hic nemo praesentium, tenetur ad deleniti, architecto, inventore labore ipsa sunt maiores non tempora debitis quibusdam animi? Obcaecati iusto qui voluptatibus magni deleniti ut libero nemo facere?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-2920212300</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © Tomato.com - All rights reserved.</p>

    </div>
  )
}

export default Footer