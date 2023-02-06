import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Breakpoints } from "../../styles/Breakpoints";

const Wrapper = styled.div`
  margin: 20px 0;
  .container {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }

  .text {
    font-size: 35px;
    font-weight: 600;
  }
  @media (max-width: ${Breakpoints.mobile}) {
    .container {
      flex-direction: column;
      gap:10px;
    }
  }
`;

const ClientCounter = () => {
  const [clients, setClients] = useState(0);
  const [rank, setRank] = useState(100);
  const [areaCovered, setAreaCovered] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const clientCounterRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      let clientsIntervalId = setInterval(() => {
        setClients((prevClients) => {
          if (prevClients >= 10) {
            clearInterval(clientsIntervalId);
            return 10;
          }
          return prevClients + 1;
        });
      }, 100);

      let rankIntervalId = setInterval(() => {
        setRank((prevRank) => {
          if (prevRank <= 1) {
            clearInterval(rankIntervalId);
            return 1;
          }
          return prevRank - 1;
        });
      }, 10);

      let areaCoveredIntervalId = setInterval(() => {
        setAreaCovered((prevAreaCovered) => {
          if (prevAreaCovered >= 2) {
            clearInterval(areaCoveredIntervalId);
            return 2;
          }
          return prevAreaCovered + 1;
        });
      }, 500);

      return () => {
        clearInterval(clientsIntervalId);
        clearInterval(rankIntervalId);
        clearInterval(areaCoveredIntervalId);
      };
    }
  }, [isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    observer.observe(clientCounterRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper>
      <div className="container" ref={clientCounterRef}>
        <div className="rank">
          <div className="text">#{rank}</div>
          <div className="sub-text">
            Virtual Tour Services, <br /> in North Karnataka
          </div>
        </div>
        <div className="client">
          <div className="text">{clients}+</div>
          <div className="sub-text">Happy Clients</div>
        </div>
        <div className="area">
          <div className="text">{areaCovered}L+</div>
          <div className="sub-text">SqFt Area Captured</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ClientCounter;
