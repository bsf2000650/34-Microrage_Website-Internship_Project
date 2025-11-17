import React from 'react';
import { howWeDo } from './AboutData';

const HowWeDo = () => {
  return (
    <>
        {howWeDo.map((data) => (
          <section className="how-we-do" key={data.howWeDo}>
            <h1>HOW <span>WE DO</span></h1>
            <p>{data.howWeDo}</p>
          </section>
        ))}
    </>
  )
}

export default HowWeDo
