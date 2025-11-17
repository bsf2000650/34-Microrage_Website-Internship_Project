import React from "react";
import { keyClients } from "../../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const KeyClients = () => {
  const keyClientsSettings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    width: "16%",
    variableWidth: true,
  };
  return (
    <>
      <section className="key-clients">
        <h1>
          Our <span>Key Clients</span>
        </h1>
        <Slider className="slick-carousel-key-clients" {...keyClientsSettings}>
          {keyClients.map((data, index) => {
            return (
              <div className="box">
                <img src={data.keyClientsImg} alt={data.keyClientsAlt} />
              </div>
            );
          })}
        </Slider>
      </section>
    </>
  );
};

export default KeyClients;
