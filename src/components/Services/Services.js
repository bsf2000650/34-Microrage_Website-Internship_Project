import React from "react";
import "./Services.css";
import "../About/common.css";
import "./common_build_together_style.css";
import BuildTogether from "./BuildTogether";
import ServicesComponent from "./ServicesComponent";
import { servicesData } from "./ServicesData";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <>
      {/* Out Team Start */}
      <section className="who-are-we">
        <div className="who-are-we-content">
          <h1>
            <span>OUR</span> SERVICES
          </h1>
          <p>
            {servicesData[0].ourDescription}
          </p>
          <div className="btn">
          <button className='btn-portfolio'><Link  className='btn-link' to='/portfolio'>Check out portfolio</Link></button>
          <button className='btn-get-in-touch'><Link className='btn-link' to='/qoute' >Get in touch</Link></button>
          </div>
        </div>
        <div className="who-are-we-img">
          <img src={servicesData[0].image} alt="Services Banner" />
        </div>
      </section>
      {/* Our Team Ends */}
      <ServicesComponent />
      <BuildTogether />
    </>
  );
};

export default Services;
