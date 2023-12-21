import React from 'react'
import { Route, Routes} from 'react-router-dom';
import Home from "../Screens/Homepage/Homepage";
import Menu from "../Screens/Menu/Menupage";
import Contact from "../Screens/Contact/Contactpage";
import Career from "../Screens/Career/Career";
import AboutUs from "../Screens/About_us/About_us";
import Blogs from "../Screens/Blogs/Blogs";
import OurCatalog from "../Screens/Our_catalog/Our_catalog";
import Portfolio from "../Screens/Portfolio/Portfolio";
import Services from "../Screens/Services/Services";
import FAQs from "../Screens/FAQs/FAQs";
import AboutFounder from '../Screens/AboutFounder/AboutFounder'
function Routing() {
  return (
    <>
    <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/our-catalog" element={<OurCatalog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/about-founder" element={<AboutFounder />} />
        </Routes>
        </>
  )
}

export default Routing