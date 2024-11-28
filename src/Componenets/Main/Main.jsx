import React from 'react'
import './main.scss'
import anuradapura from '../../Assets/anuradhapura-6065428_1280.jpg'
import ella from '../../Assets/ella.jpg'
import galle from '../../Assets/galle.jpg'
import horton from '../../Assets/horton-plains.jpg'
import mirissa  from '../../Assets/mirissa.jpg'
import nuwaraeliya from '../../Assets/nuwara-eliya.jpg'
import polonnaruwa from '../../Assets/polonnaruwa.jpg'
import sigiriya from '../../Assets/sigiriya.jpg'
import yaala from '../../Assets/yaala.jpg'
import kandy from '../../Assets/temple-204803_1920.jpg'


import { HiLocationMarker } from "react-icons/hi";
import { FaClipboardCheck } from "react-icons/fa";
const Main = () => {
  const Data = [
    {
      id: 1,
      imgSrc: anuradapura,
      destTitle: "Sacred City of Anuradhapura",
      location: "Anuradhapura",
      grade: "Heritage",
      fees: "LKR 3,450",
      description: "Discover the ancient capital with its iconic stupas and sacred relics."
    },
    {
      id: 2,
      imgSrc: ella,
      destTitle: "Ella",
      location: "Ella",
      grade: "Nature",
      fees: "LKR 2,800",
      description: "A scenic hill town known for its lush greenery and hikes."
    },
    {
      id: 3,
      imgSrc: galle,
      destTitle: "Galle Fort",
      location: "Galle",
      grade: "Coastal Heritage",
      fees: "LKR 4,200",
      description: "A colonial-era fort offering stunning views of the Indian Ocean."
    },
    {
      id: 4,
      imgSrc: horton,
      destTitle: "Horton Plains",
      location: "Horton Plains",
      grade: "Nature",
      fees: "LKR 3,900",
      description: "A UNESCO site featuring scenic trails and the famous World's End."
    },
    {
      id: 5,
      imgSrc: mirissa,
      destTitle: "Mirissa Beach",
      location: "Mirissa",
      grade: "Beach",
      fees: "LKR 2,500",
      description: "A picturesque beach town perfect for whale watching and relaxation."
    },
    {
      id: 6,
      imgSrc: nuwaraeliya,
      destTitle: "Nuwara Eliya",
      location: "Nuwara Eliya",
      grade: "Hill Station",
      fees: "LKR 3,600",
      description: "Known as 'Little England,' a cool escape amidst tea plantations."
    },
    {
      id: 7,
      imgSrc: polonnaruwa,
      destTitle: "Ancient City of Polonnaruwa",
      location: "Polonnaruwa",
      grade: "Heritage",
      fees: "LKR 4,750",
      description: "A historic city featuring impressive ruins and ancient temples."
    },
    {
      id: 8,
      imgSrc: sigiriya,
      destTitle: "Sigiriya Rock Fortress",
      location: "Sigiriya",
      grade: "Heritage",
      fees: "LKR 5,200",
      description: "Climb the iconic Lion Rock for breathtaking views."
    },
    {
      id: 9,
      imgSrc: kandy,
      destTitle: "Temple of the Tooth Relic",
      location: "Kandy",
      grade: "Spiritual",
      fees: "LKR 3,000",
      description: "A sacred Buddhist site housing the tooth relic of Lord Buddha."
    },
    {
      id: 10,
      imgSrc: yaala,
      destTitle: "Yala National Park",
      location: "Yala",
      grade: "Wildlife",
      fees: "LKR 4,600",
      description: "Explore the wildlife haven, home to leopards and elephants."
    }
  ];
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">
          Most visited destinations
        </h3>
        </div> 

        <div className="secContent grid">
          {/* so here im going to use high order array method(map) */}

          {
            Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
              return(
                <div className="singleDestination">

                  <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle} />
                  </div>

                  <div className="cardInfo">
                    <h4 className="destTitle">{destTitle}</h4>
                    <span className="continent flex">
                    <HiLocationMarker className='icon'/>
                    <span className="name">{location}</span>
                    </span>

                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade}<small>+1</small></span>
                      </div>

                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>

                    <div className="desc">
                      <p>{description}</p>
                    </div>

                    <button className="btn flex">
                     DETAILS <FaClipboardCheck className='icon'/>
                    </button>
                  </div>


                </div>
              )
            })
          }
          
          </div> 


    </section>
  )
}

export default Main