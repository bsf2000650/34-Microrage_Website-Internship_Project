import React, { useState, useEffect } from "react";
import './GetFreeQoute.css';
import '../Services/common_build_together_style.css';
import BuildTogether from '../Services/BuildTogether';
import Spinner from "../Spinner";

const GetFreeQoute = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  return (
    <>
      {isLoading ? <Spinner /> : <>
      <section className="qoute-build-together">
        <BuildTogether />
      </section>
      </>}
    </>
  )
}

export default GetFreeQoute;
