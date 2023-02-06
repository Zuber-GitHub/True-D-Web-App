import React from "react";
import styled from "styled-components";
import Footer from "../components/layout/Footer";

const Container = styled.div`
  .container {
    margin-top: 6rem;
  }
  .career {
    width: 100vw;
    background-color: rgb(241 245 249);
    font-size: 1.875rem; /* 30px */
    line-height: 2.25rem; /* 36px */
    padding-left: 2.5rem; /* 40px */
    font-weight: 600;
    padding-top: 1.25rem; /* 20px */
    padding-bottom: 1.25rem; /* 20px */
  }
`;

const Career = () => {
  return (
    <Container>
      <div className="container ">
        <div className="career">Currently no position available !</div>
      </div>
    </Container>
  );
};

export default Career;
