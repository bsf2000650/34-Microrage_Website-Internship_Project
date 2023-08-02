import React from 'react';
import Tools from '../../images/tools.png';
import { FaCheck } from 'react-icons/fa';
import './DigitalMarketing.css';
import '../About/common.css'
import './common_build_together_style.css'
import { digitalMarketing } from './ServicesData';
import BuildTogether from './BuildTogether';
import { Link } from 'react-router-dom';

const DigitalMarketing = () => {
  return (
    <>
        {/*  Who we are Start*/}
        <section className='who-are-we'>
        <div className="who-are-we-content">
          <h1><span>SEO & Digital</span> Marketing</h1>
          <p>{digitalMarketing[0].digitalMarketingDescription}</p>
          <div className='btn'>
          <button className='btn-portfolio'><Link  className='btn-link' to='/portfolio'>Check out portfolio</Link></button>
          <button className='btn-get-in-touch'><Link className='btn-link' to='/qoute' >Get in touch</Link></button>
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
        <p>
        Leverage our mix of SEO skills with creative internet marketing to deliver solutions that communicate, brand and convert. This service offers the ability to become more visible to all the major search engine providers including <span>Google</span>, <span>Yahoo!</span> and <span>MSN</span>. We strive to keep our clients well ahead of the competition.
        </p>
        <div className='detail'>
        <img src={Tools}/>  
        <ul>
        <FaCheck className='check-mark'/>
        <li>{digitalMarketing[0].point1}</li><br/>
        <FaCheck className='check-mark'/>
        <li>{digitalMarketing[0].point2}</li><br/>
        <FaCheck className='check-mark'/>
        <li>{digitalMarketing[0].point3}</li><br/>
        <FaCheck className='check-mark'/>
        <li>{digitalMarketing[0].point4}</li><br/>
        </ul> 
        </div>
      </section>
        {/* Web Development Section Ends*/}
                {/* Build together */}
        <BuildTogether />
      {/* Build Together */}
    </>
  )
}

export default DigitalMarketing
