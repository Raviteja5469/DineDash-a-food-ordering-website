import React from 'react';
import './Footer.css';
import { assets } from '../../assets/frontend_assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer_content">
        <div className="footer_content_left">
            <img className='footer_logo' src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolorem excepturi error eum dolores id tenetur maiores vel quisquam laboriosam ipsam quis incidunt libero corrupti ducimus accusamus, dicta neque ex?</p>
            <div className="footer_social_icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
            </div>
        </div>
        <div className="footer_content_center">
            <h2>DineDash</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer_content_right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 9949*****5</li>
                <li>contact@DineDash.com</li>
            </ul>
        </div>
      </div>
      <hr className='hr_footer'/>
      <p className="footer_copyright">
        Copyright 2024 @DineDash.com-All Right Reserverd.
      </p>
    </div>
  );
};

export default Footer;
