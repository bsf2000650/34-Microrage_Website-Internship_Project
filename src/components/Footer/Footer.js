import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import './Footer.css'
import Logo from "../../images/footer-logo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="main-footer">
          <div className='box'>
            <img src={Logo} alt='Logo' />
            <p>Microrage is a web design and development company that specializes in building nice websites and rich internet applications. Our staff is comprised of passionate IT professionals, who are brought alongside with numerous abilities to provide you such solutions that create a powerful relationship between you and your customers.</p>
          </div>
          <div className='box box2'>
          <h3>Important Links</h3>
          <ul>
            <li>
            <li>
              <NavLink activeClassName='active' className='footer-links' to='/about'>About Us</NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' className='footer-links' to='/services'>Our Services</NavLink>
            </li>
            </li>
            <li className='inner'>
            <li>
              <NavLink activeClassName='active' className='footer-links'  to='/portfolio'>Portfolio</NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' className='footer-links' to='/contact'>Contact Us</NavLink>
            </li>
            </li>
          </ul>
          </div>
          <div className='box address'>
            <h3>Get in Touch</h3>
            <address className='address-header'>
            MB-60, Zainab Tower, Model Town Link Road, <br />
            Lahore, Pakistan. <br />
            Phone: <span>+92-42-35942474</span><br />
            Email: <span>info@microrage.com</span>
            </address>
            <div className='social-media'>
                <FaFacebookSquare />
                <FaTwitterSquare />
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>© 2021. All rights reserved by <span><Link id='microrage'>Microrage Solutions.</Link></span></p>
        </div>
      </footer>
    </>
    )
}

export default Footer
