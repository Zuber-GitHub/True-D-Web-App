import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Breakpoints } from "../../styles/Breakpoints";
import { useState } from "react";

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  margin-bottom: 20px;
  z-index: 20;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 120px 0px 60px;
  background-color: #000;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  .image-container {
    .logo {
      height: 80px;
      width: 200px;
    }
    .ham {
      display: none;
      width: ${(props) => (props.toggle ? "30px" : "40px")};
      height: ${(props) => (props.toggle ? "30px" : "40px")};
      transition: 0.5s;
    }
    .close {
      display: none;
      width: ${(props) => (props.toggle ? "30px" : "40px")};
      height: ${(props) => (props.toggle ? "30px" : "40px")};
    }
  }
  .link-container {
    display: flex;
    gap: 30px;
    a {
      border-bottom: 2px solid transparent;
    }
    a:hover {
      border-bottom: 2px solid #fff;
    }
    a:visited {
      border-bottom: 2px solid #fff;
    }
  }
  @media (max-width: ${Breakpoints.mobile}) {
    padding: 10px 30px 20px;
    flex-direction: column;
    gap: ${(props) => (!props.toggle ? "20px" : "0px")};
    align-items: flex-end;
    .image-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        height: 40px;
        width: 90px;
      }
      .ham {
        display: ${(props) => (props.toggle ? "block" : "none")};
      }
      .ham:hover {
        background-color: rgb(100, 100, 100, 0.4);
      }
      .close {
        display: ${(props) => (!props.toggle ? "block" : "none")};
      }
      .close:hover {
        background-color: rgb(100, 100, 100, 0.4);
      }
    }
    .link-container {
      flex-direction: column;
      gap: 15px;
      a {
        text-align: right;
        display: ${(props) => (!props.toggle ? "block" : "none")};
        margin-right: -10px;
      }
      a:last-child {
        margin-bottom: 15px;
      }
    }
  }
`;
const Header = () => {
  const [toggle, setToggle] = useState(true);
  const toggleMenu = () => {
    setToggle((prev) => !prev);
  };

  return (
    <Wrapper toggle={toggle}>
      <div className="image-container">
        <img className="logo" src="/assets/true-d-web.avif" alt="True-D" />
        <img className="ham" src="/assets/ham.svg" onClick={toggleMenu} />
        <img className="close" src="/assets/close.png" onClick={toggleMenu} />
      </div>
      <div className="link-container" onClick={toggleMenu}>
        <Link href="/">HOME</Link>
        <Link href="/portfolio">OUR WORK</Link>
        <Link href="/contact">CONTACT</Link>
        <Link href="/about">ABOUT US</Link>
        <Link href="/career">CAREER</Link>
      </div>
    </Wrapper>
  );
};

export default Header;
