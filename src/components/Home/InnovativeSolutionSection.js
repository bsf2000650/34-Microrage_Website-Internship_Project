import React from 'react';
import GetInTouch from "../../images/get-in-touch-image.PNG";

const InnovativeSolutionSection = () => {
  return (
    <>
        <section className="innovative-solutions-section">
        <h1>
          INNOVATIVE SOLUTIONS FOR YOU <br /> THAT <span>ACTUALLY</span> WORK!
        </h1>
        <p>
          We are a web/mobile app, Ecommerce and custom software development
          agency!
        </p>
        <div className="innovative-solutions">
          <div className="get-in-touch">
            <p>
              Have an idea for <br /> a great project?
            </p>
            <button type="submit">Get in Touch</button>
          </div>
          <img
            className="get-in-touch-image"
            src={GetInTouch}
            alt="Get in Touch"
          />
        </div>
      </section>
    </>
  )
}

export default InnovativeSolutionSection
