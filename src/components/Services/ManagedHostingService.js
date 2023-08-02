import React from 'react';
import Tools from '../../images/tools.png';
import { FaCheck } from 'react-icons/fa';
import './ManagedHostingService.css'
// import '../About/common.css'
// import './common_build_together_style.css'
import { managedHostingServices } from './ServicesData';
import BuildTogether from './BuildTogether';
import { Link } from 'react-router-dom';

const ManagedHostingServices = () => {
  return (
    <>
        {/*  Who we are Start*/}
        <section className='managed-who-are-we'>
        <div className="managed-who-are-we-content">
          <h1><span>Managed Hosting</span><br /> Services</h1>
          <p>{managedHostingServices[0].managedHostingServicesDescription}</p>
          <div className='btn'>
          <button className='btn-portfolio'><Link  className='btn-link' to='/portfolio'>Check out portfolio</Link></button>
          <button className='btn-get-in-touch'><Link className='btn-link' to='/qoute' >Get in touch</Link></button>
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
        <img src={Tools}/>  
        <ul>
                <FaCheck className='check-mark'/>
                <li>{managedHostingServices[0].point1}</li> <br/>
                <FaCheck className='check-mark'/>
                <li>{managedHostingServices[0].point2}</li> <br/>
                <FaCheck className='check-mark'/>
                <li>{managedHostingServices[0].point3}</li> <br/>
                <FaCheck className='check-mark'/>
                <li>{managedHostingServices[0].point4}</li> <br/>
                <FaCheck className='check-mark'/>
                <li>{managedHostingServices[0].point5}</li> <br/>
                <FaCheck className='check-mark'/>
                <li>{managedHostingServices[0].point6}</li> <br/>
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

export default ManagedHostingServices
