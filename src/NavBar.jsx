import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {
  faCog,
  faGraduationCap,
  faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <nav className="nav flex-column">
      <NavLink className="nav-link p-3" to="/">
        <FontAwesomeIcon icon={faBoxOpen} className="icon" />
        Dashboard
      </NavLink>
      <NavLink className="nav-link p-3" to="/screentwo">
        <FontAwesomeIcon icon={faGraduationCap} className="icon" />
        Lorem
      </NavLink>
      <NavLink className="nav-link p-3" to="/screentwo">
        <FontAwesomeIcon icon={faCog} className="icon" />
        Ispum
      </NavLink>
    </nav>
  );
}
export default NavBar;
