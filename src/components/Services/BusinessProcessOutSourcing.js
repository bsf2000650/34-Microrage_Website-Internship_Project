import React, { useState, useEffect } from "react";
import Tools from '../../images/tools.png';
import MobileApp from '../../images/mob-app.png';
import {FaCheck} from 'react-icons/fa'
import './BusinessProcessOutSourcing.css';
import { businessProcessOutsourcing } from './ServicesData';
import BuildTogether from './BuildTogether';
import { Link } from 'react-router-dom';
import Spinner from "../Spinner";

const BusinessProcessOutSourcing = () => {
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
        <section className='business-who-are-we'>
        <div className="business-who-are-we-content">
          <h1><span>Business Process</span><br /> Outsourcing</h1>
          <p>{businessProcessOutsourcing[0].businessProcessOutsourcingDescription}</p>
          <div className='btn'>
          <Link  className='btn-link-portfolio' to='/portfolio'>Check out portfolio</Link>
          <Link className='btn-link' to='/qoute' >Get in touch</Link>
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
        <span>Microrage Solutions'  </span> {businessProcessOutsourcing[0].detail}
        </p>
        <div className='detail'>
        <img src={Tools} alt="Tools"/> 
            <ul>
                
              <li>{businessProcessOutsourcing[0].point1}</li>            
                <li>{businessProcessOutsourcing[0].point2}</li>
                
                <li>{businessProcessOutsourcing[0].point3}</li>
                
                <li>{businessProcessOutsourcing[0].point4}</li>
                
                <li>{businessProcessOutsourcing[0].point5}</li>
            </ul>   
        </div>
        </section>
        <BuildTogether />
      {/* Build Together */}</>}
    </>
  )
}

export default BusinessProcessOutSourcing
