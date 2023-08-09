import React, { useState, useEffect } from "react";
import './Careers.css'
import { FaBriefcase } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Spinner from '../Spinner';

const Careers = () => {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
   <>{ 
      isLoading ? 
      <Spinner /> : <><section className='careers-section'>
      <h1>Careers</h1>
      <p className='career-description'>Being a strong team of high-skilled programmers, we are passionate about delivering tangible results.</p>
      <p className='job-archives'>Job Archives</p>
      <div className='job'>
          <div className='apply-job'>
          <h2>WordPress Developer</h2>
          <button><Link className='apply-link'>Apply Now</Link></button>
          </div>
          <div className='job-detail'>
          <div className='job-div'>
          <p>
          <FaBriefcase style={{color:'#3b3a3c'}} className='brief-case'/>
          <span className='full-time'>Full Time</span>
          </p>
          <p>
            <FaLocationArrow style={{color:'#3b3a3c'}}  className='location-arrow' />
          <span className='location'>Location</span>
            </p>
          </div>
          <p>We are looking for a talented and innovative WordPress Developer having 2-4 years of a proven track record of developing WordPress Themes and Plugins.</p>
          </div>
          
      </div>
  </section></>
    }
    </> 
  )
}

export default Careers
