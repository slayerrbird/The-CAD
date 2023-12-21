import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight,faPhone,faEnvelope,faLocationDot } from '@fortawesome/free-solid-svg-icons'; // Import the specific icons you need
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
      <div className='container-fluid footer-section'>
        <div className='row'>
          <div className='col-sm'>
            <div className='row'>
              <div className='logo-footer'>
                <img className='img-logo' src="https://thecadco.com/assets/site/images/logo-er33.png" title="THE CAD CO" alt="Logo" />
                <p>Amet aliquip proident culpa voluptate in ullamco ex nostrud do veniam. Velit minim commodo nisi anim occaecat dolor ipsum ad excepteur. Amet officia ea magna amet anim mollit.Excepteur eiusmod ad Lorem voluptate aliquip dolore magna ullamco minim esse qui ad. Ex quis velit nostrud in sunt quis nulla cillum consectetur reprehenderit eu. Incididunt et laboris in elit qui fugiat.</p>
              </div>
            </div>
          </div>
          <div className='col-sm'>
            <div className='row footer-head'>
              <h2>QUICK LINKS</h2>
            </div>
            <div className='row responsive'>
              <div className='col d-flex flex-column links'>
                <span className='about-link'>About <FontAwesomeIcon className='' icon={faArrowRight} /></span>
                <span>Home</span>
                <span>Portfolio</span>
                <span>Blogs</span>
                <span>Career</span>

              </div>
              <div className='col d-flex flex-column links-1'>

                <span className='about-link'>Newsletter <FontAwesomeIcon className='' icon={faArrowRight} /></span>
                <span>Contact Us</span>
                <span>About the Founder</span>

              </div>

            </div>
          </div>
          <div className='col-sm'>
            <div className='row footer-head'>
              <h2>CONTACT US</h2>
            </div>
            <div className="row justify-content-center">
              <div className='d-flex w-50 align-item-start flex-column '>
                <span className='d-flex justify-content-start align-items-center mb-4'><FontAwesomeIcon className='call-icon' icon={faPhone} /> <a href="#"><span className='p-number'>(123) 456 7890</span></a></span>
                <span className='d-flex justify-content-start align-items-center mb-4'><FontAwesomeIcon className='call-icon' icon={faEnvelope} /> <a href="#"><span className='p-number'>infor@thecad.com</span></a></span>
                <span className='d-flex justify-content-start align-items-center mb-4'><FontAwesomeIcon className='call-icon' icon={faLocationDot} /> <a href="#"><span className='p-number text-start'> Orchid Plaza, Maratha Colony, Dahisar East</span></a></span>
                </div>
            </div>
          </div>
          <hr />
        </div>
        <div className="row">
          <div className='col-md-6 d-flex copyright'>COPYRIGHT @2023 THE CAD Co.</div>
          <div className='col-md-6 my-2'>
             <svg xmlns="http://www.w3.org/2000/svg" className='' height="18" width="18" viewBox="0 0 448 512"><path fill="#15446d" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" /></svg> <span className='icon-title'>Facebook</span>

              <svg xmlns="http://www.w3.org/2000/svg" className='' height="18" width="18" viewBox="0 0 448 512"><path fill="#15446d" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg> <span className="icon-title"> Instagram </span>
              <svg xmlns="http://www.w3.org/2000/svg" className='' height="18" width="18" viewBox="0 0 448 512"><path fill="#15446d" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /></svg> <span className="icon-title">Linkedin</span>

              <svg xmlns="http://www.w3.org/2000/svg" className='' height="18" width="18" viewBox="0 0 448 512"><path fill="#15446d" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" /></svg><span className="icon-title">Twitter</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer