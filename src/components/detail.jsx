import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GrDeploy } from 'react-icons/gr';
import { AiFillGithub } from 'react-icons/ai';

export default function Detail({ project }) {
  return (
    <DetailStyle>
      <div key={project.title} className="detail-container">
        <div className="explain1-box">
          <div className="detail-img">
            <img src={project.img.props.src} alt={project.title} />
          </div>
          <div className="project-box">
            <div className="deployrepo-box">
              <div className="deploy-box">
                <DeployRepo
                  className="explain-deploy"
                  onClick={() => window.open(project.deploy, '_blank')}
                >
                  <div className="icon">
                    <GrDeploy />
                  </div>
                  <p>Deploy</p>
                  <a
                    href={project.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </DeployRepo>
              </div>
              <div className="repository-box">
                <DeployRepo
                  className="explain-repository"
                  onClick={() => window.open(project.repository, '_blank')}
                >
                  <div className="icon">
                    <AiFillGithub />
                  </div>
                  <p>Repository</p>
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </DeployRepo>
              </div>
            </div>
            <DetailBox className="members-box">
              <p className="project">{project.project}</p>
              <div className="explain-members">{project.members}</div>
            </DetailBox>
            <DetailBox className="period-box">
              <p>기간</p>
              <div className="explain-period">{project.period}</div>
            </DetailBox>
            <DetailBox className="stacks-box">
              <p>스택</p>
              <div className="explain-stacks">{project.stacks}</div>
            </DetailBox>
          </div>
        </div>

        <div className="explain-container">
          <div className="explain2-box">
            <DetailBox className="pr-box">
              <p>소개</p>
              <div className="explain-pr">{project.introduce}</div>
            </DetailBox>
            <DetailBox className="impl-box">
              <p>구현 기능</p>
              <ul className="explain-impl">
                {project.implement.map((item, index) => (
                  <li key={index} className="impl-li">
                    {item}{' '}
                  </li>
                ))}
              </ul>
            </DetailBox>
          </div>
        </div>
      </div>
    </DetailStyle>
  );
}

const DetailStyle = styled.div`
  display: flex;
  font-size: 1.1rem;
  .detail-container {
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.09);
    border-radius: 10px;
    padding: 2rem;
    height: 57vh;
    overflow-y: auto;
    width: 55vw;
    scrollbar-width: thin;
    scrollbar-color: transparent;
    &::-webkit-scrollbar {
      width: 6px; /* 스크롤바의 너비 */
    }

    &::-webkit-scrollbar-thumb {
      background-color: transparent; /* 스크롤바 색상 */
    }
  }
  .explain-container {
    display: flex;
    height: 100%;
    width: 100%;
  }
  .explain1-box {
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
  }
  .deployrepo-box {
    display: flex;
    flex-direction: row;
  }
  .explain2-box {
    display: flex;
    flex-direction: column;
  }
  .detail-img {
    display: flex;
    align-items: center;
  }
  img {
    display: flex;
    width: 330px;
    height: 200px;
    margin-right: 20px;
    border-radius: 10px 10px 0px 0px;
  }
  .project-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
  @media (max-width: 900px) {
    img {
      display: none;
    }
    .explain1-box {
      margin: 0;
    }
  }
  @media screen and (width: 375px) and (width: 600px) {
    .detail-container {
      padding: 1rem;
      width: 70vw;
      height: 100vw;
    }
  }
`;

const DeployRepo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
  margin: 0px 10px 10px 0px;
  p {
    text-decoration: underline;
    margin: 0;
  }
  .icon {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    margin-right: 2px;
  }
`;

const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  a {
    color: gray;
  }
  p {
    font-size: 1.4rem;
    font-weight: 700;
    background-image: linear-gradient(
      90deg,
      rgba(255, 254, 234, 1),
      rgba(183, 232, 235, 1)
    );
    background-position: bottom;
    background-size: 100%;
    background-repeat: no-repeat;
    width: fit-content;
    margin: 0;
    margin-bottom: 5px;
  }
  &.members-box {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .explain-members {
    margin-left: 0.7rem;
  }
  .explain-impl {
    margin: 0;
    padding-left: 1.8rem;
  }
  .project {
    font-size: 1.6rem;
  }
  .explain-pr {
    margin-bottom: 20px;
  }
  li {
    margin-bottom: 10px;
  }

  @media (max-width: 900px) {
    &.period-box {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .explain-period {
      margin-left: 0.7rem;
    }
    .explain-pr {
      margin: 0;
    }
  }
  @media screen and (min-width: 375px) and (max-width: 600px) {
    font-size: 0.6rem;
    p {
      font-size: 0.8rem;
    }
    .explain-members {
      font-size: 0.8rem;
    }
    .project {
      font-size: 1.2rem;
    }
  }
`;
Detail.propTypes = {
  project: PropTypes.object.isRequired,
};
