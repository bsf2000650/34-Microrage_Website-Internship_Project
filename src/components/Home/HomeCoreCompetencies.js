import React from 'react';
import { servicesData } from '../../data';
import { Link } from 'react-router-dom';

const HomeCoreCompetencies = () => {
  console.log(servicesData.link)
  return (
    <>
    <section className="core-competencies-section">
        <h2>Core Competencies</h2>
        <div className="core-competencies-div">
        {
            servicesData.map((serviceData)=>{
              return(
                <div className="core-competencies-item">
                    <Link to={serviceData.serviceUrl} className="links">
                    <img src={serviceData.homeServiceImg} />
                    <h3>{serviceData.serviceTitle}</h3>
                    <p>{serviceData.serviceDetail}</p>
                    </Link>
                </div>
              )
            })
        }
        </div>
      </section>
    </>
  )
}

export default HomeCoreCompetencies
