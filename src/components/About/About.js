import React, { useState, useEffect } from "react";
import "./About.css";
import AboutMicrorage from "./AboutMicrorage";
import HowWeDo from "./HowWeDo";
import WhyChooseUs from "./WhyChooseUs";
import LastSection from "./LastSection";
import Spinner from "../Spinner";
import "@fontsource/source-sans-pro/200.css"; 
import "@fontsource/source-sans-pro/400.css"; 


const About = () => {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);


  return (
    <>
      { isLoading ? 
        <Spinner /> : <>
          <AboutMicrorage />
<HowWeDo />
<WhyChooseUs />
<LastSection />
        </>
      }
    </>
  );
};

export default About;


