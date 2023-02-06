import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { clients } from "../helper/clients";
import { Breakpoints } from "../../styles/Breakpoints";

const Wrapper = styled.div`
  .slick-list {
    text-align: center;
    padding-left: 50px;
  }

  .heading {
    text-align: center;
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .client-logo {
    width: 50%;
    aspect-ratio: 3/2;
    object-fit: contain;
  }

  .Some {
    display: flex;
    justify-content: center;
    @media (max-width: ${Breakpoints.mobile}) {
      .client-logo{
        width: 60%;

      }
    }
  }
`;

const Partnerlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: Breakpoints.mobile,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <Wrapper>
      <div className="heading">Our Partners</div>
      <Slider {...settings}>
        {clients.map((client) => (
          <div className="Some" key={client.id}>
            <img src={client.image} alt={client.alt} className="client-logo" />
          </div>
        ))}
      </Slider>
    </Wrapper>
  );
};

export default Partnerlider;
