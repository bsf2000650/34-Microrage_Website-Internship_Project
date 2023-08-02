import React from 'react';
import './Careers.css'
import { FaBriefcase } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Careers = () => {
  return (
    <section className='careers-section'>
        <h1>Careers</h1>
        <p className='career-description'>Being a strong team of high-skilled programmers, we are passionate<br/> about delivering tangible results.</p>
        <p className='job-archives'>Job Archives</p>
        <div className='job'>
            <div className='apply-job'>
            <h2>WordPress Developer</h2>
            <button><Link className='apply-link'>Apply Now</Link></button>
            </div>
            <hr />
            <div className='job-detail'>
            <div className='job-div'>
            <FaBriefcase style={{color:'#3b3a3c'}} className='brief-case'/>
            <span className='full-time'>Full Time</span>
            </div>
            <div>
              <FaLocationArrow style={{color:'#3b3a3c'}}  className='location-arrow' />
            <span className='location'>Location</span>
            </div>
            <p>We are looking for a talented and innovative WordPress Developer having 2-4 years of a proven track record of developing WordPress Themes and Plugins.</p>
            </div>
            
        </div>
    </section>
  )
}

export default Careers
