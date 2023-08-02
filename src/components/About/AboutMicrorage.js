import React from 'react';
import { aboutMicrorageData } from './AboutData';
import { FaCheck } from 'react-icons/fa';
import {Link} from 'react-router-dom';

const AboutMicrorage = () => {
  return (
    <>
        {
            aboutMicrorageData.map((data,index)=>{
                return(
                    <>
                    <section className='about-who-are-we'>
                    <div className="about-who-are-we-content">
                    <h1><span>WHO</span> ARE WE</h1>
                    <p className='experienced-team'> {data.experiencedTeam}</p>
                    <p>{data.experiencedTeamDetail}</p>
                    
                    <div className='btn'>
                    <button className='btn-portfolio'><Link  className='btn-link' to='/portfolio'>Check out portfolio</Link></button>
                    <button className='btn-get-in-touch'><Link className='btn-link' to='/qoute' >Get in touch</Link></button>
                    </div>
                    </div>
                    <div className='about-who-are-we-img'>
                    <img src={data.image} alt='About Banner'/>
                    </div>
                    </section>

                    <section className='about-microrage-solutions'>
                    <div className='about-microrage'>
                        <h2>ABOUT <span>MICRORAGE SOLUTIONS</span></h2>
                        <p>{data.aboutMicrorageSolutions}</p>
                    </div>
                    <div className='vision-div'>
                        <h2>Vision</h2>
                        <div>
                           <p>{data.vision}</p>
                        </div>
                    </div>
                    <div className='mission'>
                        <h2>Mission</h2>
                        <p>{data.missionStatement}</p>
                        <ul>
                            <FaCheck className='check-mark'/>
                            <p>{data.missionPoints.point1}</p><br/>
                            <FaCheck className='check-mark'/>
                            <p>{data.missionPoints.point2}</p><br/>
                            <FaCheck className='check-mark'/>
                            <p>{data.missionPoints.point3}</p><br/>
                            <FaCheck className='check-mark'/>
                            <p>{data.missionPoints.point4}</p><br/>
                            <FaCheck className='check-mark'/>
                            <p>{data.missionPoints.point5}</p><br/>
                        </ul>
                    </div>
                    <div className='about-microrage detail'>
                        <p>{data.aboutMicrorageDetail}</p>
                    </div>
                    </section>
                    </>
                )
            })
        }
    </>
  )
}

export default AboutMicrorage
