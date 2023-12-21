import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Services.css";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import RevealEffect from "../../components/RevealEffect/RevealEffect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Services = () => {
  return (
    <div className="container-1">
      <div>
        <Navbar />
      </div>
        <div className="heading">
          <motion.div
            className="container"
            initial={{ scale: 0 }}
            animate={{ y:20, scale:1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          ><div className="row d-flex justify-content-center">
          WEBSITE TEMPLATES
        </div></motion.div>
            
      </div>
      <div className="row d-flex justify-content-center">
        <span className="cad-para  w-50">
          Ut do ipsum nostrud occaecat nisi non aute anim ex officia id magna.
          Enim tempor labore sunt sit est nostrud. Ad nostrud reprehenderit qui
          consequat elit adipisicing magna anim. Aute sunt veniam ut dolore
          dolor aliqua esse aliqua tempor duis excepteur. Ex velit voluptate
          quis duis dolor laboris est labore elit quis do velit eiusmod. Commodo
          deserunt aliqua tempor id non reprehenderit in proident.
        </span>
        </div>
      <div className="row mb-5 animate__animated animate__bounceInRight">
        <div className="col-md-5 p-5 d-flex flex-column">
          <div className="row">
            <span className="fs-3 text-end w-25 pe-4">we offer</span>
            <div className="heading p-0">READY TO USE TEMPLATES</div>
            <div className="fs-2">
              Sit back, fill in your data & leave the rest on us!
            </div>
          </div>
        </div>
        <div className="col-md-7 p-4">
          <div>
            <img className="w-100" src="./Images/service-video-1.png" alt="" />
          </div>
        </div>
      </div>
      <div className="row useful p-5">
        <div className="col-md-7">
          <div>
            <img className="h-50 w-100" src="./Images/services-1.jpg" alt="" />
          </div>
        </div>
        <div className="col-md-5">
          <div className="pe-5">
            <ol className="mw-75 fs-4 text-start pb-4">
              <li>
                Choose your design from our industry-leading, designer fonts,
                and color paletts variety of templates
              </li>
              <li>Upload your product OR</li>
              <li>Explore our Ready to go Products Catalogs</li>
              <li>Set up your Ecommerce store as you like</li>
              <li>Sell!</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="row p-4">
        <div className="col-md-8">
          <div>
            <img className="mw-100" src="./Images/services-2.png" alt="" />
          </div>
        </div>
        <div className="col-md-4  text-end p-0 pe-5 pt-5">
          <span className="fs-3">
            {" "}
            Sunt cupidatat excepteur nulla qui amet pariatur cupidatat Lorem
            labore cupidatat do. Esse ea in nostrud est dolore velit cillum id
            dolore est mollit sunt nisi magna. Enim ullamco fugiat magna ut
            aliquip reprehenderit ipsum in cupidatat magna exercitation
            doloreIrure deserunt incididunt cillum sint culpa.
          </span>
          <div className="mt-5 d-flex justify-content-center">
            <button className="bg-white services-button fw-bold">
              Click here to start your journey!{" "}
              <FontAwesomeIcon className="" icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
      <div className="row mb-5 useful">
        <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
          <span className="text-start w-75 fs-2 ps-3">We also offer</span>
          <span className="s-1">READY TO GO PRODUCT CATALOGS</span>
          <span className="fs-2 w-75 text-start ps-3">
            With 600+ ready designs for your E-commerce
          </span>
        </div>
        <div className="col-md-6 my-4 img-fluid">
          <img
            className="mw-100 si"
            src="./Images/Screenshot 2023-12-13 170220.png"
            alt=""
          />
        </div>
      </div>
      <div className="row">
        <div className="our-story mb-3">
          <b>WHY US?</b>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
          <span className="text-center fs-1">UNMATCHED EXPERTISE</span>
          <span className="fs-5 w-75 text-center mt-3">
            Laborum laborum occaecat adipisicing labore. Sunt incididunt
            voluptate ex sint laborum consequat. Incididunt sunt cillum culpa
            incididunt enim magna.Aliquip laboris voluptate quis minim enim
            cillum eu.
          </span>
        </div>
        <div className="col-md-6 mb-4 img-fluid">
          <img
            className="mw-100 si animate__animated animate__bounce"
            src="./Images/services-3.png"
            alt=""
          />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Services;
