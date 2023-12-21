import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Our_catalog.css'
import RevealEffect from '../../components/RevealEffect/RevealEffect';
import 'animate.css';
const Our_catalog = () => {
  const isActive = 0;

  return (
    <>
      <div>
        <div>
          <Navbar isActive={isActive} />
        </div>
        <div className='zoomOutDown'>
          <RevealEffect/>

          <span className='wow animate__rollIn heading '>PRODUCT CATALOG</span>
        </div>
        <div className="row mb-5">
          <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
            <div className='catalog-para '>
              <p>Labore aute incididunt nulla ex et esse do voluptate irure labore pariatur fugiat. Sit ullamco esse fugiat do. Proident culpa tempor ut anim occaecat ullamco tempor dolor occaecat laborum.</p>

              <p>Lorem minim quis pariatur dolor nisi ad labore qui. Aute aliqua labore occaecat ullamco ipsum aliqua nostrud amet voluptate culpa nisi. Occaecat labore qui ea magna. Nisi adipisicing aliqua sint elit et labore irure.</p>
            </div>
          </div>
          <div className="col-md-6 img-fluid">
            <img className='mw-100' src="./Images/Screenshot 2023-12-13 170220.png" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <p className='catalog-form-para'>
              <div className='text-center'>
                Minim tempor sint mollit ea dolore aute incididunt minim. Culpa enim et id excepteur exercitation reprehenderit tempor sunt fugiat consequat cillum eu anim. Irure ex.
              </div>
            </p>
          </div>

          <div className="col-md-6">
            <div className='form subject'>
              <img src="./Images/Screenshot 2023-12-13 174533.png" alt="" />
            </div>
          </div>
          <div className="row d-flex justify-content-center ">
            <p className='thank-you-para'><span className='font-weight-bold'> Thank you for considering our services. </span>We value your interest and are committed to delivering the finest jewelry designs to inspire and captivate you.</p>
          </div>
          <RevealEffect/>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Our_catalog