import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  transform-style: preserve-3d;

  .image {
    border-radius: 10px;
    box-shadow: 0 50px 80px rgba(0, 0, 0, 0.3);
  }
  .image:hover {
    opacity: 0.9;
  }

  .box {
    position: relative;
    width: 450px;
    height: 300px;
    margin: 60px 0px;
    transform-style: preserve-3d;
    display: flex;
    justify-content: center;
  }

  .box .imgBx {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .box .imgBx .contentBx {
    position: absolute;
    top: 50%;
    left: 50px;
    right: 50px;
    background: #fff;
    transform: translateZ(20px) scaleY(0);
    padding: 40px 25px;
    transform-origin: top;
    transition: 0.5s;
    transform-style: preserve-3d;
    border-radius: 10px;
  }

  .box:hover .contentBx {
    transform: translateZ(100px) scaleY(1);
  }
`;

const TiltEffect = (
  { hotelsResorts },
  { educationalInstitutes },
  { temples },
  { hospitals },
  { others }
) => {
  return (
    <Container className="container">
      <div className="box">
        <div className="imgBx">
          <img
            className="image"
            width="450px"
            height="300px"
            src="/assests/royal-ritz.jpeg"
            alt="image"
          />
          <div className="contentBx">
            <h2>Royal Rtiz Resort</h2>
            <p>
              This is thee best effect i have seen in my life yhi
              ysnsksldankdanjsbd sklns sdkladnas sadnkalsnd
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TiltEffect;
