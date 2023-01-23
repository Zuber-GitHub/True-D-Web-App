import React from "react";
import styled from "styled-components";
import { Breakpoints } from "../../styles/Breakpoints";

const Wrapper = styled.div`
  .heading {
    font-size: 30px;
    font-weight: 700;
    margin-top: 30px;
    @media (max-width: ${Breakpoints.mobile}) {
      text-align: center;
    }
  }
`;

const SubWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  @media (max-width: ${Breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  transform-style: preserve-3d;
  z-index: 0;

  .image {
    border-radius: 10px;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.3);
    z-index: 0;
    transition: all 0.5s ease-in-out;
    width: 450px;
    height: 300px;
    @media (max-width: ${Breakpoints.mobile_micro}) {
      width: 355px;
      height: 236px;
    }
  }
  .image:hover {
    transform: scale(1.02);
  }
  a {
    font-size: 20px;
    font-weight: 600;
    text-decoration: underline !important;
    color: #000 !important;
  }

  .box {
    position: relative;
    width: 450px;
    height: 300px;
    margin-top: 20px;
    transform-style: preserve-3d;
    display: flex;
    z-index: 1;
    justify-content: center;
    @media (max-width: ${Breakpoints.mobile_micro}) {
      width: 355px;
      height: 250px;
    }
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
    left: 30px;
    right: 30px;
    background: #fff;
    transform: translateZ(20px) scaleY(0);
    padding: 30px 25px;
    transform-origin: top;
    transition: 0.5s;
    transform-style: preserve-3d;
    border-radius: 10px;
    z-index: 2;
    @media (max-width: ${Breakpoints.mobile_micro}) {
      height: 145px;
      overflow-y: scroll;
    }
  }

  .box:hover .contentBx {
    transform: translateZ(100px) scaleY(1);
  }
`;

const TiltEffect = ({
  hotelsResorts,
  educationalInstitutes,
  temples,
  hospitals,
  others,
}) => {
  return (
    <Wrapper>
      {hotelsResorts.length !== 0 && (
        <div className="heading">Hotels and Resorts</div>
      )}
      <SubWrapper>
        {hotelsResorts.map((project) => (
          <Container key={Math.random().toString()} className="container">
            <div className="box">
              <div className="imgBx">
                <img className="image" src={project.image} alt="image" />
                <div className="contentBx">
                  <a target="blank" href={project.url}>
                    {project.name}
                  </a>
                  <p>{project.content}</p>
                </div>
              </div>
            </div>
          </Container>
        ))}
      </SubWrapper>
      {educationalInstitutes.length !== 0 && (
        <div className="heading">Educational Institutions</div>
      )}
      <SubWrapper>
        {educationalInstitutes.map((project) => (
          <Container key={Math.random().toString()} className="container">
            <div className="box">
              <div className="imgBx">
                <img
                  className="image"
                  width="450px"
                  height="300px"
                  src={project.image}
                  alt="image"
                />
                <div className="contentBx">
                  <a target="blank" href={project.url}>
                    {project.name}
                  </a>
                  <p>{project.content}</p>
                </div>
              </div>
            </div>
          </Container>
        ))}
      </SubWrapper>
      {temples.length !== 0 && <div className="heading">Temples</div>}
      <SubWrapper>
        {temples.map((project) => (
          <Container key={Math.random().toString()} className="container">
            <div className="box">
              <div className="imgBx">
                <img
                  className="image"
                  width="450px"
                  height="300px"
                  src={project.image}
                  alt="image"
                />
                <div className="contentBx">
                  <a target="blank" href={project.url}>
                    {project.name}
                  </a>
                  <p>{project.content}</p>
                </div>
              </div>
            </div>
          </Container>
        ))}
      </SubWrapper>
      {hospitals.length !== 0 && <div className="heading">Hospitals</div>}
      <SubWrapper>
        {hospitals.map((project) => (
          <Container key={Math.random().toString()} className="container">
            <div className="box">
              <div className="imgBx">
                <img
                  className="image"
                  width="450px"
                  height="300px"
                  src={project.image}
                  alt="image"
                />
                <div className="contentBx">
                  <a target="blank" href={project.url}>
                    {project.name}
                  </a>
                  <p>{project.content}</p>
                </div>
              </div>
            </div>
          </Container>
        ))}
      </SubWrapper>
      {others.length !== 0 && <div className="heading">Others</div>}
      <SubWrapper>
        {others.map((project) => (
          <Container key={Math.random().toString()} className="container">
            <div className="box">
              <div className="imgBx">
                <img
                  className="image"
                  width="450px"
                  height="300px"
                  src={project.image}
                  alt="image"
                />
                <div className="contentBx">
                  <a target="blank" href={project.url}>
                    {project.name}
                  </a>
                  <p>{project.content}</p>
                </div>
              </div>
            </div>
          </Container>
        ))}
      </SubWrapper>
    </Wrapper>
  );
};

export default TiltEffect;
