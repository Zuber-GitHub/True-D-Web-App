import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { Breakpoints } from "../../styles/Breakpoints";

const Wrapper = styled.div`
  padding: 0px 20px;
 
  h1 {
    text-align: center;
    margin: 0px;
    margin-bottom: 10px;
  }
`;
const TextAnimation = () => {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(screenWidth);

  if (screenWidth <= 900) {
    return (
      <Wrapper>
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>
          Virtual Tour Services
        </div>

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
  }

  return (
    <Wrapper>
      <div style={{ fontSize: "40px", fontWeight: "bold" }}>
        Virtual Tour Services
      </div>
      <div>
        <Typewriter
          options={{
            loop: true,
            autoStart: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('<span style="font-size: 40px;">WE OFFER - </span>')

              .typeString(
                '<span style="font-size: 40px;font-weight:700;color:white;background:black;">IMMERSIVE</span>'
              )
              .pauseFor(2500)
              .deleteChars(9)
              .typeString(
                '<span style="font-size: 40px;font-weight:700;color:white;background:black;">ENGAGING</span>'
              )
              .pauseFor(2500)
              .deleteChars(8)
              .typeString(
                '<span style="font-size: 40px;font-weight:700;color:white;background:black;">INTERACTIVE</span>'
              )
              .pauseFor(2500)
              .deleteChars(11)
              .typeString(
                '<span style="font-size: 40px;font-weight:700;">VIRTUAL TOURS</span>'
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
