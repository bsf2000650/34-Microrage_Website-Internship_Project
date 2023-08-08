import React, { useState, useEffect } from "react";
import Tools from '../../images/tools.png';
import { FaCheck } from 'react-icons/fa';
import './ManagedHostingService.css'
import { managedHostingServices } from './ServicesData';
import BuildTogether from './BuildTogether';
import { Link } from 'react-router-dom';
import Spinner from "../Spinner";

const ManagedHostingServices = () => {
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
              <section className='managed-who-are-we'>
        <div className="managed-who-are-we-content">
          <h1><span>Managed Hosting</span><br /> Services</h1>
          <p>{managedHostingServices[0].managedHostingServicesDescription}</p>
          <div className='btn'>
          <Link  className='btn-link-portfolio' to='/portfolio'>Check out portfolio</Link>
          <Link className='btn-link' to='/qoute' >Get in touch</Link>
          </div>
        </div>
        <div className='who-are-we-img'>
            <img src={managedHostingServices[0].image} alt='About Banner'/>
        </div>
        </section>
        {/* Who we are End */}
        {/* Web Development Section Starts*/}
        <section className="web-development-section">
        <h1>{managedHostingServices[0].managedHostingServices}</h1>
        <p>
        <span>Microrage Solutions’ </span> {managedHostingServices[0].detail}</p>
        <div className='detail'>
        <img src={Tools} alt="Tools"/>  
        <ul>
                
                <li>{managedHostingServices[0].point1}</li>
                
                <li>{managedHostingServices[0].point2}</li>
                
                <li>{managedHostingServices[0].point3}</li>
                
                <li>{managedHostingServices[0].point4}</li>
                
                <li>{managedHostingServices[0].point5}</li>
                
                <li>{managedHostingServices[0].point6}</li>
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

export default ManagedHostingServices
