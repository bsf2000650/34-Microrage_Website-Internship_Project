import React from 'react';
import './MobileApp.css';
import { FaCheck } from 'react-icons/fa';
import Tools from '../../images/tools.png';
import { Link } from 'react-router-dom';
import FormMan from '../../images/form-man.png';
import ServiceBanner from '../../images/services-banner.png'
import MobileAppImg from '../../images/mob-app.png'
// import '../About/common.css'
// import './common_build_together_style.css'
import { mobileApp } from './ServicesData';
import BuildTogether from './BuildTogether';
const MobileApp = () => {
  return (
    <>
        {/*  Who we are Start*/}
        <section className='mobile-who-are-we'>
        <div className="mobile-who-are-we-content">
          <h1><span>Mobile App</span> Development</h1>
          <p>{mobileApp[0].mobileAppDescription}</p>
          <div className='btn'>
          <button className='btn-portfolio'><Link  className='btn-link' to='/portfolio'>Check out portfolio</Link></button>
          <button className='btn-get-in-touch'><Link className='btn-link' to='/qoute' >Get in touch</Link></button>
          </div>
        </div>
        <div className='who-are-we-img'>
            <img src={mobileApp[0].image} alt='About Banner'/>
        </div>
        </section>
        {/* Who we are End */}
        {/* Web Development Section Starts*/}
        <section className="mobile-web-development-section">
        <h1>{mobileApp[0].mobileApp}</h1>
        <p>
        <span>Leaders in every way </span>{mobileApp[0].detail} </p>
        <div className='mobile-detail'>
        <img src={Tools}/>
        </div>
      </section>
        {/* Web Development Section Ends*/}
                {/* Build together */}
        <BuildTogether />
      {/* Build Together */}
    </>
  )
}

export default MobileApp;
