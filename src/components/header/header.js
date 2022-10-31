import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div>
      <div className="topNavContainer">
        <div className="d-flex justify-content-between py-1 px-3">
          <span className="selectLanguage  dropdown-toggle">Select Language</span>
          <span>Patient Portal</span>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid d-flex justify-content-between">
          <a className="navbar-brand" href="#">
            <img src="/images/logo.png" alt="logo" width="300" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navBarItems" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown dropdownItems">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li>
                    <Link className="dropdown-item" to="/">
                      About US
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      About COVID-19
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      COVID-19 Testing for minors
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item  dropdown dropdownItems">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Patners
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link" to="/">
                  Locations
                </Link>
              </li>
              <li className="nav-item dropdown contactItem">
                <Link className="nav-link" to="/">
                  Contact US
                </Link>
              </li>
              <li className="nav-item dropdown searchIcon">
                <img src="/images/search.svg" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
