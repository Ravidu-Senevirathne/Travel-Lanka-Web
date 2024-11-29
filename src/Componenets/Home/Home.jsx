import React,{useEffect} from 'react'
import './home.scss'
import video from '../../../src/Assets/video.mp4'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaTripadvisor } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Home = () => {
    //react hook to add scroll animation
    useEffect(()=>{
      Aos.init({duration:2000})
    },[])
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type='video/mp4'></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Our Packages
          </span>
          <h1 data-aos="fade-up" className='homeTitle'>Search Your Holiday </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
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
          <div className="searchOption flex">
          <HiFilter className='icon'/>
          <span>MORE FILTERS</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
          <FaFacebook className='icon'/>
          <FaInstagram className='icon'/>
          <FaTripadvisor className='icon'/>
          

          </div>

          <div className="leftIcons">
          <BsListTask className='icon'/>
          <TbApps className='icon'/>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Home