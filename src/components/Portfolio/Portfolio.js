import React, { useState, useEffect } from "react";
import ServiceBanner from '../../images/services-banner.png'
import './Portfolio.css'
import HotelsFinder from "../../images/hotels-finder.PNG";
import RegentSecurity from "../../images/regent-security.PNG";
import SourceApp from "../../images/source-app.PNG";
import Upgrade from "../../images/upgrade.PNG";
import CanvasStudio from "../../images/canvas-studio.PNG";
import CodedLevel from "../../images/coded-level.PNG";
import { Link } from 'react-router-dom';
import Spinner from "../Spinner";

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  return (
    <>
    {
      isLoading 
      ? 
      <Spinner /> :
       <>
            {/*  Who we are Start*/}
    <section className='portfolio-who-are-we'>
        <div className="portfolio-who-are-we-content">
          <h1><span>OUR</span> WORK</h1>
          <p className='experienced-team'>We are a passionate experienced team with big ambitions.</p>
          <p>
          Custom web development offers options for businesses who seek to provide a flexible, consistent experience for users across different platforms, we achieve it through innovative functionality, well designed architecture based on most suitable technology.
          </p>
          <div className='btn'>
          {/* <button className='btn-portfolio'>Check out portfolio</button> */}
          <button style={{marginLeft:'98px'}} className='btn-get-in-touch'><Link className='btn-link' to='/qoute' >Get in touch</Link></button>
          </div>
        </div>
        <div className='portfolio-who-are-we-img'>
            <img src={ServiceBanner} alt='About Banner'/>
        </div>
        </section>
        {/* Who we are End */}
        <div className="power-of-great-work-imgs">
          <div className="two-images-div">
            <div className="first-inner-div">
              <h2>Hotels Finder</h2>
              <p>
                A mobile app development to search hotels with price and
                features comparison.
              </p>
              <img
                className="two-images-div-img"
                src={HotelsFinder}
                alt="Hotels Finder"
              />
            </div>
            <div className="second-inner-div">
              <h2>Regent Security</h2>
              <p>
                Design, branding and website development for Australian based
                security services provider.
              </p>
              <img
                className="two-images-div-img2"
                src={RegentSecurity}
                alt="Hotels Finder"
              />
            </div>
          </div>
          <div className="three-images-div">
            <div className="first-div">
              <div className="grid-image blue-gb">
                <img src={Upgrade} alt="Upgrade" />
              </div>
              <div className="first-div-content">
                <h2>Upgrade</h2>
                <p>
                  A marketplace for tourism industry for tours bookings and
                  itinerary management.
                </p>
              </div>
            </div>
            <div className="second-div">
              <div className="grid-image">
                <img src={CanvasStudio} alt="Canvas Studio" />
              </div>
              <div className="second-div-content">
                <h2>Canvas Studio</h2>
                <p>
                  Website and branding kit for the Canvas Studio; an event
                  management startup.
                </p>
              </div>
            </div>
            <div className="third-div">
              <div className="grid-image">
                <img src={SourceApp} alt="Source App" />
              </div>
              <div>
                <h2>Source App</h2>
                <p>
                  Mobile app for employees to coordinate, supervise and track
                  the daily assignments and tasks.
                </p>
              </div>
            </div>
          </div>
          <div className="coded-level">
            <div className="content">
              <h1>Coded Level</h1>
              <p>
                Website development and marketing strategy for Coded Level; a
                software development service provider based in Canada.
              </p>
            </div>
            <img src={CodedLevel} alt="Coded Level" />
          </div>
      </div>
    </>}

    </>
  )
}

export default Portfolio
