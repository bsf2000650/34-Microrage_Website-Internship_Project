import React from 'react';
import { servicesData } from '../../data';
import { Link } from 'react-router-dom';

const ServicesComponent = () => {
  return (
    <>
    <section className="services-section">
    <div className="services-div">
    {servicesData.map((serviceData, index) => {
            return (
              <div className="services-item">
                <Link className="links" to={serviceData.serviceUrl}>
                  <img src={serviceData.serviceImg} />
                  <h3>{serviceData.serviceTitle}</h3>
                  <p>{serviceData.serviceDetail}</p>
                </Link>
              </div>
            );
          })}
    </div>
  </section>       
    </>
  )
}

export default ServicesComponent
