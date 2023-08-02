import React from 'react';
import Tools from '../../images/tools.png';
import { FaCheck } from 'react-icons/fa';
import './StrategicConsultancy.css'
import '../About/common.css'
import {strategicConsultancy } from './ServicesData';
import BuildTogether from './BuildTogether'
import { Link } from 'react-router-dom';

const StrategicConsultancy = () => {
  return (
    <>
        {/*  Who we are Start*/}
        <section className='who-are-we'>
        <div className="who-are-we-content">
          <h1><span>Strategic</span> Consultancy</h1>
          <p>{strategicConsultancy[0].strategicConsultancyDescription}</p>
          <div className='btn'>
          <button className='btn-portfolio'><Link  className='btn-link' to='/portfolio'>Check out portfolio</Link></button>
          <button className='btn-get-in-touch'><Link className='btn-link' to='/qoute' >Get in touch</Link></button>
          </div>
        </div>
        <div className='who-are-we-img'>
            <img src={strategicConsultancy[0].image} alt='About Banner'/>
        </div>
        </section>
        {/* Who we are End */}
        {/* Web Development Section Starts*/}
        <section className="web-development-section">
        <h1>{strategicConsultancy[0].strategicConsultancy}</h1>
        <p>{strategicConsultancy[0].detail}</p>
        <div className='detail'>
        <img src={Tools}/> 
        <div className='detail-further'>
        <ul>
        <FaCheck className='check-mark'/>
        <li>{strategicConsultancy[0].point1}</li><br/>
        <FaCheck className='check-mark'/>
        <li>{strategicConsultancy[0].point2}</li><br/>
        <FaCheck className='check-mark'/>
        <li>{strategicConsultancy[0].point3}</li><br/>
        </ul>  
        <ul>
        <FaCheck className='check-mark'/>
        <li>{strategicConsultancy[0].point4}</li><br/>
        <FaCheck className='check-mark'/>
        <li>{strategicConsultancy[0].point5}</li><br/>
        <FaCheck className='check-mark'/>
        <li>{strategicConsultancy[0].point6}</li><br/>
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

export default StrategicConsultancy
