import React from "react";
import './searchField.css'
const SearchField = () => {
  return (
    <div className="searchField">
      <h4>Find a KIOSK near you</h4>
      <div
        className="input-group mb-2"
        style={{
          maxWidth: "350px",
        }}
      >
        <div className="input-group-prepend">
          <span className="input-group-text">
            <img src="/images/location.svg" width="25px" alt="location"/>
          </span>
        </div>
        <input
          type="text"
          className="form-control "
          placeholder="Current Location or Enter Address"
        />
      </div>
      <span className="currentLocation">Use Current Location</span>
    </div>
  );
};

export default SearchField;
