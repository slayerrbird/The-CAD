import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faAddressCard } from "@fortawesome/free-solid-svg-icons" // Import the specific icons you need
import "./Navbar.css"
import { Link } from "react-router-dom"
// import "../../routes/  route"
// import Homepage from '../../Screens/Homepage/Homepage';

function Navbar({ isActive }) {
  return (
    <nav className={isActive ? " navbar " : "navbar"}>
      <div className={isActive ? "d-none" : "menu-icon row"}>
        <Link to={"/menu"}>
          <FontAwesomeIcon className="menu" icon={faBars} />
        </Link>
      </div>
      <div
        className={isActive ? "logo col d-flex align-items-start" : "logo col"}
      >
        <Link to="/">
          <div>
            <img
              className={isActive ? "logo-img menu-margin" : "logo-img"}
              src="https://thecadco.com/assets/site/images/logo-er33.png"
              title="THE CAD CO"
              alt="Logo"
            />
          </div>
        </Link>
      </div>
      <div className="contact-icon">
        <Link to="/contact">
          <FontAwesomeIcon className="contact" icon={faAddressCard} />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
