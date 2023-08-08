import React, { useState, useEffect } from "react";
import './Contact.css';
import '../Services/common_build_together_style.css';
import BuildTogether from '../Services/BuildTogether';
import Spinner from '../Spinner';

const Contact = () => {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <>
    {/* Contact Section Start */}
    {isLoading ? <Spinner /> : <>
    <section className='contact-section'>
        <h1>Contact Us</h1>
        <p className='career-description'>Being a strong team of high-skilled programmers, we are passionate<br/> about delivering tangible results.</p>
        <div className='get-in-touch-grid'>
            <div className='contact-item'>
            <h1>Get in touch</h1>
            <address className="contact-address">
              MB-60, Zainab Tower, Model Town Link Road,<br/>
              Lahore, Pakistan.<br/>
              Phone: <span className="contact-phone-number">+92-42-35942474</span><br/>
              Email: <a href="info@microrage.com">info@microrage.com</a><br/>
                </address>
            </div>
            <iframe title="Google Map Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.050504317476!2d74.31460310970468!3d31.46779684963276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190756413fd127%3A0xce9bb64992787bfa!2sMicrorage%20Solutions%20(PVT)%20Limited!5e0!3m2!1sen!2s!4v1690355234114!5m2!1sen!2s" 
            className='google-map'
            style={{border:0}} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
    
        </section>
        {/* Contact Section Ends */}
        {/* Build together */}
      <section className="build-together">
      <BuildTogether />
      </section>
      {/* Build Together */}
    </>}
        
    </>
  )
}

export default Contact
