import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Footer from "../components/layout/Footer";
import ServicesCard from "../components/layout/servicesCard";
import Partnerlider from "../components/layout/Partnerlider";

const Container = styled.div`
  .wrap {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .content {
    margin-top: 5rem;
  }
  .title {
    font-size: 1.5rem;
    font-weight: 600;
  }
  .about {
    gap: 1.5rem;
    align-items: center;
    margin-top: 1.5rem;
  }
  .firstImage {
    object-fit: cover;
    object-position: center;
    border-radius: 0.5rem;
  }
  .aboutContent {
    text-align: justify;
    line-height: 1.75rem;
    font-size: 1.125em;
    padding-top: 1rem;
  }
  .serviceCard {
    justify-content: space-around;
    margin-top: 2.5rem;
  }
  .serviceContent {
    padding-top: 1rem;
  }
  .serviceContentText {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    font-size: 1.125rem; /* 18px */
    line-height: 1.75rem; /* 28px */
    text-align: justify;
  }
  .address {
    font-size: 2.25rem;
    font-weight: 600;
    padding-top: 1.25rem; /* 20px */
    padding-bottom: 1.25rem; /* 20px */
  }
  .address-container {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2.5rem;
  }
  .address-image {
    border-radius: 0.5rem;
    height: 24rem;
    width: 100%;
    object-fit: cover;
    opacity: 0.4;
  }
  .address-content {
    position: absolute;
    font-size: 1.25rem; /* 20px */
    line-height: 1.75rem; /* 28px */
    text-align: center;
    font-weight: 600;
    text-transform: uppercase;
  }

  .active {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 150ms ease-in-out;
  }
  .hover {
    cursor: pointer;
    opacity: 0.3;
  }
  .hover:hover {
    cursor: pointer;
    opacity: 0.9;
  }
  .address-text {
    position: absolute;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    .wrap {
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }
    .content {
      margin-top: 7rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .title {
      font-size: 2rem;
    }
    .about {
      display: flex;
    }
    .firstImage {
      width: 450px;
      height: 300px;
    }
    .serviceCard {
      display: flex;
    }
    .address-content {
      justify-content: center;
      font-size: 2.25rem; /* 36px */
      line-height: 2.5rem; /* 40px */
    }
  }
`;

const services = [
  {
    id: 1,
    service: "Virtual Tour",
    image: "/assets/virtualtour.jpeg",
  },
  {
    id: 2,
    service: "Digital Marketing",
    image: "/assets/digitalmarketing.jpeg",
  },
  {
    id: 3,
    service: "Virtual Tour Web Design",
    image: "/assets/vtwebdesign.jpeg",
  },
  {
    id: 4,
    service: "Virtual Training",
    image: "/assets/virtualtour.jpeg",
  },
];

const ServiceContent = ({ id }) => {
  if (id == 1) {
    return (
      <div className="serviceContentText">
        We at True Dimensions provide
        <strong> Virtual Tour Services </strong> through which the businesses
        can give potential customers an immersive, interactive experience that
        allows them to learn more about the business and its offerings, and make
        informed decisions about booking a stay or enrolling in a program.
        Overall, virtual tour are the digital asset which can be used in various
        formats to promote businesses online.
        <br />
        <br />
        Virtual tours can be a helpful marketing tool for
        infrastructure-dependent businesses, as they allow potential customers
        to explore the establishment and its facilities remotely, without having
        to physically visit the site. By providing a virtual tour, businesses
        can give potential customers an immersive, interactive experience that
        allows them to learn more about the business and its offerings, and make
        informed decisions about booking a stay or enrolling in a program
      </div>
    );
  } else if (id === 2) {
    return (
      <div className="serviceContentText">
        We at True Dimensions provide <strong> Virtual Tour Services </strong>{" "}
        through which the businesses can give potential customers an immersive,
        interactive experience that allows them to learn more about the business
        and its offerings, and make informed decisions about booking a stay or
        enrolling in a program. Overall, virtual tour are the digital asset
        which can be used in various formats to promote businesses online.
      </div>
    );
  } else if (id === 3) {
    return (
      <div className="serviceContentText">
        We at True Dimensions provide
        <strong> Virtual Tour Web-Design Services </strong>where in website is
        completely built in with the Virtual Platform allowing users not only to
        get immersive experience but also use this platform to use as a virtual
        website. For example, A virtual website for a hotel would have a booking
        facility of rooms, banquet halls, receptions, party halls, concerts,
        dining etc....
      </div>
    );
  } else if (id === 4) {
    return (
      <div className="serviceContentText">
        We at true dimensions provide
        <strong> Virtual Training Platforms</strong> for industries, businesses,
        educational institutions for training of their workforce, employees, and
        students. Virtual training platforms are cost effective and impactful
        solution for in-house training programs. We are working towards
        digitization of training through incorporating latest technologies such
        as, virtual reality, augmented reality and artificial intelligence.
      </div>
    );
  } else return null;
};

const About = () => {
  const [content, setContent] = useState("");

  return (
    <>
      <Container>
        <div className="wrap">
          <div className="content">
            <div className="title">Who we are ?</div>
            <div className="about">
              <img
                src={"/assets/banner.png"}
                alt="Banner image"
                className="firstImage"
              />
              <div className="aboutContent">
                <p>
                  We are Infrastructure brand management and consulting company.
                  We provide optimized virtual solutions for the businesses for
                  their marketing and operations needs. Such as Virtual Tours,
                  Virtual Training Platforms, LMS Compliant Virtual Ed-Tech
                  Platforms and other VR based solutions.We are a gateway to
                  digitalize any space to ensure engaging and close to real
                  experience resulting in increased conversions and gain an edge
                  over your competitors
                  <br />
                  <br />
                  At True Dimensions, we offer a wide range of digital marketing
                  services to help businesses reach their target audience and
                  achieve their marketing goals. Our services include Social
                  Media Marketing Performance Marketing ( Google ads , Facebook
                  ads, Instagram ads ) Email Marketing With our expertise and
                  proven track record, we can help you to increase your online
                  presence, drive traffic to your website, and ultimately boost
                  your sales.
                </p>
              </div>
            </div>

            <div className="title">Our Services</div>

            <div className="serviceCard">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => {
                    setContent(service.id);
                  }}
                  className={`${content === service.id ? "active" : "hover"}`}
                >
                  <ServicesCard
                    image={"/assets/virtualtour.jpeg"}
                    service="Virtual Tour"
                  />
                </div>
              ))}
            </div>
            <div className="serviceContent">
              <ServiceContent id={content} />
            </div>

            <div className="address">Address</div>
            <div className="address-container">
              <img
                src={"/assets/clite.jpeg"}
                alt="image"
                className="address-image"
              />
              <div className="address-text">
                C-lite building, KLE Technological University{" "}
              </div>
            </div>
          </div>
        </div>
        <Partnerlider />
      </Container>
    </>
  );
};

export default About;
