import React, { useEffect } from "react";
import "./Timeline.css";
import { throttle } from "lodash";
import ScrollAnimation from "react-animate-on-scroll";

const handleScroll = () => {
  requestAnimationFrame(() => {
    var timelineContainer = document.getElementById("timeline-1");

    if (timelineContainer) {
      var itemElements =
        timelineContainer.getElementsByClassName("timeline-item");
      var activeClass = "timeline-item--active";

      if (itemElements.length > 0) {
        itemElements[0].classList.add(activeClass);

        var initialImg = itemElements[0].querySelector(".timeline__img");
        if (initialImg) {
          timelineContainer.style.backgroundImage =
            "url(" + (initialImg.getAttribute("src") ?? "") + ")";
        }

        var itemLength = itemElements.length;

        var pos = window.scrollY;

        Array.from(itemElements).forEach(function (item, i) {
          var imgElement = item.querySelector(".timeline__img");
          var min = item.getBoundingClientRect().top + window.scrollY;
          var max = min + item.clientHeight;

          if (imgElement) {
            // Check if the image is loaded
            if (imgElement.complete) {
              handleImageLoad(item, imgElement);
            } else {
              // If the image is not loaded, wait for the 'load' event
              imgElement.addEventListener("load", function () {
                if (imgElement) {
                  handleImageLoad(item, imgElement);
                }
              });
            }
          }

          function handleImageLoad(item, imgElement) {
            if (i === itemLength - 2 && pos > min + item.clientHeight / 2) {
              // console.log("in the first");

              Array.from(itemElements).forEach(function (el) {
                return el.classList.remove(activeClass);
              });

              var lastImg =
                itemElements[itemLength - 1].querySelector(".timeline__img");
              var lastImgSrc = lastImg?.getAttribute("src") ?? "";

              timelineContainer.style.backgroundImage =
                "url(" + lastImgSrc + ")";
              itemElements[itemLength - 1].classList.add(activeClass);
            } else if (pos <= max && pos >= min) {
              // console.log("in the second");

              var currentImg = imgElement.getAttribute("src") ?? "";
              timelineContainer.style.backgroundImage =
                "url(" + currentImg + ")";

              Array.from(itemElements).forEach(function (el) {
                return el.classList.remove(activeClass);
              });
              item.classList.add(activeClass);
            }
          }
        });
      }
    }
  });
};

