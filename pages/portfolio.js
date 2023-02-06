import React from "react";
import styled from "styled-components";
import TiltEffect from "../components/layout/TiltEffect";
import { Breakpoints } from "../styles/Breakpoints";
import Footer from "../components/layout/Footer";
import Partnerlider from "../components/layout/Partnerlider";

import {
  hotelsResorts,
  educationalInstitutes,
  temples,
  hospitals,
  others,
} from "../components/helper/projects";

const Wrapper = styled.div`
  padding: 100px 30px;
  .helper{
    margin-top:30px;
    margin-bottom:-40px;
  }
  .slick-dots {
    display: none !important;
  }
  @media (max-width: ${Breakpoints.mobile_micro}) {
    padding: 100px 0px;
  }
`;

const Portfolio = () => {
  return (
    <>
      <Wrapper>
        <TiltEffect
          hotelsResorts={hotelsResorts}
          educationalInstitutes={educationalInstitutes}
          temples={temples}
          hospitals={hospitals}
          others={others}
        />
        <div className="helper">
          <Partnerlider />
        </div>
      </Wrapper>
    </>
  );
};

export default Portfolio;
