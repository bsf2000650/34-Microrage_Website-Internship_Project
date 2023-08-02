import React, { useEffect, useState,createContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.JPG";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useWindowSize } from "../../hooks/useWindowSize";
import Hamburger from 'hamburger-react'
import { NavLink } from "react-router-dom";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Dropdown from 'react-dropdown';
import Home from "../Home/Home";
import GetFreeQoute from "../GetFreeQoute/GetFreeQoute";
import About from "../About/About";
import Contact from "../Contact Us/Contact";
import Careers from "../Careers/Careers";
import Services from "../Services/Services";

const UserContext = createContext();

const Navbar = () => {
  const [showMediaIcon, setShowMediaIcon] = useState(false);
  const size = useWindowSize();
  let [open, setOpen] = useState(false);

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
                  onMouseOver={()=>{setOpen(setTimeout((open) => {open=true},1000))}}
                  onMouseLeave={()=>{setOpen(open=false)}}
                  className='link'
                  to='/services'
                  >Our Services <FontAwesomeIcon className="faChevronDown" icon={faChevronDown} />
                  <ul id="services-link" className={`dropdown-menu ${open ? 'isActive' : 'is-InActive'}`}>
                <li>
                <Link className="service-link" to='/services/web-development'>Web App Development</Link>
                </li>
                <li>
                <Link className="service-link" to='/services/mobile-app'>Mobile App Development</Link>
                </li>
                <li>
                <Link className="service-link" to='/services/ecommerce'>E-commerce development</Link>
                </li>
                <li>
                <Link className="service-link"  to='/services/design-branding'>Design and Branding</Link>
                </li>
                <li>
                <Link className="service-link" to='/services/digital-marketing'>SEO & Digital Marketing</Link>
                </li>
                <li>
                <Link className="service-link" to='/services/strategic-consultancy'>Strategic Consultancy</Link>
                </li>
                <li>
                <Link className="service-link" to='/services/business-process-outsourcing'>Business Process Outsourcing</Link>
                </li>
                <li>
                <Link className="service-link" to='/services/managed-hosting-services'>Managed Hosting Services</Link>
                </li>
              </ul>
                  </NavLink>
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
          <a onClick={() => setShowMediaIcon(!showMediaIcon)}>
            {/* <GiHamburgerMenu size="30" color="black" /> */}
            <Hamburger color="#97b325"/>
          </a>
        </div>
      </nav>
      {/* <UserContext.Provider value={showMediaIcon}>
        <Home showMediaIcon={showMediaIcon}/>
        <About showMediaIcon={showMediaIcon}/>
        <Services showMediaIcon={showMediaIcon}/>
        <Contact showMediaIcon={showMediaIcon}/>
        <Careers showMediaIcon={showMediaIcon}/>
        <GetFreeQoute showMediaIcon={showMediaIcon}/>
      </UserContext.Provider> */}
    </>
  );
};


export default Navbar;
export {UserContext}
