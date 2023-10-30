import React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../components/button';
import 'animate.css';

const waveAnimation = keyframes`
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
`;

const swellAnimation = keyframes`
  0%, 100% {
    transform: translate3d(0,-25px,0);
  }
  50% {
    transform: translate3d(0,5px,0);
  }
`;

const Ocean = styled.div`
  height: 5%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgba(1, 88, 113, 1);
`;

const Wave = styled.div`
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg)
    repeat-x;
  position: absolute;
  top: -198px;
  left: 0;
  right: 0;
  width: 3400px;
  height: 198px;
  margin: 0;
  animation: ${waveAnimation} 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
  &:nth-of-type(2) {
    top: -175px;
    animation:
      ${waveAnimation} 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
      ${swellAnimation} 7s ease -1.25s infinite;
    opacity: 1;
  }
`;

const IntroStyle = styled.div`
  height: 100vh;
  width: 100%;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 254, 234, 1) 0%,
    rgba(255, 254, 234, 1) 35%,
    rgba(183, 232, 235, 1) 100%
  );
  .intro-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    animation: zoomIn;
    animation-duration: 1.5s;
    color: #b7e8eb;
    font-weight: 800;
    font-size: 8rem;
    animation: zoomIn;
    animation-duration: 2s;
  }
`;

export default function Intro() {
  return (
    <IntroStyle>
      <Ocean>
        <Wave></Wave>
        <Wave></Wave>
        <Button />
      </Ocean>
      <section id="intro">
        <div className="intro-box">
          <span className="intro">{`Jiah's Portfolio`}</span>
        </div>
      </section>
    </IntroStyle>
  );
}
