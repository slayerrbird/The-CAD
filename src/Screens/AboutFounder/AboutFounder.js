import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ScrollAnimation from "react-animate-on-scroll";
import Footer from "../../components/Footer/Footer";
const AboutFounder = () => {
  const isActive = 0;

  return (
    <>
      <div>
        <Navbar isActive={isActive} />
      </div>
      <div className="container">
        <div className="row">
          <div className="">
            <span className="heading d-flex justify-content-center">
              <ScrollAnimation
                animateIn="animate__fadeInUpBig"
                animateOut="bounceOutLeft"
                delay={20}
              >
                <span className="">A</span>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="animate__fadeInUpBig"
                animateOut="bounceOutLeft"
                delay={80}
              >
                <span className="">B</span>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="animate__fadeInUpBig"
                animateOut="bounceOutLeft"
                delay={100}
              >
                <span className="">O</span>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="animate__fadeInUpBig"
                animateOut="bounceOutLeft"
                delay={120}
              >
                <span className="">U</span>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="animate__fadeInUpBig"
                animateOut="bounceOutLeft"
                delay={140}
              >
                <span className="">T</span>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="animate__fadeInDownBig"
                animateOut="bounceOutLeft"
                duration={1}
              >
                {" "}
                <span className="ms-3">THE FOUNDER</span>
              </ScrollAnimation>
            </span>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default AboutFounder;
