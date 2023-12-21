import React, { useState, useEffect } from "react"
import Navbar from "../../components/Navbar/Navbar"
import "./Homepage.css"
import Footer from "../../components/Footer/Footer"
import CAD3D from "../3DCAD/CAD3D"
import Jewel_rendering from "../Jewelry_rendering/Jewel_rendering"
import Timeline from "../../components/Timeline/Timeline"
import RevealEffect from "../../components/RevealEffect/RevealEffect"

// import {Home} from '../../routes/route'
const Homepage = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const paragraphs = [
    "Bringing Desing To Life",
    "A New Feeling",
    "Never Seen Experience"
    // Add more paragraphs here as needed
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === paragraphs.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000) // Change the interval time as desired (in milliseconds)

    return () => clearInterval(interval)
  }, [paragraphs.length])

  const isActive = 0

  return (
    <div className="container1">
      <Navbar isActive={isActive} />
      <div className="video">
        <video
          playsInline={true}
          autoPlay={true}
          loop={true}
          muted={true}
          controls={false}
          className="slider-video container-fluid"
          id="myVideo"
          style={{ visibility: "visible" }}
          src="https://thecadco.com/assets/admin/uploads/doc/banner/7/1691279138shot_05_1.mp4"
        ></video>
      </div>
      <div className="banner">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {paragraphs.map((paragraph, index) => (
            <div key={index} className={`slide`} style={{ width: "100%" }}>
              <p>
                "<b>{paragraph}</b>"
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="para container">
        <RevealEffect />

        <p className="subject">
          Deserunt adipisicing minim pariatur in. Aute veniam sit est sint nisi{" "}
          <span className="bolder">
            {" "}
            tempor aliqua excepteur laboris consequat consequat fugiat.
          </span>{" "}
          Est ad qui deserunt fugiat qui cillum amet. Ut cillum eu Lorem sit et
          excepteur consectetur commodo nisi ex.
        </p>
      </div>

      <div>
        <Timeline />
      </div>
      <div>
        <CAD3D />
      </div>
      <div>
        <Jewel_rendering />
      </div>
      <Footer />
    </div>
  )
}

export default Homepage
