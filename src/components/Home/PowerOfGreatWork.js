import React from "react";
import { powerOfGreatWork } from "./HomeData";

const PowerOfGreatWork = () => {
  
  return (
    <>
        <section className="power-of-great-work">
        <h1>{powerOfGreatWork[0].mainHeading}</h1>
        <p>{powerOfGreatWork[0].description}</p>
        <div className="power-of-great-work-imgs">
          <div className="two-images-div">
            <div className="first-inner-div">
              <h2>{powerOfGreatWork[1].heading}</h2>
              <p>
                {powerOfGreatWork[1].description}
              </p>
              <img
                className="two-images-div-img"
                src={powerOfGreatWork[1].image}
                alt="Hotels Finder"
              />
            </div>
            <div className="second-inner-div">
            <h2>{powerOfGreatWork[2].heading}</h2>
              <p>
                {powerOfGreatWork[2].description}
              </p>
              <img
                className="two-images-div-img2"
                src={powerOfGreatWork[2].image}
                alt="Regent Security"
              />
            </div>
          </div>
          <div className="three-images-div">
            <div className="first-div">
              <div className="grid-image">
                <img src={powerOfGreatWork[3].image} alt="Upgrade" />
              </div>
              <div className="first-div-content">
                <h2>{powerOfGreatWork[3].heading}</h2>
                <p>
                  {powerOfGreatWork[3].description}
                </p>
              </div>
            </div>
            <div className="second-div">
              <div className="grid-image">
                <img src={powerOfGreatWork[4].image} alt="Canvas Studio" />
              </div>
              <div className="second-div-content">
                <h2>{powerOfGreatWork[4].heading}</h2>
                <p>
                  {powerOfGreatWork[4].description}
                </p>
              </div>
            </div>
            <div className="third-div">
              <div className="grid-image">
                <img src={powerOfGreatWork[5].image} alt="Upgrade" />
              </div>
              <div className="third-div-content">
                <h2>{powerOfGreatWork[5].heading}</h2>
                <p>
                  {powerOfGreatWork[5].description}
                </p>
              </div>
            </div>
          </div>
          <div className="coded-level">
            <div className="content">
              <h1>{powerOfGreatWork[6].heading}</h1>
                <p>
                  {powerOfGreatWork[6].description}
                </p>
            </div>
            <img src={powerOfGreatWork[6].image} alt="Coded Level" />
          </div>
        </div>
      </section>
    </>
  );
};

export default PowerOfGreatWork;
