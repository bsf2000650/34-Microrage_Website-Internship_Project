import React, { useState } from "react";
import { buildTogetherData } from "../../data";
import FormMan from "../../images/form-man.png";
import { Link } from "react-router-dom";
import axios from 'axios';

const BuildTogether = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    price: '',
    message: '',
    file: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     file,
  //   }));
  // };

  // https://projects.microrage.com/microrage/api.php

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
    formDataToSend.append('category', formData.category);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('message', formData.message);
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

  const services = {
    web_development: "Web App Development",
    mobile_app: "Mobile App Development",
    ecommerce: "Ecommerce",
    digital_marketing: "Digital Marketing",
    design_and_branding: "Design and Branding",
    business_process_outsourcing: "Business Process Outsourcing",
  };

  const prices = {
    price1: "Less than $1000",
    price2: "$1000-5000",
    price3: "$5000-15000",
    price4: "More than $15000",
  };

  return (
    <>
      <section className="build-together">
        <h1>
          Let’s build a great product <br />
          together!
        </h1>
        {buildTogetherData.map((buildData, index) => {
          return (
            <div className="build-together-grid">
              <div className="contact-form">
                <h1>{buildData.formHeader}</h1>
                <form method="POST" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={buildData.name}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    id="email"
                    placeholder={buildData.email}
                  />
                  <input
                    className="number"
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    id="phone"
                    placeholder={buildData.phone_no}
                  />
                  <select className="services" 
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange} 
                  id="sevices">
                    <option value="">Web App Development</option>
                    <option value={services.web_development}>
                      {buildData.web_development}
                    </option>
                    <option value={services.mobile_app}>
                      {buildData.mobile_app}
                    </option>
                    <option value={services.ecommerce}>
                      {buildData.ecommerce}
                    </option>
                    <option value={services.digital_marketing}>
                      {buildData.digital_marketing}
                    </option>
                    <option value={services.design_and_branding}>
                      {buildData.design_and_branding}
                    </option>
                    <option value={services.business_process_outsourcing}>
                      {buildData.business_process_outsourcing}
                    </option>
                  </select>
                  <select
                    classclassName="prices"
                    className="prices"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    id="prices"
                  >
                    <option value={prices.price1}>
                      {buildData.less_than_$1000}
                    </option>
                    <option value={prices.price2}>
                      {buildData._$1000_5000}
                    </option>
                    <option value={prices.price3}>
                      {buildData._$5000_15000}
                    </option>
                    <option value={prices.price4}>
                      {buildData.more_than_$15000}
                    </option>
                  </select>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    id="description"
                    cols="30"
                    rows="10"
                    placeholder={buildData.textarea_placeholder}
                  ></textarea>
                  <label className="custom-file-upload">
                    <input type="file" name="file" onChange={handleFileChange}/>
                    {buildData.attach_file}
                  </label>
                  <input type="submit" value="Submit"/>
                </form>
              </div>
              <div className="build-together-content">
                <div className="further-div">
                  <h2>{buildData.whats_next}</h2>
                  <ol>
                    <li>{buildData.point_1}</li>
                    <li>
                      {buildData.point_2}
                      <span>
                        <Link className="portfolio" to="/portfolio">
                          {buildData.span}
                        </Link>
                      </span>
                    </li>
                    <li>{buildData.point_3}</li>
                    <li>{buildData.point_4}</li>
                  </ol>
                </div>
                <img src={FormMan} alt="Form Man" />
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default BuildTogether;
