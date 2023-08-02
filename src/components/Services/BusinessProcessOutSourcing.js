import React from 'react';
import Tools from '../../images/tools.png';
import MobileApp from '../../images/mob-app.png';
import {FaCheck} from 'react-icons/fa'
// import '../About/common.css'
// import './common_build_together_style.css'
import './BusinessProcessOutSourcing.css';
import { businessProcessOutsourcing } from './ServicesData';
import BuildTogether from './BuildTogether';
import { Link } from 'react-router-dom';

const BusinessProcessOutSourcing = () => {
  return (
    <>
        {/*  Who we are Start*/}
        <section className='business-who-are-we'>
        <div className="business-who-are-we-content">
          <h1><span>Business Process</span><br /> Outsourcing</h1>
          <p>{businessProcessOutsourcing[0].businessProcessOutsourcingDescription}</p>
          <div className='btn'>
          <button className='btn-portfolio'><Link  className='btn-link' to='/portfolio'>Check out portfolio</Link></button>
          <button className='btn-get-in-touch'><Link className='btn-link' to='/qoute' >Get in touch</Link></button>
          </div>
        </div>
        <div className='who-are-we-img'>
            <img src={MobileApp} alt='About Banner'/>
        </div>
        </section>
        {/* Who we are End */}
        {/* Web Development Section Starts*/}
        <section className="business-web-development-section">
        <h1>{businessProcessOutsourcing[0].businessProcessOutsourcing}</h1>
        <p>
        <span>Our creative team  </span> {businessProcessOutsourcing[0].detail}
        </p>
        <div className='detail'>
        <img src={Tools}/> 
            <ul>
                <FaCheck className='check-mark'/>
              <li>{businessProcessOutsourcing[0].point1}</li> <br/>
                <FaCheck className='check-mark'/>
                <li>{businessProcessOutsourcing[0].point2}</li> <br/>
                <FaCheck className='check-mark'/>
                <li>{businessProcessOutsourcing[0].point3}</li> <br/>
                <FaCheck className='check-mark'/>
                <li>{businessProcessOutsourcing[0].point4}</li> <br/>
                <FaCheck className='check-mark'/>
                <li>{businessProcessOutsourcing[0].point5}</li> <br/>
            </ul>   
        </div>
        </section>
        <BuildTogether />
      {/* Build Together */}
    </>
  )
}

export default BusinessProcessOutSourcing
