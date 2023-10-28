import React from 'react';
import PropTypes from 'prop-types';
import { Projects } from '../constants/projects';
import styled from 'styled-components';
import { AiFillCloseCircle } from 'react-icons/ai';

export default function Detail({ closeModal }) {
  return (
    <DetailStyle>
      {Projects.map(
        ({
          project,
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
            <div className="close-container" onClick={closeModal}>
              <AiFillCloseCircle className="close-button" />
            </div>
            <div className="explain1-box">
              <div className="detail-img">{img}</div>
              <div className="project-box">
                <DetailBox className="members-box">
                  <p className="project">{project}</p>
                  <div className="explain-members">{members}</div>
                </DetailBox>
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
              </div>
            </div>

            <div className="explain-container">
              <div className="explain2-box">
                <DetailBox className="period-box">
                  <p>기간</p>
                  <div className="explain-period">{period}</div>
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
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
  margin-top: 20px;
  .detail-container {
    position: fixed;
    display: flex;
    flex-direction: row;
    background-color: white;
    box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.09);
    border-radius: 10px;
    padding: 2rem;
    height: 32rem;
    width: 750px;
  }
  .explain-container {
    display: flex;
    height: 100%;
    width: 100%;
  }
  .explain1-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 70%;
  }
  .explain2-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin-left: 1.5rem;
  }
  img {
    width: 300px;
    height: 200px;
    border-radius: 10px 10px 0px 0px;
  }
  .close-button {
    font-size: 40px;
    position: absolute;
    background: none;
    border: none;
    top: 10px;
    right: 10px;
    cursor: pointer;
    color: #9ce7eb;
  }
`;

const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  a {
    color: gray;
  }
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
    margin-bottom: 15px;
  }
  &.members-box {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .explain-members {
    margin-left: 10px;
    padding-top: 15px;
  }
  .explain-impl {
    margin: 0;
    padding-left: 25px;
  }
  .project {
    font-size: 1.8rem;
  }
`;
Detail.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
