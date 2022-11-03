import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

const CustomSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const SliderItem = ({ item }) => (
    <div
      style={{ backgroundImage: `url(${item?.imageUrl}) ` }}
      className="slideItem "
    >
      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              Patient Self-Administered COVID-19 Collection Kits
            </h5>
            <p className="card-text">
              TestAndGo EUA approved test kits allow for increase testing
              capacity without the need for medical personnel.
            </p>
            <a className="FindLink">Find Test and Go Kiosks</a>
          </div>
        </div>
        <div className="sliderFooter">
          <div className="contentFooter">
            <div className="shape">
              <a href="#" className="link">
                Patient Portal
              </a>
              <div className="before"></div>
            </div>

            <div className="sliderFooterItemContainer">
              <div className="itemsContainer">
                <div className="sliderFooterItem ">
                  <img alt="covid" src={item?.subIageUrl1} />
                  <div className="itemContent">
                    <h6>Rapid Results</h6>
                    <span>
                      Get quick reliable results to help you managent your
                      COVID-19 testing needs.
                    </span>
                  </div>
                </div>
                <div className="sliderFooterItem ">
                  <img alt="covid" src={item?.subIageUrl2} />
                  <div className="itemContent">
                    <h6>Highest Accuracy</h6>
                    <span>
                      We leverage the latest technology to provide the highest
                      quality available for COVID-19 testing.
                    </span>
                  </div>
                </div>
                <div className="sliderFooterItem ">
                  <img alt="covid" src={item?.subIageUrl3} />
                  <div className="itemContent">
                    <h6>Travel Certificate</h6>
                    <span>
                      Traveling can be difficult. Don’t let COVID-19 testing be
                      stressful also. Our service is here to help ease your
                      travel requirements
                    </span>
                  </div>
                </div>
                <div className="sliderFooterItem ">
                  <img alt="covid" src={item?.subIageUrl4} />
                  <div className="itemContent">
                    <h6>Self-Service Testing</h6>
                    <span>
                      We have worked with many local and federal programs to
                      provide drive up sites kiosk based COVID-19 testing.
                    </span>
                  </div>
                </div>
              </div>
              <div className="aboutFooter">
                <span>About COVID-19</span>
                <div className="arrow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="">
      <Slider {...settings}>
        {mockData.map((ele) => (
          <React.Fragment key={ele?.imageUrl}>
            <SliderItem item={ele} />
          </React.Fragment>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;

const mockData = [
  {
    imageUrl: "/images/Main1.png",
    subIageUrl1: "/images/Rapid_Results.png",
    subIageUrl2: "/images/Highest_Accuracy_Red.png",
    subIageUrl3: "/images/Travel_Certificate.png",
    subIageUrl4: "/images/Self_Service_Testing.png",
  },
  {
    imageUrl: "/images/Main2.png",
    subIageUrl1: "/images/Rapid_Results.png",
    subIageUrl2: "/images/Highest_Accuracy.png",
    subIageUrl3: "/images/Travel_Certificate_Red.png",
    subIageUrl4: "/images/Self_Service_Testing.png",
  },
  {
    imageUrl: "/images/Main3.png",
    subIageUrl1: "/images/Rapid_Results.png",
    subIageUrl2: "/images/Highest_Accuracy.png",
    subIageUrl3: "/images/Travel_Certificate.png",
    subIageUrl4: "/images/Self_Service_Testing_Red.png",
  },
];
