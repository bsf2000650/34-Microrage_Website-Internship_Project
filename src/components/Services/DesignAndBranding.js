import React from 'react';
import Tools from '../../images/tools.png';
import { Link } from 'react-router-dom';
import FormMan from '../../images/form-man.png';
import Design_Branding from '../../images/design-and-branding.png';
import { FaCheck } from 'react-icons/fa';
import '../About/common.css'
import './common_build_together_style.css'
import { designAndBranding } from './ServicesData';
import BuildTogether from './BuildTogether';

const DesignAndBranding = () => {
  return (
    <>
        {/*  Who we are Start*/}
        <section className='who-are-we'>
        <div className="who-are-we-content">
          <h1><span>Design and</span> Branding</h1>
          <p>{designAndBranding[0].designAndBrandingDescription}</p>
          <div className='btn'>
          <button className='btn-portfolio'><Link  className='btn-link' to='/portfolio'>Check out portfolio</Link></button>
          <button className='btn-get-in-touch'><Link className='btn-link' to='/qoute' >Get in touch</Link></button>
          </div>
        </div>
        <div className='who-are-we-img'>
            <img src={designAndBranding[0].image} alt='About Banner'/>
        </div>
        </section>
        {/* Who we are End */}
        {/* Web Development Section Starts*/}
        <section className="web-development-section">
        <h1>{designAndBranding[0].designAndBranding}</h1>
        <p>
        <span>Our creative team  </span> {designAndBranding[0].detail}
        </p>
        <div className='detail'>
        <img src={Tools}/> 
        <div className='detail-further'>
        <ul>
        <FaCheck className='check-mark'/>
        <li>{designAndBranding[0].point1}</li><br/>
        <FaCheck className='check-mark'/>
        <li>{designAndBranding[0].point2}</li><br/>
        </ul>
        <ul>
        <FaCheck className='check-mark'/>
        <li>{designAndBranding[0].point3}</li><br/>
        <FaCheck className='check-mark'/>
        <li>{designAndBranding[0].point4}</li><br/>
        </ul>
        </div>
        </div>
      </section>
        {/* Web Development Section Ends*/}
                {/* Build together */}
      <BuildTogether />
      {/* Build Together */}
    </>
  )
}

export default DesignAndBranding
