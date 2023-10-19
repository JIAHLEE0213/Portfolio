import React from 'react';
import styled from 'styled-components';
import Button from '../components/button';

export default function About() {
  return (
    <ProfileBox>
      <div className="about-box">
        <ul>
          <li>
            <span className="underline">개인의 성장이</span>
            <br />
            {`곧 `}
            <span className="underline">
              <span className="strong">기업의 성장</span>
            </span>
            이라 생각합니다.
          </li>
          <li>
            {`새로운 `}
            <span className="strong">기술</span>
            {`을 익히고 `}
            <br />
            <span className="underline">
              <span className="strong">협업</span>
              {`을 통해 `}
              <span className="storng">문제를 해결</span>하는 과정에서
            </span>
            <br />
            {` 즐거움을 느낍니다.`}
          </li>
        </ul>
        <div className="contact-container">
          <div className="github"></div>
          <div className="Email"></div>
          <div className="velog"></div>
        </div>
      </div>
      <Button />
    </ProfileBox>
  );
}

const ProfileBox = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .about-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 7rem;

    @media (max-width: 900px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      ul {
        margin: 2rem 0;
      }
      li {
        width: 80vw;
        margin: auto;
        text-align: center;
        font-size: 1.2rem;
      }
      .strong {
        font-size: 1.3rem;
      }
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
  }
  li {
    width: 30vw;
    font-size: 2rem;
    line-height: 3rem;
    margin: 2rem 8rem 4rem 8rem;
    list-style: none;
  }
  .strong {
    font-size: 2.5rem;
    font-weight: 800;
  }
  .underline {
    background-image: linear-gradient(
      90deg,
      rgba(255, 254, 234, 1),
      rgba(183, 232, 235, 1)
    );
    background-position: bottom;
    background-size: 100% 30%;
    background-repeat: no-repeat;
  }
  .card-container {
    margin-bottom: 3rem;

    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;
