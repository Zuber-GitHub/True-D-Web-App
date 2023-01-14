import React from "react";
import styled from "styled-components";
import { Breakpoints } from "../../styles/Breakpoints";
import { useState } from "react";
import ReactWhatsapp from "react-whatsapp";
import Router, { useRouter } from "next/router";
const Wrapper = styled.div`
  background-color: #000;
  color: #fff;
  padding: 25px 50px;
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
    margin-bottom: 6px;
  }
  .services {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 12px;
    @media (max-width: ${Breakpoints.mobile}) {
      text-align: center;
    }
    a {
      text-decoration: underline;
    }
  }

  .meeting-text {
    text-align: center;
  }

  .meeting {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
      width: 75%;
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
    position: relative;
    display: flex;
    justify-content: space-evenly;
    img {
      cursor: pointer;
    }
  }
  .contact {
    text-align: center;
    a {
      text-decoration: underline;
    }
    div {
      margin-top: 5px;
    }
  }

  .footer-border {
    border: 0.5px solid #999;
    margin: 20px 0px;
  }
  .whatsapp {
    position: absolute;
    height: 24px;
    width: 24px;
    right: 12px;
    top: 0;
    height: ;
    opacity: 0;
    z-index: 0;
    cursor: pointer;
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
    url: "https://www.instagram.com/vr.true.dimensions/",
  },
  {
    name: "linkedin",
    src: "/assets/linkedin.png",
    alt: "linkedin logo",
    url: "https://www.linkedin.com/company/true-d/?viewAsMember=true",
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
  const [openWhatsapp, setOpenWhatsapp] = useState(false);
  const router = useRouter();
  const socialMediaHandler = (name, url) => {
    if (name !== "whatsapp") {
      window.open(url);
    } else {
    }
  };

  const WhatsappImage = () => {
    return (
      <img src="/assets/whatsapp.png" alt="logo" height="24px" width="24px" />
    );
  };

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
          <div className="sub-heading meeting-text">
            Lets connect and conquer <br /> Schedule a quick meeting with us
            today!
          </div>
          <div className="meeting">
            <button>Schedule a Meeting</button>
          </div>
        </div>
        <div className=" heading">
          <div className="sub-heading">Share Your Thoughts</div>
          <div className="social">
            {footerImages.map((image) => (
              <img
                onClick={() => {
                  socialMediaHandler(image?.name, image?.url);
                }}
                key={image.name}
                src={image.src}
                alt={image.alt}
                height="24px"
                width="24px"
              />
            ))}
            <ReactWhatsapp
              className="whatsapp"
              number="7975602048"
              message="Hi True Dimensions"
            />
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
          &copy; Copyright {new Date().getFullYear()} - True Dimensions PVT LTD
        </footer>
      }
    </Wrapper>
  );
};

export default Footer;
