import React, { useState, useCallback, useEffect } from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Solution from "../components/layout/Solution";
import ThreeDModel from "../components/layout/ThreeDModel";
import styled from "styled-components";

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
    </Wrapper>
  );
};

export default Home;
