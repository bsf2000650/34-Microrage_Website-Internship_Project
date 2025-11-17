import React, { useState, useEffect } from "react";
import Tools from "../../images/tools.png";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import "../About/common.css";
import "./common_build_together_style.css";
import { designAndBranding } from "./ServicesData";
import BuildTogether from "./BuildTogether";
import Spinner from "../Spinner";
// import './DesignAndBranding.css'

const DesignAndBranding = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {/*  Who we are Start*/}
          <section className="who-are-we">
            <div className="who-are-we-content">
              <h1>
                <span>Design and</span> Branding
              </h1>
              <p>{designAndBranding[0].designAndBrandingDescription}</p>
              <div className="btn">
                <Link className="btn-link-portfolio" to="/portfolio">
                  Check out portfolio
                </Link>
                <Link className="btn-link" to="/qoute">
                  Get in touch
                </Link>
              </div>
            </div>
            <div className="who-are-we-img">
              <img src={designAndBranding[0].image} alt="About Banner" />
            </div>
          </section>
          {/* Who we are End */}
          {/* Web Development Section Starts*/}
          <section className="web-development-section">
            <h1>{designAndBranding[0].designAndBranding}</h1>
            <p className="design-detail">
              <span>Our creative team </span> {designAndBranding[0].detail}
            </p>
            <div className="detail">
              <img src={Tools} alt="Tools" />
              <div className="detail-further">
                <ul>
                  <li>{designAndBranding[0].point1}</li>
                  <li>{designAndBranding[0].point2}</li>
                  <li>{designAndBranding[0].point3}</li>
                  <li>{designAndBranding[0].point4}</li>
                </ul>
              </div>
            </div>
          </section>
          {/* Web Development Section Ends*/}
          {/* Build together */}
          <BuildTogether />
          {/* Build Together */}
        </>
      )}
    </>
  );
};

export default DesignAndBranding;
