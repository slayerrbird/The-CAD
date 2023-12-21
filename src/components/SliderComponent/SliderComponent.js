// import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import arrayoft from "../../content-1.json"
import "./SliderComponent.css"

export const SliderComponent = () => {
  return (
    <Carousel
      infiniteLoop
      autoPlay
      autoFocus
      showArrows={true}
      showThumbs={false}
      swipeable={true}
    >
      {arrayoft.ourstory.map((story, index) => (
        <>
          <div className="row">
            <div className="col-md-6 padding-left">
              <div className="title">
                <span>'{story.title}'</span>
              </div>
              <div className="content-1 m-5 d-block">{story.content}</div>
            </div>
            <div className="col-md-6">
              <img
                src={story.imgURL}
                alt={`Image ${index + 1}`}
                className="slider-img"
              />
            </div>
          </div>
        </>
      ))}
    </Carousel>
  )
}
