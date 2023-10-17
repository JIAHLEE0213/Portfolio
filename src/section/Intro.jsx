import React from 'react';
import styled from 'styled-components';
import 'animate.css';

export default function Intro() {
  return (
    <IntroStyle>
      <section id="intro">
        <div className="intro-box">
          <ul className="intro">
            <li>{`Jiah's`}</li>
            <li>portfolio</li>
          </ul>
        </div>
      </section>
    </IntroStyle>
  );
}

const IntroStyle = styled.div`
  height: 100vh;
  background-image: linear-gradient(100deg, #74ebd5, #acb6e5);
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
    color: white;
  }
  li {
    font-weight: 800;
    font-size: 8rem;
  }
`;
