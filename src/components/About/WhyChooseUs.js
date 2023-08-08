import React from "react";
import { whyChooseUs } from "./AboutData";

const WhyChooseUs = () => {
  return (
    <>
      <section className="why-choose-us-section">
        <h1>
          WHY <span>CHOOSE US</span>
        </h1>
        <div className="why-choose-us-grid">
          {whyChooseUs.map((data) => {
            return (
              <div className="item">
                <h2>{data.header}</h2>
                <div className="line"></div>
                <p>{data.detail}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
