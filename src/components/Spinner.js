import React from 'react';
import {InfinitySpin} from "react-loader-spinner";
import './spinner.css';

const Spinner = () => {
  return (
    <>
        <div className="spinner">
        <InfinitySpin 
        width='100%'
        color="#97B325"
        wrapperClass="spinner"
        wrapperStyle="style"
/> 
        </div>
    </>
  )
}

export default Spinner
