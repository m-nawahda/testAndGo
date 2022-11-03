import React, { useState } from "react";
import SearchField from "../common/searchField/searchField";
import "./footer.css";
const Footer = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="FooterContainer">
      <div className="container Footer">
        <div className="row py-3">
          <div className="  col-md-3 col-sm-6 px-3 ">
            <h4>About</h4>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">About Us</li>
              <li class="list-group-item">About COVID-19</li>
              <li class="list-group-item">COVID-19 Testing for Minors</li>
              <li class="list-group-item">FAQ’s</li>
              <li class="list-group-item">Privacy Policy</li>
            </ul>
          </div>
          <div className=" col-md-3 col-sm-6 px-3 ">
            <h4>Partners</h4>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">About Partners</li>
              <li class="list-group-item">About Labs</li>
              <li class="list-group-item">COVID-19 Tests Available</li>
            </ul>
          </div>
          <div className=" dataPart col-md-6 col-sm-12  ">
            <div className="">
              <img src="/images/logo.png" width="200px" alt="logo" />
              <h5 className="mt-3">Corporate Oce</h5>
              <h6>(703) 657-5500</h6>
              <h6> info@LTS.com</h6>
              <h6> 12930 Worldgate Drive</h6>
              <h6> Suite 300</h6>
              <h6>Herndon, VA 20170</h6>
              <img
                className="mx-2"
                width="30"
                src="/images/facebook.svg"
                alt="facebook"
              />
              <img
                width="30"
                className="mx-2"
                src="/images/twitter.svg"
                alt="twitter"
              />
              <img
                className="mx-2"
                width="30"
                src="/images/instagram.svg"
                alt="instagram"
              />
              <img width="30" src="/images/linkedin.svg" alt="linkedin" />
            </div>
          </div>
        </div>
        <p>
          ADA Compliance <span className="redLine">I</span> Non Discrimination
          Statement <span className="redLine">I</span> Disclaimer{" "}
          <span className="redLine">I</span> Translation Disclaimer{" "}
          <span className="redLine">I</span> Website Privacy & Security Policy
        </p>
        <span> © 2022 LTS - A Virginia Based IT Solution Provide</span>
        <h6 className="mt-3 language">
          Language Assistance Services. If you speak a language other than
          English, assistance services, free of change are available to you in
          the following languages:
        </h6>
        <span className="mt-3 languages">Español | Turkish | Portuguese</span>
      </div>
      <div
        className={"fixed" + (expanded ? " expanded" : "")}
        onClick={(e) => {
          if (e.target.className !== "closeBtn") setExpanded(true);
        }}
      >
        {!expanded ? (
          <span className="locationLabel">Find Location</span>
        ) : (
          <div className="searchFieldContainer">
            <div
              className="closeBtn"
              onClick={() => {
                setExpanded(false);
              }}
            >
              X
            </div>
            <SearchField />
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
