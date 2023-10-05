import React, { useEffect } from 'react';
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import Careers from './components/Careers/Careers';
import Contact from './components/Contact Us/Contact';
import GetFreeQoute from './components/GetFreeQoute/GetFreeQoute';
import WebDevelopment from './components/Services/WebDevelopment';
import MobileApp from './components/Services/MobileApp'
import Ecommerce from './components/Services/Ecommerce';
import DesignAndBranding from './components/Services/DesignAndBranding';
import DigitalMarketing from './components/Services/DigitalMarketing';
import StrategicConsultancy from './components/Services/StrategicConsultancy'
import BusinessProcessOutSourcing from './components/Services/BusinessProcessOutSourcing'
import ManagedHostingService from './components/Services/ManagedHostingService'
import Portfolio from './components/Portfolio/Portfolio';
import Error from './components/Error/Error';
import Job from './components/Careers/Job';
import "@fontsource/source-sans-pro/400.css"; 
const App = () => {

  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route exact path='/Microrage_Website/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/services/:web-development' element={<WebDevelopment />} />
        <Route exact path='/services/:mobile-app' element={<MobileApp />} />
        <Route exact path='/services/:ecommerce' element={<Ecommerce />} />
        <Route exact path='/services/:design-branding' element={<DesignAndBranding />} />
        <Route exact path='/services/:digital-marketing' element={<DigitalMarketing />} />
        <Route exact path='/services/:strategic-consultancy' element={<StrategicConsultancy />} />
        <Route exact path='/services/:business-process-outsourcing' element={<BusinessProcessOutSourcing />} />
        <Route exact path='/services/:managed-hosting-services' element={<ManagedHostingService />} />
        <Route exact path='/portfolio' element={<Portfolio />} />
        <Route exact path='/careers' element={<Careers />} />
        <Route exact path='/careers/job' element={<Job />}/>
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/qoute' element={<GetFreeQoute />} />
        <Route exact path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router> 
    </>
  )
}

export default App
