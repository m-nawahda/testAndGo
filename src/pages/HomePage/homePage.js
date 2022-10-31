import React, { useEffect } from "react";
import Slider from "../../components/Slider/slider";
import Contact from "../../components/contact/contact";
import Footer from "../../components/footer/footer";
import "./homePage.css";
import SearchField from "../../components/common/searchField/searchField";

const Index = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <Slider />
      <div className="test">
        <div className="firstChildren">
          {" "}
          <div className="curved ">{/* <img alt="covid" src="/images/COVID_Test_Man.png" width="100%" /> */}</div>
        </div>
        <div className="secondChildren">
          <div className="rectangle ">
            <h3>About TestandGo</h3>
            <p>
              TestandGo is a leading provider of COVID-19 testing solutions across the country. Our goal is to make
              testing to be easy and accessible, with rapid result times.
            </p>
            <a>
              More About TestandGo <img src="/images/arrowRed.png" />
            </a>
          </div>
        </div>
      </div>
      <div className="covidTesting d-flex">
        <div>
          <h2>COVID-19 Testing for Minors</h2>
          <p>
            We know that COVID-19 doesn’t just affect adults. With schools, daycares and even some restaurants requiring
            proof of Covid status, testing has become essential for everyone. Test Now And Go makes it easy for parents.
          </p>
          <a>
            More About School Program <img src="/images/rigthArrow.png" width="35" />
          </a>
        </div>
        <div className="imageWrapper">
          <img alt="covid" src="/images/COVID_Test_Family.png" />
        </div>
      </div>
      <div>
        <div className=" d-flex location">
          <div className="col-md-6 locationForm p-4">
            <h5 className="mb-4">KIOSK Location</h5>
            <SearchField />
            <p className="locationText mt-5">Test at a Kiosk - What to Expect (English audio)</p>
            <p className="locationText">Prueba en un Quiosco - Qué Esperar (audio en Español) </p>
          </div>
          <div className="col-md-1  p-4"></div>

          <div className="col-md-5 imageWrapper2 order-1">
            <img alt="covid" src="/images/civid02.jpeg" />
          </div>
        </div>
      </div>
      <div className="lab">
        <div>
          <h1>Our Lab Partners</h1>
          <p>
            Test and Go partners with leading labs across the country leveraging the latest cutting edge laboratory
            testing technology. Together we deliver industry leading testing services to help our comunites. Lorem ipsum
            dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
            magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
            lobortis nisl ut aliquip ex ea commodo consequat.
          </p>
          <a>
            More About Our Lab Partners <img src="/images/rigthArrow.png" width="35" />
          </a>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
