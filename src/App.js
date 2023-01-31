import "./styles.css";
import React from "react";
import styled from "styled-components";
// import SplineScene from "./components/SplineScene";
import Spline from "@splinetool/react-spline";
import Logo from "./images/logo.svg";

export default function App() {
  return (
    <Wrapper className="App">
      <Spline
        className="spline"
        scene="https://prod.spline.design/VPJEwtDTJ8H3phWx/scene.splinecode"
      />
      <TextContainer>
        <Menu>
          <li>
            <img src={Logo} alt="logo" />
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About Product</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </Menu>
        <h1>Simplifying the school day, one click at a time</h1>
        <p>
          Ease your school management with our customizable SaaS product.
          Empower administrators, streamline operations and focus on teaching
          and learning with our easy-to-use and affordable platform.
        </p>
      </TextContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Spline Sans", sans-serif;
  font-size: 16px;
  color: white;
  position: relative;

  .spline {
    position: absolute;

    right: 0;
    margin: 0;
    top: 0;

    @media (max-width: 1400px) {
      transform: scale(0.7) translate(150px);
    }

    @media (max-width: 1024px) {
      transform: scale(0.5) translate(600px);
      transform-origin: 45% 20%;
    }
    @media (max-width: 800px) {
      transform: scale(0.4) translate(900px);
      transform-origin: 40% 20%;
    }
    @media (max-width: 600px) {
      transform: scale(0.35) translate(-50px);
      right: auto;
      left: 50%;
      margin-left: -600px;
    }
    @media (max-width: 375px) {
      transform: scale(0.25) translate(-50px);
      transform-origin: 50% 45%;
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  top: 30px;
  position: absolute;
  width: 100%;

  @media (max-width: 1024px) {
    gap: 40px;
  }
  @media (max-width: 600px) {
    gap: 0px;
    align-items: center;
  }

  h1 {
    font-family: "Spline Sans Mono", monospace;
    font-weight: bold;
    font-size: 70px;
    margin: 0;
    max-width: 500px;

    @media (max-width: 1024px) {
      font-size: 50px;
      max-width: 350px;
    }

    @media (max-width: 800px) {
      padding-top: 50px;
      font-size: 40px;
      max-width: 600px;
    }

    @media (max-width: 600px) {
      font-size: 30px;
      max-width: 500px;
    }

    @media (max-width: 320px) {
      font-size: 20px;
      max-width: 300px;
    }
  }

  p {
    font-family: "Spline Sans Mono", monospace;
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;

    @media (max-width: 1024px) {
      font-size: 15px;
      max-width: 300px;
    }

    @media (max-width: 800px) {
      padding-top: 30px;
      font-size: 13px;
      max-width: 200px;
      line-height: 200%;
    }

    @media (max-width: 600px) {
      font-size: 13px;
      max-width: 500px;
    }

    @media (max-width: 320px) {
      font-size: 10px;
      max-width: 300px;
    }
  }

  h1,
  p {
    margin: 0 30px 0 100px;

    @media (max-width: 320px) {
      margin: 0 20px 0 30px;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 0 30px 0 100px;
  padding: 0;

  @media (max-width: 320px) {
    justify-content: center;
    margin: 0 10px 0 20px;
    gap: 5px;
  }

  li {
    list-style: none;
    margin: 0;

    a {
      text-decoration: none;
      color: white;
      padding: 8px 20px;
      border: 1px solid rgba(255, 255, 255, 0);
      transition: 1s;
      border-radius: 14px;

      @media (max-width: 600px) {
        font-size: 15px;
      }
      @media (max-width: 320px) {
        font-size: 10px;
        padding: 5px 10px;
      }

      :hover {
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
  }
`;
