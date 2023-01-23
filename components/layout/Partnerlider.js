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
  }

  .Some {
    height: 100px;
    width: 100px;
    border: 2px solid red;
    width: 75% !important;
    display: flex;
    align-items: center;
      ${
        "" /* @media (max-width: ${Breakpoints.mobile}) {
      height: 50px;
      width: 50px;
    } */
      };
  }
`;

const Partnerlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
    cssEase: "linear",
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
      <Slider {...settings}>
        {clients.map((client) => (
          <div className="Some" key={client.id}>
            <img
              src={client.image}
              alt={client.alt}
              style={{ maxHeight: "100%", maxWidth: "75%" }}
            />
          </div>
        ))}
      </Slider>
    </Wrapper>
  );
};

export default Partnerlider;
