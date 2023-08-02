import React from 'react';
import { ourStrategy } from './HomeData';

const OurStrategy = () => {
  return (
    <>
          <section className="our-strategy">
        <h1>
          Our <span>Strategy</span>
        </h1>
        <div className="services">
        {
          ourStrategy.map((data)=>{
            return(
              <>
              <div className="service">
               <img src={data.image} alt={data.alt}/>
               <h2>{data.description}</h2>
              </div>
              </>
            )
          })
        }
        </div>
      </section>
    </>
  )
}

export default OurStrategy
