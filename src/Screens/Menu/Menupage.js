// import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
// import jewel from './Images/jewels-sparkle-golden-wedding-rings-lying-leather.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faXmark } from '@fortawesome/free-solid-svg-icons'
// import {faSquareFacebook} from '@fortawesome/free-solid-svg-icons'
import './Menupage.css'
import { Link } from 'react-router-dom';
function Menupage() {
  const isActive = 1;

  return (
    <>
      <div className='container1'>
        <div className='row'>
          <div className='col-5'>
              <img className='jewel' src="./Images/jewels-sparkle-golden-wedding-rings-lying-leather.jpg" alt="" />
          </div>
          <div className='col-7'>
            <div>
              <Navbar isActive={isActive} />
            </div>
            <div className='row'>
              <div className='cancel d-flex justify-content-end'>
                <FontAwesomeIcon className='cancel-icon' onClick={() => { window.history.back() }} icon={faXmark} />
              </div>
              <div className='row'>
                <div className='menu-head container'>
                  <span className='head'>With every click, we take you to a different world!</span>
                </div>
              </div>

                <div className='menu-link col d-flex flex-column'>
                  <Link to='/'><span className='color'>HOME</span></Link> 
                  <Link to='/about-us'><span className='color'>ABOUT US</span></Link>
                  <Link to='/services'><span className='color'>SERVICES</span></Link>
                  <Link to='/portfolio'><span className='color'>PORTFOLIO</span></Link>
                  <Link to='/FAQs'><span className='color'>FAQ'S</span></Link>
                  <Link to='/blogs'><span className='color'>BLOGS</span></Link>
                  <Link to='/about-founder'> <span className='color'>ABOUT THE FOUNDER</span></Link>
                  <Link to='/career'><span className='color'>CAREER</span></Link>
                  <Link to='/our-catalog'><span className='color'>OUR CATALOG</span></Link>
                </div>
                <div className='row padding-left'>
                  <span className='d-flex social'> <svg xmlns="http://www.w3.org/2000/svg" className='icon' height="32" width="28" viewBox="0 0 448 512"><path fill="#15446d" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className='icon' height="32" width="28" viewBox="0 0 448 512"><path fill="#15446d" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg> 
                  <svg xmlns="http://www.w3.org/2000/svg" className='icon' height="32" width="28" viewBox="0 0 448 512"><path fill="#15446d" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" className='icon' height="32" width="28" viewBox="0 0 448 512"><path fill="#15446d" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/></svg>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" className='icon' height="32" width="28" viewBox="0 0 448 512"><path fill="#15446d" d="M155.3 318.4c17.2 0 31.2-6.1 31.2-25.4c0-19.7-11.7-27.4-30.3-27.5h-46v52.9h45.1zm-5.4-129.6H110.3v44.8H153c15.1 0 25.8-6.6 25.8-22.9c0-17.7-13.7-21.9-28.9-21.9zm129.5 74.8h62.2c-1.7-18.5-11.3-29.7-30.5-29.7c-18.3 0-30.5 11.4-31.7 29.7zM384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zM349.5 185H271.7V166.1h77.8V185zM193.7 243.7c23.6 6.7 35 27.5 35 51.6c0 39-32.7 55.7-67.6 55.9H68v-192h90.5c32.9 0 61.4 9.3 61.4 47.5c0 19.3-9 28.8-26.2 37zm118.7-38.6c43.5 0 67.6 34.3 67.6 75.4c0 1.6-.1 3.3-.2 5c0 .8-.1 1.5-.1 2.2H279.5c0 22.2 11.7 35.3 34.1 35.3c11.6 0 26.5-6.2 30.2-18.1h33.7c-10.4 31.9-31.9 46.8-65.1 46.8c-43.8 0-71.1-29.7-71.1-73c0-41.8 28.7-73.6 71.1-73.6z"/></svg>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" className='icon' height="16" width="32" viewBox="0 0 384 512"><path fill="#15446d" d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"/></svg>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" className='icon' height="32" width="32" viewBox="0 0 512 512"><path className='icon-m' fill="#15446d" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                  </span>
                </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Menupage