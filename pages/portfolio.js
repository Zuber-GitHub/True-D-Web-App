import React from "react";
import styled from "styled-components";
import TiltEffect from "../components/layout/TiltEffect";
import { Breakpoints } from "../styles/Breakpoints";

import {
  hotelsResorts,
  educationalInstitutes,
  temples,
  hospitals,
  others,
} from "../components/helper/projects";

const Wrapper = styled.div`
  padding: 100px 30px;
  @media (max-width: ${Breakpoints.mobile_micro}) {
    padding: 100px 0px;
  }
`;

const Portfolio = () => {
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
