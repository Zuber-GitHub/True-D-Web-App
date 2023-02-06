import React, { useState, useCallback, useEffect } from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Solution from "../components/layout/Solution";
import ThreeDModel from "../components/layout/ThreeDModel";
import styled from "styled-components";
import Partnerlider from "../components/layout/Partnerlider";
import ClientCounter from "../components/layout/Counter";
import { Breakpoints } from "../styles/Breakpoints";

const Wrapper = styled.div`
  position: relative;
  .scroll {
    height: 30px;
    width: 30px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    fill: red;
    opacity: ${(props) => (props.scroll ? "1" : "0")};
    cursor: pointer;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px 30px;

  @media (max-width: ${Breakpoints.mobile}) {
    display: block;
  }

  .img-1 {
    width: 50%;
    height: auto;
    @media (max-width: ${Breakpoints.mobile}) {
      display: block;
      width: 100%;
      margin-bottom: 10px;
    }
  }
  .img-2 {
    width: 50%;
    height: auto;
    @media (max-width: ${Breakpoints.mobile}) {
      display: block;
      width: 100%;
    }
  }
`;

const Home = () => {
  const [y, setY] = useState("");

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <Wrapper scroll={y}>
      <ThreeDModel />
      <Solution />
      <img
        className="scroll"
        src="assets/up-arrow.png"
        onClick={() => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
      />
      <ClientCounter />
      <Partnerlider />
      <ImageContainer>
        <img className="img-1" src="/assets/cover.png" alt="image" />
        <img className="img-2" src="/assets/market.png" alt="image" />
      </ImageContainer>
    </Wrapper>
  );
};

export default Home;
