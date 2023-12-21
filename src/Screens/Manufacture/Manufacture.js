import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Manufacture.css";
import ParallaxCompo from "../../components/ParallaxCompo/ParallaxCompo";

const Manufacture = () => {
 
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="row">
        <div className="heading mb-3">Manufacturing</div>
        <div className="container">
          <div>
            <video className="w-50" src="./Videos/jewel_vid-1.mp4"></video>
          </div>
          <div className="row">
            <ParallaxCompo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Manufacture;
