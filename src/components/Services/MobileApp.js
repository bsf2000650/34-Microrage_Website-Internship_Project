import React, { useState, useEffect } from "react";
import './MobileApp.css';
import Tools from '../../images/tools.png';
import { Link } from 'react-router-dom';
import { mobileApp } from './ServicesData';
import BuildTogether from './BuildTogether';
import Spinner from "../Spinner";
const MobileApp = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  return (
    <>
    {isLoading ?
     <Spinner /> : <>        
        {/*  Who we are Start*/}
        <section className='mobile-who-are-we'>
        <div className="mobile-who-are-we-content">
          <h1><span>Mobile App</span> Development</h1>
          <p>{mobileApp[0].mobileAppDescription}</p>
          <div className='btn'>
          <Link  className='btn-link-portfolio' to='/portfolio'>Check out portfolio</Link>
          <Link className='btn-link' to='/qoute' >Get in touch</Link>
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
        <img src={Tools} alt="Tools"/>
        </div>
      </section>
        {/* Web Development Section Ends*/}
                {/* Build together */}
        <BuildTogether />
      {/* Build Together */}</>}

    </>
  )
}

export default MobileApp;
