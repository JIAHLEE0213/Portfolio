import React from 'react';
import { Projects } from '../constants/projects';
import styled from 'styled-components';

export default function Detail() {
  return (
    <DetailStyle>
      {Projects.map(
        ({
          img,
          title,
          members,
          period,
          deploy,
          repository,
          introduce,
          implement,
          stacks,
        }) => (
          <div key={title} className="detail-container">
            <div className="detail-img">{img}</div>
            <div className="explain-container">
              <div className="explain-box">
                <DetailBox className="deploy-box">
                  <p>Deploy</p>
                  <a href={deploy} target="_blank" rel="noopener noreferrer">
                    <div className="explain-deploy">{deploy}</div>
                  </a>
                </DetailBox>
                <DetailBox className="repository-box">
                  <p>Repository</p>
                  <a
                    href={repository}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="explain-repo">{repository}</div>
                  </a>
                </DetailBox>
                <DetailBox className="period-box">
                  <p>기간</p>
                  <div className="explain-period">{period}</div>
                </DetailBox>
                <DetailBox className="members-box">
                  <p>멤버</p>
                  <div className="explain-members">{members}</div>
                </DetailBox>
                <DetailBox className="pr-box">
                  <p>소개</p>
                  <div className="explain-pr">{introduce}</div>
                </DetailBox>
                <DetailBox className="impl-box">
                  <p>구현 기능</p>
                  <ul className="explain-impl">
                    {implement.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </DetailBox>
                <DetailBox className="stacks-box">
                  <p>스택</p>
                  <div className="explain-stacks">{stacks}</div>
                </DetailBox>
              </div>
            </div>
          </div>
        ),
      )}
    </DetailStyle>
  );
}

const DetailStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .detail-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px black solid;
    box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    padding: 2rem;
  }
  .explain-container {
    margin-left: 2rem;
    align-items: center;
  }
  img {
    width: 100%;
    height: 200px;
    border-radius: 10px 10px 0px 0px;
  }
`;

const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 1.3rem;
    font-weight: 600;
    background-image: linear-gradient(
      90deg,
      rgba(255, 254, 234, 1),
      rgba(183, 232, 235, 1)
    );
    background-position: bottom;
    background-size: 100%;
    background-repeat: no-repeat;
    width: fit-content;
  }
`;
