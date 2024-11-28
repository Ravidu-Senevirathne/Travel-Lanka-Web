import React from 'react'
import './home.scss'
import video from '../../../src/Assets/video.mp4'
import { GrLocation } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";

const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type='video/mp4'></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">
            Our Packages
          </span>
          <h1 className='homeTitle'>Search Your Holiday </h1>
        </div>

        <div className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search Your Destination:</label>
            <div className="input flex">
              <input type='text' placeholder='Enter Name Here ...'/>
              <GrLocation className='icon'/>
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="city">Enter Your Date:</label>
            <div className="input flex">
              <input type='date' placeholder='Select Your Date '/>
              
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max Price:&nbsp;</label>
              <h3 className='total'>LKR.20000 </h3> 
            </div>
            <div className="input flex">
              <input type="range" max="20000" min="5000" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home