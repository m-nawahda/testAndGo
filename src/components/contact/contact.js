import React from "react";
import "./contact.css";
const index = () => {
  return (
    <>
      <div className="container">
        <div className="row my-3">
          <div className="description col-md-5 col-sm-12 px-3 ">
            <h1>Contact</h1>
            <h5>For any questions or concerns call</h5>
            <h5>800-402-0000</h5>
            <h3>Get in Touch</h3>
            <p>
              Thank you for selecting TestNowandGo as your preferred testing provider. To contact us, please provide
              information below and one of our friendly customer service representatives will be in touch shortly! We do
              our best to respond within 1 business day
            </p>
          </div>
          <div className=" col-md-1"></div>

          <div className="col-md-6 col-sm-12 form">
            <form>
              <div class="form-group">
                <label for="formGroupExampleInput">Reason for Inquiry</label>
                <input type="text" class="form-control" id="formGroupExampleInput" />
              </div>
              <div class="form-group mt-3">
                <label for="formGroupExampleInput2">Location (If Applicable)</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" />
              </div>

              <div class="row">
                <div class="col form-group">
                  <label for="formGroupExampleInput">First Name</label>
                  <input type="text" class="form-control" id="formGroupExampleInput" />
                </div>
                <div class="col form-group">
                  <div class="form-group">
                    <label for="formGroupExampleInput">Last Name </label>
                    <input type="text" class="form-control" id="formGroupExampleInput" />
                  </div>{" "}
                </div>
              </div>

              <div class="row">
                <div class="col form-group">
                  <label for="formGroupExampleInput">Email</label>
                  <input type="text" class="form-control" id="formGroupExampleInput" />
                </div>
                <div class="col form-group">
                  <div class="form-group">
                    <label for="formGroupExampleInput">Phone</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" />
                  </div>{" "}
                </div>
              </div>

              <div class="form-group">
                <label for="formGroupExampleInput">Reason for Inquiry</label>
                <textarea type="text" class="form-control" id="formGroupExampleInput" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="contactFooter ">
        <div className="container">
          <button type="button" class="btn btn-danger m-3 btn-lg">
            <span>
              <span class="dot"></span>
              Patient Portal
            </span>
          </button>
          <button type="button" class="btn btn-danger btn-lg">
            <span>
              <span class="dot"></span>
              Find a Location
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default index;
