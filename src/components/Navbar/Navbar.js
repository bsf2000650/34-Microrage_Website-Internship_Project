import React, { useEffect, useState,createContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.PNG";
import "./Navbar.css";
import { useWindowSize } from "../../hooks/useWindowSize";
import Hamburger from 'hamburger-react'
import { NavLink } from "react-router-dom";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UserContext = createContext();

const Navbar = () => {
  const [showMediaIcon, setShowMediaIcon] = useState(false);
  const size = useWindowSize();
  let [open, setOpen] = useState(false);
  let [time,setTime] = useState()

  useEffect(() => {
    return setShowMediaIcon(false)
  }, [size]);

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div
          className={
            showMediaIcon ? "menu-links mobile-menu-link" : "menu-links"
          }
        >
          <ul>
            <li>
              <NavLink activeClassName='active' className="link" to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' className="link" to='/about'>About Us</NavLink>
            </li>
            <li id="our-services"><NavLink 
                  activeClassName='active' 
                  onMouseOver={()=>{setOpen(open=true)}}
                  onMouseLeave={()=>{setOpen(open=false)}}
                  className='link'
                  to='/services'
                  >Our Services <FontAwesomeIcon className="faChevronDown" icon={faChevronDown} />
                 </NavLink>
                 <ul id="services-link" className={`dropdown-menu ${open ? 'isActive' : 'is-InActive'}`} 
        onMouseOver={()=>{setOpen(open=true)}}
        onMouseLeave={()=>{setOpen(open=false)}}
      >
               <li>
                <Link className="service-link" to='/services/web-development'><span>Web App Development</span></Link>
                </li>
                <li>
                <Link className="service-link" to='/services/mobile-app'><span>Mobile App Development</span></Link>
                </li>
                <li>
                <Link className="service-link" to='/services/ecommerce'><span>E-commerce development</span></Link>
                </li>
                <li>
                <Link className="service-link"  to='/services/design-branding'><span>Design and Branding</span></Link>
                </li>
                <li>
                <Link className="service-link" to='/services/digital-marketing'><span>SEO & Digital Marketing</span></Link>
                </li>
                <li>
                <Link className="service-link" to='/services/strategic-consultancy'><span>Strategic Consultancy</span></Link>
                </li>
                <li>
                <Link className="service-link" to='/services/business-process-outsourcing'><span>Business Process Outsourcing</span></Link>
                </li>
                <li>
                <Link className="service-link" to='/services/managed-hosting-services'><span>Managed Hosting Services</span></Link>
                </li>
      </ul>
                  </li>
            <li>
              <NavLink activeClassName='active' className="link" to='/careers'>Careers</NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' className="link" to='/contact'>Contact Us</NavLink>
            </li>
            <li>
              <Link className='btn-link' to='/qoute' ><button>Get a free Qoute</button></Link>
            </li>
          </ul>
          </div>
          <div className="hamburger-menu">
          <button onClick={() => setShowMediaIcon(!showMediaIcon)}>
            <Hamburger color="#97b325"/>
          </button>
        </div>
      </nav>
      
    </>
  );
};


export default Navbar;
export {UserContext}
