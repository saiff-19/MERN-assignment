import React from "react";
import "../styles/Navbar.css";
import { FaBars } from "react-icons/fa6";
import { FiGlobe } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/Logo.svg";
import houseimg from "../assets/house.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Airbnb Logo" className="logo" />
      </div>

      <div className="nav-center">
        <div className="search-box">
          <img src={houseimg} alt="houseImage" className="houseimg" />
          <span className="search-option one">Anywhere</span>
          <span className="divider" />
          <span className="search-option">Any week</span>
          <span className="divider" />
          <span className="search-option">Add guests</span>
          <div className="search-icon-wrapper">
            <FaSearch className="search-icon" />
          </div>
        </div>
      </div>

      <div className="nav-right">
        <span className="host-link">Become a host</span>
        <div className="icon-button">
          <FiGlobe />
        </div>
        <div className="icon-button">
          <FaBars />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
