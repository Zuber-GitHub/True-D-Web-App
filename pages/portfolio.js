import React from "react";
import styled from "styled-components";
import TiltEffect from "../components/layout/TiltEffect";

const Wrapper = styled.div`
  padding: 100px 30px;
`;

const Portfolio = () => {
  const hotelsResorts = [
    {
      name: "Royal Ritz Resort",
      image: "/assests/royal-ritz.jpeg",
      content: "",
      url: "",
    },
    {
      name: "Omatra The Bliss Hotel",
      image: "/assests/bliss.webp",
      content: "",
      url: "",
    },
  ];
  const educationalInstitutes = [
    {
      name: "KLE Technological University",
      image: "",
      content: "",
      url: "",
    },
    {
      name: "Shri Dharmasthala Manjunatheshwara College of Engineering and Technology",
      image: "",
      content: "",
      url: "",
    },
  ];
  const temples = [
    {
      name: "Shri Shiradi Sai Baba Teample Kelageri Road Dharwad.",
      image: "",
      content: "",
      url: "",
    },
  ];
  const hospitals = [];
  const others = [];

  return (
    <Wrapper>
      <TiltEffect
        hotelsResorts={hotelsResorts}
        educationalInstitutes={educationalInstitutes}
        temples={temples}
        hospitals={hospitals}
        others={others}
      />
    </Wrapper>
  );
};

export default Portfolio;
