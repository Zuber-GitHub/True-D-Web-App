import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const Wrapper = styled.div`
  ${
    "" /* p {
    position: relative;
    text-transform: uppercase;
    font-size: 40px;
    letter-spacing: 4px;
    overflow: hidden;
    background: linear-gradient(90deg, #000, #fff, #000);
    background-repeat: no-repeat;
    background-size: 80%;
    animation: animate 6s linear infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
  }

  @keyframes animate {
    0% {
      background-position: -500%;
    }
    100% {
      background-position: 500%;
    }
    .heading {
      font-size: 25px;
    }
  } */
  }
  padding:0px 20px;
  h1 {
    text-align: center;
    margin: 0px;
    margin-bottom: 10px;
  }
`;
const TextAnimation = () => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => setDisplay((prev) => prev + 1), 6000);
    return () => clearInterval(timer);
  }, []);
  display === 3 && setDisplay(0);

  let animationText;
  if (display === 0) {
    animationText = " EXPERIENCE THE REALITY LIKE NEVER BEFORE";
  } else if (display === 1) {
    animationText = "INTRODUCING TRUE-DIMENSIONS";
  } else if (display === 2) {
    animationText =
      "BLENDING REALITY AND VIRTUALITY IN AN OPEN, IMMERSIVE EXPERIENCE";
  }
  return (
    <Wrapper>
      <h1>Virtual Tour Services</h1>
      <div>
        <Typewriter
          options={{
            loop: true,
            autoStart: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('<span style="font-size: 20px;">WE OFFER - </span>')

              .typeString(
                '<span style="font-size: 20px;font-weight:700;color:white;background:black;">IMMERSIVE</span>'
              )
              .pauseFor(2500)
              .deleteChars(9)
              .typeString(
                '<span style="font-size: 20px;font-weight:700;color:white;background:black;">ENGAGING</span>'
              )
              .pauseFor(2500)
              .deleteChars(8)
              .typeString(
                '<span style="font-size: 20px;font-weight:700;color:white;background:black;">INTERACTIVE</span>'
              )
              .pauseFor(2500)
              .deleteChars(11)
              .typeString(
                '<span style="font-size: 20px;font-weight:700;">VIRTUAL TOURS</span>'
              )
              .pauseFor(2500)
              .start();
          }}
        />
      </div>
    </Wrapper>
  );
};

export default TextAnimation;
