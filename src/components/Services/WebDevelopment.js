import React, { useState, useEffect } from "react";
import './WebDevelopment.css';
import { FaCheck } from 'react-icons/fa';
import Tools from '../../images/tools.png';
import '../About/common.css'
import './common_build_together_style.css'
import { webDevelopment } from './ServicesData';
import BuildTogether from './BuildTogether';
import { Link } from 'react-router-dom';
import Spinner from "../Spinner";

const WebDevelopment = () => {
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
          <h1><span>Web Application</span> Development</h1>
          <p>{webDevelopment[0].webDevelopmentDescription}</p>
          <div className='btn'>
          <Link  className='btn-link-portfolio' to='/portfolio'>Check out portfolio</Link>
          <Link className='btn-link'  to='/qoute' >Get in touch</Link>
          </div>
        </div>
        <div className='who-are-we-img'>
            <img src={webDevelopment[0].image} alt='About Banner'/>
        </div>
        </section>
        {/* Who we are End */}
        {/* Web Development Section Starts*/}
        <section className="web-development-section">
        <h1>{webDevelopment[0].webDevelopment}</h1>
        <p>
        <span>Custom web development</span> {webDevelopment[0].detail}</p>
        <div className='detail'>
        <img src={Tools} alt="Tools"/>
          <ul>
              <li>{webDevelopment[0].point1}</li>
                <li>{webDevelopment[0].point2}</li>
                <li>{webDevelopment[0].point3}</li>
                <li>{webDevelopment[0].point4}</li>
            </ul>    
        </div>
      </section>
        {/* Web Development Section Ends*/}
      {/* Build together */}
      <BuildTogether />
      {/* Build Together */}
    </>}

    </>
  )
}

export default WebDevelopment
