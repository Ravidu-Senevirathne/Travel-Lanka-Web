import React,{useEffect} from "react";
import "./footer.scss";
import video2 from "../../Assets/video2.mp4";
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { TiSocialTwitter } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel With Us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder="Enter Email Address" />
            <button className="btn flex" type="submit">
              SEND
              <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdTravelExplore className="icon" /> Travel Lanka
              </a>
            </div>

            <div className="footerParagraph">
              Discover the timeless beauty of Sri Lanka with us! From golden
              beaches and lush tea plantations to ancient ruins and vibrant
              culture, our travel guides and services are designed to help you
              create unforgettable memories. Start your journey today and
              explore the wonders of this island paradise
            </div>

            <div className="footerSocials flex">
              <TiSocialTwitter className="icon" />
              <FaYoutube className="icon" />
              <FaInstagramSquare className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            <div className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payments
              </li>
            </div>

            <div className="linkGroup">
              <span className="groupTitle">PARTNERS</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                RentCars
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                TripAdvisor
              </li>
            </div>

            <div className="linkGroup">
              <span className="groupTitle">Last Minute</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Colombo
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Kandy
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Galle
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Ella
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Sigiriya
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Nuwara Eliya
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Arugam Bay
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Jaffna
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Mirissa
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Yala National Park
              </li>
            </div>
            <div className="footerDiv flex">
              <small>COPYRIGHTS RESERVED - RAVIDU-SENEVIRATHNE</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
