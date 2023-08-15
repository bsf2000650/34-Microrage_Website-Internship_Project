import React from 'react';
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { testimonials } from './HomeData';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Custom_Carousel.css'
// import "./carousel-custom.css";


const Testimonials = () => {
    const testimonialSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
      };
      const stars = {
        count: 5,
        size: 30,
      };
  return (
    <>
    <section className="testimonials">
        <h1>Testimonials</h1>
        <Slider
          className="slick-carousel-testimonials"
          {...testimonialSettings}
        >{
              testimonials.map((data)=>{
                return(
                  <div className="reviews">
                    <h3>{data.reviewPerson}</h3>
                    <p>{data.review}</p>
                    <div className="stars">
                    <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
                    </div>
                  </div>
                )
              })
        }
        </Slider>
      </section>
    </>
  )
}

export default Testimonials
