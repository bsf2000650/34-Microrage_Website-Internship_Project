import React, { useState } from "react";
import FileButton from './FileButton.js'
import "./Job.css";
import "@fontsource/source-sans-pro";
import "@fontsource/source-sans-pro/400.css";
import "@fontsource/source-sans-pro/600.css";
import "@fontsource/source-sans-pro/700.css";
import MicrorageFavIcon from "../../images/favicon-300x300.png";
import { FontAwesomeIcon } from "react-icons";
import { FaBuilding } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaMapMarker } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaSquareXing } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Link } from "react-router-dom";

const Job = () => {

    const [formData, setFormData] = useState({
      name:'',
      email:'',
      phone:'',
      file:null
    })

    const handleInputChange = (e) => {
      const {name, value} = e.target;
      setFormData({...formData, [name]:value});
    }

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      console.log(file.type);
      if (file) {
        const reader = new FileReader();
  
          reader.readAsDataURL(file);
          reader.onload = () =>{
            const base64String = reader.result;
            setFormData((prevFormData) => ({
              ...prevFormData,
              file: base64String,
            }))
          }
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('file', formData.file);
      console.log(formData.file);
  
      try {
        const res = await fetch('https://projects.microrage.com/microrage/api.php', {
          method: 'POST',
          body: formDataToSend,
        });
  
        const data = await res.json();
  
        if (res.ok) {
          window.alert('Registration Successful');
          console.log('Successful Registration', data);
          console.log('Data : ',data);
          console.log('Form Data : ',formData);
        } else {
          window.alert('Invalid Registration');
          console.log('Invalid Registration', data);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

  return (
    <>
      <div className="container1">
        <h1 className="h1">WordPress Developer</h1>
        <div className="job1">
          <div className="fav-icon">
            <img src={MicrorageFavIcon} />
          </div>
          <div className="description">
            <div>
              <FaBuilding />
              <Link className="link1">Microrage Solutions</Link>
            </div>
            <p className="company-tagline">
              INNOVATIVE SOLUTIONS FOR YOU THAT ACTUALLY WORK!
            </p>
          </div>
        </div>
        <div className="time">
          <div className="job-description1">
            <p>
              <FaBriefcase
                style={{ color: "#3b3a3c" }}
                className="brief-case"
              />
              <span className="full-time1">Full Time</span>
            </p>
            <p>
              <FaMapMarker
                style={{ color: "#3b3a3c" }}
                className="location-arrow"
              />
              <span className="full-time1">Location</span>
            </p>
          </div>
        </div>
        <p className="detail-description">
          We are looking for a talented and innovative WordPress Developer
          having 2-4 years of a proven track record of developing WordPress
          Themes and Plugins. Candidates who are interested in developing their
          careers, loving to work in a great team environment, and enthusiastic
          about learning new technologies are encouraged to apply.
        </p>
        <div className="application-form">
          <h3>Apply Online</h3>
          <form>
            <div className="application-form-inputs">
              <label htmlFor="full-name">Full Name</label>
              <input
               type="text"
                required='required'
                 name="name"
                  id="full-name"
                  onChange={handleInputChange} 
                  value={formData.name}
                  />
            </div>
            <div className="application-form-inputs">
              <label htmlFor="email">Email</label>
              <input 
              type="email"
               required='required'
                name="email" 
                id="full-name"
                onChange={handleInputChange} 
                  value={formData.email} />
            </div>
            <div className="application-form-inputs">
              <label htmlFor="phone">Phone No</label>
                <div className="file">
              <PhoneInput
                className="phone"
                placeholder='0300 1234567'
                defaultCountry="PK"
                value={formData.phone}
                onChange={handleInputChange}
                required='required'

                />
                </div>
            </div>
            <div className="application-form-inputs">
            <label className="file-label" htmlFor="filePicker">Attach Resume</label>
                <div className="file">
                    <span className="choose-file">No File Choose</span>
                    <span className="browse-button">Browse</span>
                    <input 
                    required='required' 
                    name="file" 
                    type="file"
                    onChange={handleFileChange}
                    />
                </div>
            </div>
            <div className="application-form-inputs">
                <input type="submit" />
            </div>
          </form>
        </div>
        <div className="by-november">
          <span className="span-1">By</span>
          <span className="span-2">November 20, 2020</span>
          <span className="span-3">Comments Off</span>
        </div>
        <div className="share-story">
          <h1>Share This Story, Choose Your Platform!</h1>
          <div className="social-links">
            <Link className="icon">
              <FaFacebookF />
            </Link>
            <Link className="icon">
              <FaTwitter />
            </Link>
            <Link className="icon">
              <FaReddit />
            </Link>
            <Link className="icon">
              <FaLinkedinIn />
            </Link>
            <Link className="icon">
              <FaWhatsapp />
            </Link>
            <Link className="icon">
              <FaTumblr />
            </Link>
            <Link className="icon">
              <FaPinterestP />
            </Link>
            <Link className="icon">
              <SlSocialVkontakte />
            </Link>
            <Link className="icon">
              <FaSquareXing />
            </Link>
            <Link className="icon">
              <AiOutlineMail />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Job;
