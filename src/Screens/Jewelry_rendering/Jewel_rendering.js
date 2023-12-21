import { useEffect, useState } from "react";
import writtenContent from "../../content-1.json";
import ImageComponent from "../../components/ImageComponent/ImageComponent";
import "./Jewel_rendering.css";
const Jewel_rendering = () => {
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [extractedData, setExtractedData] = useState([]);
  const con = writtenContent.content;
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
  return (
    <div id="jewel-render">
      <div className="container">
        <div className="row">
          <div className="">
            <span className="heading">JEWELRY RENDERING</span>
          </div>
        </div>
        <div className="row">
          <span className="cad-para">
            {/* {con.map((para: any, index: number) => ( */}
            <p>
              <span>
                Labore minim excepteur aliquip exercitation nisi fugiat irure ex
                cillum. Et voluptate ut duis excepteur sint amet est mollit
                culpa pariatur enim elit. Exercitation cupidatat consectetur do
                fugiat ullamco mollit ullamco occaecat ad consequat
                laborum.Velit do proident laborum amet minim qui elit fugiat
                dolore proident. Ullamco est Lorem ea ullamco elit fugiat nisi
                aute dolor veniam irure nisi. Consectetur pariatur enim commodo
                culpa consectetur incididunt irure id. Irure aute esse
                exercitation esse occaecat veniam sit. Excepteur anim ut irure
                quis. Nulla consectetur veniam aliquip magna cillum fugiat
                cillum elit qui officia ullamco deserunt nulla mollit.
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
            {/* {console.log(imageUrl, "URl and caption", caption)} */}

            <div className="col images-1">
              <ImageComponent
                key={index}
                imageURL={imageUrl}
                width="19rem"
                height="20rem"
                className="img-2"
                hoverText={caption}
              />
            </div>
          </>
        ))}
      </div>
      <div className="row useful">
        <div className="row">
          <div className="our-story mb-0">
            What services do we offer in rendering ?
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 d-flex flex-column justify-content-center align-item-center">
              <div className="our-story  d-flex align-self-center text-start my-1">
                STILL IMAGES:
              </div>
              <div className="still-images-para d-flex align-self-center">
                Et irure elit ea sunt dolore aliquip proident elit tempor tempor
                magna elit duis consequat. Sunt minim aute et exercitation irure
                ad Lorem reprehenderit duis nostrud sint tempor dolore. Anim
                elit non id aliquip magna in proident exercitation quis.Ea ipsum
                aute sint eiusmod ea officia quis proident sit enim et dolore.
                Nulla et in reprehenderit ut in aliqua tempor.
              </div>
            </div>
            <div className="col-md-8 mb-5 p-4">
              <div className="still-images">
                <img
                  className="still-image"
                  src="./Images/render-1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex justify-content-center flex-column align-content-center">
              <h1>INTERACTIVE ANIMATIONS</h1>
              <span className="video-animation-para d-flex justify-content-center align-self-center">
                Et irure elit ea sunt dolore aliquip proident elit tempor tempor
                magna elit duis consequat. Sunt minim aute et exercitation irure
                ad Lorem reprehenderit duis nostrd sint tempor dolore. Anim elit
                non id aliquip magna in
              </span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-center flex-column align-content-center flex-wrap">
              <h1>VIDEO ANIMATION</h1>
              <div className="">
                <span className="video-animation-para">
                  Et irure elit ea sunt dolore aliquip proident elit tempor
                  tempor magna elit duis consequat. Sunt minim aute et
                  exercitation irure ad Lorem reprehenderit duis nostrd sint
                  tempor dolore. Anim elit non id aliquip magna in Exercitation
                  do ipsum quis elit consequat officia veniam culpa ea duis ex
                  nulla minim.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row d-flex justify-content-center align-self-center">
            <div className="w-50 align-item-center align-self-center">
              <h1>CONCEPT ANIMATIONS</h1>
                <div className="">
                  Et irure elit ea sunt dolore aliquip proident elit tempor
                  tempor magna elit duis consequat. Sunt minim aute et
                  exercitation irure ad Lorem reprehenderit duis nostrud sint
                  tempor dolore. Anim elit non id aliquip magna in proident
                  exercitation quis.Ea ipsum aute sint eiusmod ea officia quis
                  proident sit enim et dolore. Nulla et in reprehenderit ut in
                  aliqua tempor.
              </div>
            </div>
          </div>
          <div className="row"></div>
        </div>
        <div className="row useful">
          <div className="our-story mb-3">
            <b>Why choose us for your Renders?</b>
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
      </div>
    </div>
  );
};

export default Jewel_rendering;
