import React, { useState, useEffect } from "react";
import Tools from '../../images/tools.png';
import { FaCheck } from 'react-icons/fa';
import './DigitalMarketing.css';
import '../About/common.css'
import './common_build_together_style.css'
import { digitalMarketing } from './ServicesData';
import BuildTogether from './BuildTogether';
import { Link } from 'react-router-dom';
import Spinner from "../Spinner";

const DigitalMarketing = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  return (
    <>
        {isLoading ? <Spinner /> : <>
        {/*  Who we are Start*/}
        <section className='who-are-we'>
        <div className="who-are-we-content">
          <h1><span>SEO & Digital</span> Marketing</h1>
          <p>{digitalMarketing[0].digitalMarketingDescription}</p>
          <div className='btn'>
          <Link className='btn-link-portfolio' to='/portfolio'>Check out portfolio</Link>
          <Link className='btn-link' to='/qoute' >Get in touch</Link>
          </div>
        </div>
        <div className='who-are-we-img'>
            <img src={digitalMarketing[0].image} alt='About Banner'/>
        </div>
        </section>
        {/* Who we are End */}
        {/* Web Development Section Starts*/}
        <section className="web-development-section">
        <h1>{digitalMarketing[0].digitalMarketing}</h1>
        <p className="digital-marketing-detail">
        Leverage our mix of SEO skills with creative internet marketing to deliver solutions that communicate, brand and convert. This service offers the ability to become more visible to all the major search engine providers including <span>Google</span>, <span>Yahoo!</span> and <span>MSN</span>. We strive to keep our clients well ahead of the competition.
        </p>
        <div className='detail'>
        <img src={Tools} alt="Tools"/>  
        <ul>
        
        <li>{digitalMarketing[0].point1}</li>
        
        <li>{digitalMarketing[0].point2}</li>
        
        <li>{digitalMarketing[0].point3}</li>
        
        <li>{digitalMarketing[0].point4}</li>
        </ul> 
        </div>
      </section>
        {/* Web Development Section Ends*/}
                {/* Build together */}
        <BuildTogether />
      {/* Build Together */}</>}
    </>
  )
}

export default DigitalMarketing
