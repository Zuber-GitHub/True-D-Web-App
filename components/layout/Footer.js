import React from "react";
import styled from "styled-components";
import { Breakpoints } from "../../styles/Breakpoints";

const Wrapper = styled.div`
  background-color: #000;
  color: #fff;
  padding: 25px;
  .logo {
    width: 100px;
    height: auto;
    @media (max-width: ${Breakpoints.mobile}) {
      display: block;
      margin: 0 auto;
    }
  }
  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    @media (max-width: ${Breakpoints.mobile}) {
      justify-content: center;
    }
  }
  .logo-text {
    flex-basis: 330px;
    @media (max-width: ${Breakpoints.mobile}) {
      text-align: center;
    }
  }
  .heading {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
    @media (max-width: ${Breakpoints.mobile}) {
      text-align: center;
    }
  }
  .sub-heading {
    margin-bottom: 5px;
  }
  .services {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 12px;
    @media (max-width: ${Breakpoints.mobile}) {
      text-align: center;
    }
  }

  .meeting {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0 20px;
    input {
      flex: 2;
      height: 30px;
    }
    button {
      background-color: #000;
      color: #fff;
      border: 2px solid #fff;
      height: 30px;
      font-weight: 600;
      cursor: pointer;

      transition: 0.5s;
    }
    button:hover {
      background-color: #fff;
      border: 2px solid #000;
      color: #000;
    }
  }
  .social {
    display: flex;
    justify-content: space-evenly;
    img:hover {
      transform: scale(1.2);
      cursor: pointer;
    }
  }
  .footer-border {
    border: 0.5px solid #999;
    margin: 20px 0px;
  }
  .copy-right {
    font-size: 12px;
    @media (max-width: ${Breakpoints.mobile}) {
      text-align: center;
    }
  }
`;

const footerImages = [
  {
    name: "instagram",
    src: "/assets/instagram.png",
    alt: "instagram logo",
  },
  {
    name: "linkedin",
    src: "/assets/linkedin.png",
    alt: "linkedin logo",
  },
  {
    name: "youtube",
    src: "/assets/youtube.png",
    alt: "linkedin logo",
  },
  {
    name: "whatsapp",
    src: "/assets/whatsapp.png",
    alt: "whatsapp logo",
  },
];

const Footer = () => {
  return (
    <Wrapper>
      <img src="/assets/true-d-mobile.avif" alt="logo" className="logo" />
      <div className="container">
        <div className="logo-text">
          Transform your online presence with our mind-bending Virtual Tours!
        </div>
        <div>
          <div className="heading">Our Services</div>
          <div className="services">
            <div>Virtual Tours</div>
            <div>Digital Marketing</div>
            <div>Web Development</div>
            <a href="about">Know More</a>
          </div>
        </div>
        <div className=" heading">
          <div className="sub-heading">
            Lets connect and conquer – schedule a quick meeting with us today!
          </div>
          <div className="meeting">
            <input />
            <button>Schedule a Meeting</button>
          </div>
        </div>
        <div className=" heading">
          <div className="sub-heading">Share Your Thoughts</div>
          <div className="social">
            {footerImages.map((image) => (
              <img
                key={image.name}
                src={image.src}
                alt={image.alt}
                height="24px"
                width="24px"
              />
            ))}
          </div>
        </div>
        <div className="contact heading">
          <div className="sub-heading">Say Hello</div>
          <a href="hello@truedimensions.in">hello@truedimensions.in</a>
          <div>+91 8909897887</div>
        </div>
      </div>
      <div className="footer-border"></div>

      {
        <footer className="copy-right">
          &copy; Copyright {new Date().getFullYear()} - True Dimensions PVT.LTD
        </footer>
      }
    </Wrapper>
  );
};

export default Footer;
