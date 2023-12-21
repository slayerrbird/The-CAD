import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ScrollAnimation from "react-animate-on-scroll";
import Footer from "../../components/Footer/Footer";

const Portfolio = () => {
  const isActive = 0;

  return (
    <>
      <div>
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
                  <span className="">P</span>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__fadeInDownBig"
                  animateOut="bounceOutLeft"
                  delay={80}
                >
                  <span className="">O</span>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__fadeInUpBig"
                  animateOut="bounceOutLeft"
                  delay={100}
                >
                  <span className="">R</span>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__fadeInDownBig"
                  animateOut="bounceOutLeft"
                  delay={120}
                >
                  <span className="">T</span>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__fadeInUpBig"
                  animateOut="bounceOutLeft"
                  delay={140}
                >
                  <span className="">F</span>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__fadeInDownBig"
                  animateOut="bounceOutLeft"
                  duration={1}
                >
                  {" "}
                  <span className="">O</span>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__fadeInUpBig"
                  animateOut="bounceOutLeft"
                  duration={1}
                >
                  {" "}
                  <span className="">L</span>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__fadeInDownBig"
                  animateOut="bounceOutLeft"
                  duration={1}
                >
                  {" "}
                  <span className="">I</span>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__fadeInUpBig"
                  animateOut="bounceOutLeft"
                  duration={1}
                >
                  {" "}
                  <span className="">O</span>
                </ScrollAnimation>
              </span>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="w-75 ">
                <span className="cad-para">
                  Esse qui eiusmod enim voluptate enim deserunt ipsum sit. Do
                  Lorem enim dolore esse aliqua proident amet tempor sint
                  occaecat deserunt ullamco. Et aute deserunt amet cupidatat
                  labore mollit nisi ipsum do deserunt dolore elit ea deserunt.
                  Sunt cillum pariatur dolor et dolore irure eu laboris fugiat.
                  Do commodo pariatur minim excepteur. Sint veniam veniam ut ex
                  magna fugiat sit deserunt dolore occaecat Lorem exercitation
                  aliquip. Tempor et eiusmod quis est dolor aliqua consectetur
                  fugiat.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
