import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import '../Services/core_competencies_common_style.css';
import HomeCoreCompetencies from "./HomeCoreCompetencies";
import KeyClients from "./KeyClients";
import InnovativeSolutionSection from "./InnovativeSolutionSection";
import FlexibilityToInnovate from "./FlexibilityToInnovate";
import PowerOfGreatWork from "./PowerOfGreatWork";
import OurStrategy from "./OurStrategy";
import Testimonials from "./Testimonials";
import Spinner from "../Spinner";
import "@fontsource/source-sans-pro"; 
import "@fontsource/source-sans-pro/400.css"; 

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  return (
    <>
      {
      isLoading ? 
      <Spinner /> : 
      <><div className="container">
      <InnovativeSolutionSection />
      <HomeCoreCompetencies />
      <FlexibilityToInnovate />
      <PowerOfGreatWork />
      <OurStrategy />
      <KeyClients />
      <Testimonials />
      </div></>}
    </>
  );
};

export default Home;
