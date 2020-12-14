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
      <NavLink
        className="nav-link p-3"
        to="/"
        exact
        activeClassName="menu_active"
      >
        <FontAwesomeIcon icon={faBoxOpen} className="icon" />
        Dashboard
      </NavLink>
      <NavLink
        exact
        className="nav-link p-3"
        to="/screentwo"
        activeClassName="menu_active"
      >
        <FontAwesomeIcon icon={faGraduationCap} className="icon" />
        Lorem
      </NavLink>
      <NavLink
        className="nav-link p-3"
        exact
        to="/asd"
        activeClassName="menu_active"
      >
        <FontAwesomeIcon icon={faCog} className="icon" />
        Ispum
      </NavLink>
    </nav>
  );
}
export default NavBar;
