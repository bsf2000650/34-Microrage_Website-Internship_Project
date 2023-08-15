import React, { useState, useEffect } from "react";
import './Ecommerce.css';
import Tools from '../../images/tools.png';
import { Link } from 'react-router-dom';
import FormMan from '../../images/form-man.png'
import '../About/common.css'
import './common_build_together_style.css'
import { ecommerce } from './ServicesData';
import Spinner from "../Spinner";
import BuildTogether from "./BuildTogether";

const Ecommerce = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  return (
    <>
        {isLoading ?
         <Spinner /> : 
         <>{/*  Who we are Start*/}
        <section className='who-are-we'>
        <div className="who-are-we-content ecommerce-content">
          <h1><span>E-commerce</span> Development</h1>
          <p>{ecommerce[0].cmsAndEcommercedescription}</p>
          <div className='btn'>
          <Link  className='btn-link-portfolio' to='/portfolio'>Check out portfolio</Link>
          <Link className='btn-link' to='/qoute' >Get in touch</Link>
          </div>
        </div>
        <div className='who-are-we-img'>
            <img className="ecommerce-img" src={ecommerce[0].image} alt='About Banner'/>
        </div>
        </section>
        {/* Who we are End */}
        {/* Web Development Section Starts*/}
        <section className="web-development-section">
        <h1>{ecommerce[0].cmsAndEcommerce}</h1>
        <p className="ecommerce-detail">
        <span>Microrage Solutions’  </span>{ecommerce[0].detail}
        </p>
        <div className='detail'>
        <img className="ecommerce-detail" src={Tools} alt="Tools"/>   
        </div>
      </section>
        {/* Web Development Section Ends*/}
                {/* Build together */}
      {/* <section className="build-together">
        <h1>Let’s build a great product <br/>together!</h1>
        <div className="build-together-grid">
          <div className="contact-form">
          <h1>Tell us about your project:</h1>
            <form>
                <input  type="text" name="name" id="name" placeholder="Name"/>
                <input type="email" name="email" id="email" placeholder="Email"/>
                <input className="number" type="number" name="phone-number" id="phone-number" placeholder="Phone Number"/>
                <select className="services" name="service" id="sevices">
                    <option>Web Development</option>
                    <option>Web Development</option>
                    <option>Web Development</option>
                    <option>Web Development</option>
                    <option>Web Development</option>
                </select>
                <select className='prices' name='prices' id="prices">
                    <option value="1000">$1000</option>
                    <option value="1000">$1000</option>
                    <option value="1000">$1000</option>
                </select>
                <textarea name="description" id="description" cols="30" rows="10" 
                    placeholder="Project Description:general description, features list, wireframes, 
                                mockups? Application: help with existing one or build from scratch"   
                    ></textarea>
                <label className="custom-file-upload">
                        <input type="file"/>
                         Attach File
                    </label>
                <input type="submit" value="" />
            </form>
          </div>
          <div className="build-together-content">
                <div className="further-div">
                    <h2>Whats Next</h2>
                    <ol>
                        <li>1. We will contact you to discuss the next steps.</li>
                        <li>2. In the meantime, you can check our <span><Link className="portfolio" to='/'>Portofolio</Link></span>.</li>
                        <li>3. We will sign the NDA if required, and start the project discussion.</li>
                        <li>4. Our experts will analyze your requirements and suggest the best ways to bring your idea to life.</li>
                    </ol>
                </div>
                <img src={FormMan} alt="Form Man" />
        </div>
        </div>
      </section> */}
      <BuildTogether />
      {/* Build Together */}</>}
    </>
  )
}

export default Ecommerce
