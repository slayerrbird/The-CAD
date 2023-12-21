import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import './Contactpage.css'
import Footer from '../../components/Footer/Footer';
function Contactpage() {
  const isActive = 0;

  return (
    <>
      <div>
      <Navbar isActive={isActive} />
      </div>
      <div className='contact-head'>
        <h1>CONTACT US</h1>
        <div className='row'>
          <div className='col'>
          <img src="./Images/contact-form.png" alt="" />
          </div>
        </div>
      </div>
      <div className='upper-map'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.70013549883!2d72.86030557597545!3d19.25189614642547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b1657804c347%3A0x400dae8d4cef1efc!2sThe%20CAD%20Co.!5e0!3m2!1sen!2sin!4v1701775491879!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: '0' }}
          className='map'
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
      <Footer />
    </>
  )
}

export default Contactpage