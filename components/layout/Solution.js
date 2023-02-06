import React from "react";
import styled from "styled-components";
import { Breakpoints } from "../../styles/Breakpoints";
import Router from "next/router";

const Wrapper = styled.div`
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 20px;
  margin: 30px 20px;
  padding: 30px;

  .main-title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .sub-1-heading {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .sub-1-text {
    font-size: 14px;
    margin-bottom: 10px;
    color: #666;
  }
  .sub-1-button {
    padding: 8px;
    font-weight: 600;
    background: #000;
    color: #fff;
    border: none;
    cursor: pointer;
    @media (max-width: ${Breakpoints.mobile}) {
      margin: 0px auto;
    }
  }
  .sub-1-button:hover {
    opacity: 0.8;
  }
  .main-container {
  }
  .sub-1 {
    margin-bottom: 20px;
  }
  .sub-2 {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width: ${Breakpoints.mobile}) {
      justify-content: center;
    }
  }
  .feature-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 280px;
  }
  .feature-title {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 600;
    @media (max-width: ${Breakpoints.mobile}) {
      text-align: center;
    }
  }
  .feature-image {
    @media (max-width: ${Breakpoints.mobile}) {
      margin: 0 auto;
    }
  }
  .feature-text {
    @media (max-width: ${Breakpoints.mobile}) {
      text-align: center;
    }
  }
  .cover-img {
    width: 100%;
    height: auto;
  }
`;

const features = [
  {
    image: "/assets/hand.png",
    title: "cost-effective marketing strategy",
    text: "Virtual tours can be a cost-effective marketing strategy, as they can be created and distributed relatively inexpensively, compared to other forms of marketing such as print or television advertising.",
  },
  {
    image: "/assets/refresh.png",
    title: "Showcase latest version",
    text: "Virtual tours can be easily updated and modified, allowing businesses to continuously improve and adapt their marketing efforts without incurring significant additional costs.",
  },
  {
    image: "/assets/shared-vision.png",
    title: "Increased visibility and reach",
    text: "Virtual tours can help businesses to increase their visibility and reach by making their facilities and amenities available to a wider audience. This can help to attract potential customers who may not have been aware of the business previously",
  },
  {
    image: "/assets/remote.png",
    title: "Market Everywhere from Anywhere",
    text: "Virtual tours are a valuable marketing tool for businesses that are located in remote or difficult-to-access areas, where potential customers may have difficulty visiting the site in person.",
  },
];

const Solution = () => {
  return (
    <div>
      <Wrapper>
        <div className="main-title">
          Why Choose Virtual Tour for your Business?
        </div>
        <div className="main-container">
          <div className="sub-1">
            {/* <div className="sub-1-heading"></div> */}
            <div className="sub-1-text">
              Virtual tours can be a helpful marketing tool for infrastructure
              dependent businessesBy providing a virtual tour, businesses can
              give potential customers an immersive, interactive experience that
              allows them to learn more about the business and its offerings,
              and make informed decisions about booking a stay or enrolling in a
              program.
            </div>
            <button
              className="sub-1-button"
              onClick={() => {
                Router.push("/portfolio");
              }}
            >
              Explore Virtual Tours
            </button>
          </div>
          <div className="sub-2">
            {features.map((feature) => (
              <div className="feature-container" key={feature.title}>
                <img
                  className="feature-image"
                  height="48px"
                  width="48px"
                  src={feature.image}
                  alt="icon"
                />
                <div className="feature-title">{feature.title}</div>
                <div className="feature-text">{feature.text}</div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Solution;