const Timeline = () => {
  const throttledHandleScroll = throttle(handleScroll);
  useEffect(() => {
    throttledHandleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      console.log("Timeline");
    };
  }, []);
  return (
    <div>
      <div className="timeline-container" id="timeline-1">
        <div className="timeline-header">
          <h2 className="timeline-header__title">THE CAD Co.</h2>
          <h3 className="timeline-header__subtitle">
            Treasurer of the Jewel House
          </h3>
        </div>
        <div className="timeline">
          <div className="timeline-item" data-text=" Elit labore laborum veniam laboris enim duis sit pariatur
                consectetur enim exercitation. Aliquip ex est ad commodo aute
                nulla nostrud reprehenderit fugiat reprehenderit consequat
                incididunt veniam. Reprehenderit aliqua officia occaecat esse
                cupidatat laboris ullamco. Voluptate dolore cillum laboris
                excepteur."
          >
            <div className="timeline__content">
              <ScrollAnimation
                animateIn="animate__backInDown"
                animateOut="bounceOutLeft">
                <img
                  className="timeline__img"
                  src="./Images/CAD-9.jpg"
                />
              </ScrollAnimation>
              <a href="#3Dcad">
                {" "}
                <ScrollAnimation animateIn='flipInX'animateOut='flipOutX'>  <h2 className="timeline__content-title">3D CAD</h2></ScrollAnimation>
              </a>
              <p className="timeline__content-desc"></p>
            </div>
          </div>
          <div className="timeline-item d-block"  data-text=" Elit labore laborum veniam laboris enim duis sit pariatur
                consectetur enim exercitation. Aliquip ex est ad commodo aute
                nulla nostrud reprehenderit fugiat reprehenderit consequat
                incididunt veniam. Reprehenderit aliqua officia occaecat esse
                cupidatat laboris ullamco. Voluptate dolore cillum laboris
                excepteur."
          >
            <div className="timeline__content">
            <ScrollAnimation
                animateIn="animate__backInDown"
                animateOut="bounceOutLeft">
              <img
                className="timeline__img"
                src="./Images/vertical-shot-beautiful-diamond-ring-white-surface.jpg"
              />
              </ScrollAnimation>
              <a href="#jewel-render">
              <ScrollAnimation animateIn='flipInX'animateOut='flipOutX'> <h2 className="timeline__content-title">Renders</h2></ScrollAnimation>
              </a>
              <p className="timeline__content-desc">
              </p>
            </div>
          </div>
          <div className="timeline-item"  data-text=" Elit labore laborum veniam laboris enim duis sit pariatur
                consectetur enim exercitation. Aliquip ex est ad commodo aute
                nulla nostrud reprehenderit fugiat reprehenderit consequat
                incididunt veniam. Reprehenderit aliqua officia occaecat esse
                cupidatat laboris ullamco. Voluptate dolore cillum laboris
                excepteur."
          >
            <div className="timeline__content">
            <ScrollAnimation
                animateIn="animate__backInDown"
                animateOut="bounceOutLeft">
              <img
                className="timeline__img"
                src="./Images/CAD-1.jpg"
                alt="no image found"
              />
              </ScrollAnimation>
              <a href="">
                {" "}
                <ScrollAnimation animateIn='flipInX'animateOut='flipOutX'>  <h2 className="timeline__content-title">
                  Website Ready Templates
                </h2></ScrollAnimation>
              </a>
              <p className="timeline__content-desc">
              </p>
            </div>
          </div>
          <div className="timeline-item" data-text=" Elit labore laborum veniam laboris enim duis sit pariatur
                consectetur enim exercitation. Aliquip ex est ad commodo aute
                nulla nostrud reprehenderit fugiat reprehenderit consequat
                incididunt veniam. Reprehenderit aliqua officia occaecat esse
                cupidatat laboris ullamco. Voluptate dolore cillum laboris
                excepteur.">
            <div className="timeline__content">
            <ScrollAnimation
                animateIn="animate__backInDown"
                animateOut="bounceOutLeft">
              <img className="timeline__img" src="./Images/CAD-12.jpg" alt="" />
              </ScrollAnimation>
              <ScrollAnimation animateIn='flipInX'animateOut='flipOutX'> <h2 className="timeline__content-title">Ring Configurator</h2></ScrollAnimation>
              <p className="timeline__content-desc">
              </p>
            </div>
          </div>
          <div className="timeline-item" data-text=" Elit labore laborum veniam laboris enim duis sit pariatur
                consectetur enim exercitation. Aliquip ex est ad commodo aute
                nulla nostrud reprehenderit fugiat reprehenderit consequat
                incididunt veniam. Reprehenderit aliqua officia occaecat esse
                cupidatat laboris ullamco. Voluptate dolore cillum laboris
                excepteur.">
            <div className="timeline__content">
            <ScrollAnimation
                animateIn="animate__backInDown"
                animateOut="bounceOutLeft">
              <img className="timeline__img" src="./Images/CAD-2.jpg" alt="" />
              </ScrollAnimation>
              <ScrollAnimation animateIn='flipInX'animateOut='flipOutX'>  <h2 className="timeline__content-title">Product Catalogs</h2> </ScrollAnimation>
              <p className="timeline__content-desc">
              </p>
            </div>
          </div>
          <div className="timeline-item" data-text=" Elit labore laborum veniam laboris enim duis sit pariatur
                consectetur enim exercitation. Aliquip ex est ad commodo aute
                nulla nostrud reprehenderit fugiat reprehenderit consequat
                incididunt veniam. Reprehenderit aliqua officia occaecat esse
                cupidatat laboris ullamco. Voluptate dolore cillum laboris
                excepteur.">
            <div className="timeline__content">
            <ScrollAnimation
                animateIn="animate__backInDown"
                animateOut="bounceOutLeft">
              <img className="timeline__img" src="./Images/CAD-13.jpg" alt="" />
              </ScrollAnimation>
              <ScrollAnimation animateIn='flipInX'animateOut='flipOutX'>  <h2 className="timeline__content-title">Diamond Sourcing</h2> </ScrollAnimation>
              <p className="timeline__content-desc">
              </p>
            </div>
          </div>
          <div className="timeline-item" data-text=" Elit labore laborum veniam laboris enim duis sit pariatur
                consectetur enim exercitation. Aliquip ex est ad commodo aute
                nulla nostrud reprehenderit fugiat reprehenderit consequat
                incididunt veniam. Reprehenderit aliqua officia occaecat esse
                cupidatat laboris ullamco. Voluptate dolore cillum laboris
                excepteur.">
            <div className="timeline__content">
            <ScrollAnimation
                animateIn="animate__backInDown"
                animateOut="bounceOutLeft">
              <img className="timeline__img" src="./Images/CAD-11.jpg" alt="" />
              </ScrollAnimation>
              <ScrollAnimation animateIn='flipInX'animateOut='flipOutX'>  <h2 className="timeline__content-title">Manufacturing</h2> </ScrollAnimation>
              <p className="timeline__content-desc">
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
