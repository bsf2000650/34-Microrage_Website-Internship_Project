import React from 'react';
import MacBook from "../../images/macbook.PNG";

const FlexibilityToInnovate = () => {
  return (
    <>
    <section className="flexibity-to-innovative-section">
        <div className="flexibity-to-innovative-div">
          <h1>FLEXIBILITY TO INNOVATE</h1>
          <p>
            Microrage surpass in every technology powering native, hybrid,
            cross-platform and custom software package development with our
            phenomenal strategists, designers, architects, developers and
            quality analysts.
          </p>
          <button>talk to us</button>
        </div>
        <div className="flexibity-to-innovative-img-div">
          <img src={MacBook} alt="Macbook" />
        </div>
      </section>
    </>
  )
}

export default FlexibilityToInnovate
