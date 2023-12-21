import { useEffect, useState } from "react";
import "./CAD3D.css";
import ScrollAnimation from "react-animate-on-scroll";
import writtenContent from "../../content-1.json";
import ImageComponent from "../../components/ImageComponent/ImageComponent";
// import Particlecomponent from '../../components/Particle/Particlecomponent';
import { SliderComponent } from "../../components/SliderComponent/SliderComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faSliders,
  faClock,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import VideoSlider from "../../components/VideoSlider/VideoSlider";
import RevealEffect from "../../components/RevealEffect/RevealEffect";
// import TjsEffect from '../../components/TjsEffect/TjsEffect';
// import ParticleEffect from "../../components/ParticleEffect/ParticleEffect"
function CAD3D() {
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [extractedData, setExtractedData] = useState([]);
  // setImage(writtenContent.images)
  useEffect(() => {
    const extractedImagesData = writtenContent.images.map((imageObj) => {
      const imageUrl = Object.values(imageObj)[0];
      const caption = Object.values(imageObj)[1];

      // Check if imageUrl and caption are strings before returning the object
      const validImageUrl = imageUrl || "";
      const validCaption = caption || "";
      // console.log(validCaption);

      return {
        imageUrl: validImageUrl,
        caption: validCaption,
      };
    });

    setExtractedData(extractedImagesData);
    setImages(extractedImagesData);

    const interval = setInterval(() => {
      setCurrentParagraphIndex((prevIndex) =>
        prevIndex === writtenContent.content.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  const con = writtenContent.content;

  return (
    <div id="3Dcad">
      {/* <div className="tjs">
            <TjsEffect/>
            </div> */}

      <div className="container">
        <div className="row">
          <div className="">
            <span className="heading d-flex justify-content-center">
              <ScrollAnimation
                animateIn="animate__zoomInUp"
                animateOut="bounceOutLeft"
              >
                <span className="">3</span>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="animate__zoomInUp"
                animateOut="bounceOutLeft"
                delay={200}

              >
                <span className="">D</span>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="animate__zoomInUp"
                animateOut="bounceOutLeft"
                delay={400}
              >
                <span className="ms-3">CAD</span>
              </ScrollAnimation>
            </span>
          </div>
        </div>
        <div className="row">
          <span className="cad-para">
            {/* {con.map((para: any, index: number) => ( */}
            <p>
              <span>
                <span>
                  <ScrollAnimation
                    animateIn="bounceInRight"
                    animateOut="bounceOutLeft"
                    delay={50}
                    duration={1}
                  >
                    Occaecat voluptate dolor nisi qui sit mollit tempor esse
                    velit voluptate. Irure laborum nostrud aliquip ut mollit
                    incididunt est ipsum aliquip.{" "}
                  </ScrollAnimation>{" "}
                </span>
                <span>
                  <ScrollAnimation
                    animateIn="bounceInRight"
                    animateOut="bounceOutLeft"
                    delay={100}
                    duration={1}
                  >
                    Do id elit amet aute nulla. Quis laboris nulla sint dolore
                    sunt sint proident tempor et nostrud laboris incididunt.
                    Commodo aute ea reprehenderit enim ullamco exercitation
                    proident reprehenderit amet aliqua sunt dolor esse.
                  </ScrollAnimation>{" "}
                </span>
                <span>
                  <ScrollAnimation
                    animateIn="bounceInRight"
                    animateOut="bounceOutLeft"
                    delay={200}
                    duration={1}
                  >
                    Incididunt ex nulla laboris nisi mollit consectetur. Fugiat
                    nostrud ullamco fugiat ex veniam voluptate exercitation. Ut
                    velit laborum incididunt est eiusmod proident nostrud duis
                    mollit consequat amet.
                  </ScrollAnimation>
                </span>
              </span>
              {/* {index === currentParagraphIndex ? (
                  <span className='fade-in'>{para.para}</span>
                ) : (
                  <span className='fade-out'>{para.para}</span>
                )} */}
            </p>
            {/* ))} */}
          </span>
        </div>
      </div>

      <div className="row head-img">
        {images.map(({ imageUrl, caption }, index) => (
          <>
            <div className="col images-1">
              <ImageComponent
                key={index}
                imageURL={imageUrl}
                width="19rem"
                height="19rem"
                className="img-2"
                hoverText={caption}
              />
            </div>
          </>
        ))}
      </div>
      <div className="subject">
        <div className="row carausel-section ">
          <RevealEffect />
          <div className="our-story">Our story about CAD services</div>
          <div className="carasoul">
            <SliderComponent />
          </div>
        </div>
      </div>
      <div className="row useful">
        <div className="row">
          <div className="our-story">Where are 3D CAD useful ?</div>
        </div>
        <div className="col-md-6  cad-para-1">
          <ScrollAnimation animateIn="animate__fadeInLeftBig">
            <span>Design exploration and visualization</span>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__fadeInLeftBig" delay={100}>
            {" "}
            <span>Precise and detailed design</span>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__fadeInLeftBig" delay={120}>
            {" "}
            <span>Time and cost efficiency</span>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__fadeInLeftBig" delay={140}>
            {" "}
            <span>Customization and personalization</span>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__fadeInLeftBig" delay={160}>
            {" "}
            <span>Improved communication and collaboration</span>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__fadeInLeftBig" delay={180}>
            <span>Archiving and replication</span>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__fadeInLeftBig" delay={200}>
            {" "}
            <span>Marketing and sales</span>
          </ScrollAnimation>
        </div>
        <div className="col-md-6 icons-head">
          <ScrollAnimation animateIn="animate__zoomIn">
            <div className="row parent-icon d-flex justify-content-center">
              <div className="col-md-4 icons d-flex align-items-center justify-content-center">
                <FontAwesomeIcon className="custom-icon" icon={faHandshake} />
              </div>
              <div className="col-md-4  icons d-flex align-items-center justify-content-center">
                <FontAwesomeIcon className="custom-icon" icon={faSliders} />{" "}
              </div>
              <div className="col-md-4  icons d-flex align-items-center justify-content-center">
                {" "}
                <FontAwesomeIcon className="custom-icon" icon={faClock} />
              </div>
            </div>
            <div className="row parent-icon d-flex justify-content-center">
              <div className="col-md-4  icons d-flex align-items-center justify-content-center">
                <FontAwesomeIcon className="custom-icon" icon={faHandshake} />
              </div>
              <div className="col-md-4  icons d-flex align-items-center justify-content-center">
                <FontAwesomeIcon className="custom-icon" icon={faSliders} />{" "}
              </div>
              <div className="col-md-4  icons d-flex align-items-center justify-content-center">
                {" "}
                <FontAwesomeIcon className="custom-icon" icon={faClock} />
              </div>
            </div>
            <div className="row parent-icon d-flex justify-content-center ">
              <div className="col-md-4  icons d-flex align-items-center justify-content-center">
                <FontAwesomeIcon className="custom-icon" icon={faHandshake} />
              </div>
              <div className="col-md-4  icons d-flex align-items-center justify-content-center">
                <FontAwesomeIcon className="custom-icon" icon={faSliders} />{" "}
              </div>
              <div className="col-md-4  icons d-flex align-items-center justify-content-center">
                {" "}
                <FontAwesomeIcon className="custom-icon" icon={faClock} />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <div className="row mb-5">
        <div className="our-story">What do we deliver ?</div>
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <div className="col d-flex flex-column lh-lg deliver-section">
              <span> Basic 4 view images</span>
              <span> Measurment Images</span>
              <span> Metal details</span>
              <span> Diamond details</span>
              <span> 3DM file</span>
              <span> STL file</span>
              <span> PDF - Product delivery work sheet</span>
            </div>
          </div>
          <div className="our-story m-4">
            ALL OF THE ABOVE IN JUST 24 HRS* DELIVERY!
          </div>
          <div className="order-button">
            <button>
              {" "}
              Click here to order!{" "}
              <FontAwesomeIcon className="px-1" icon={faArrowRight} />
            </button>
          </div>
        </div>
        <div className="gallery">
          <div className="our-story mb-5">OUR CAD GALLERY</div>
          <div>
            <VideoSlider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CAD3D;
