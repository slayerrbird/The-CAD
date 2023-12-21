import { useEffect } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Plyr from "plyr"
import "plyr/dist/plyr.css"
import Slider from "react-slick"
const VideoSlider = () => {
  useEffect(() => {
    // Plyr initialization
    const playerSettings = {
      controls: ["play-large"],
      fullscreen: { enabled: false },
      resetOnEnd: true,
      hideControls: true,
      clickToPlay: true,
      keyboard: false
    }

    // Create Plyr instances for each video
    const players = Array.from(document.querySelectorAll(".js-player")).map(
      element => new Plyr(element, playerSettings)
    )

    // Handle play event to pause other players
    players.forEach(instance => {
      instance.on("play", () => {
        players.forEach(instance1 => {
          if (instance !== instance1) {
            instance1.pause()
          }
        })
      })
    })
  }, [])

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <Slider {...carouselSettings} arrows dots touchMove>
      <div>
        <video
          className="js-player"
          crossOrigin="anonymous"
          playsInline
          poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
        >
          <source
            src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div>
        <video
          className="js-player"
          crossOrigin="anonymous"
          playsInline
          poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
        >
          <source
            src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      {/* Repeat the above video section for each item in the carousel */}
    </Slider>
  )
}

export default VideoSlider
