import React from "react"

// const handleHover = () => {
//   console.log("here");

//   return <p className='cad-para'> hello</p>
// };
const ImageComponent = ({ imageURL, width, height, className, hoverText }) => {
  return (
    <div className="image-wrapper">
      <img
        className={`${className}`}
        src={imageURL}
        alt="Image"
        style={{ width, height }}
      />
      <div className="content">
        <p>{hoverText}</p>
      </div>
    </div>
  )
}
export default ImageComponent
