import React, { useState } from 'react';
import styled from 'styled-components';
import { Projects } from '../constants/projects';
import Detail from '../components/detail';

export default function Project() {
  const [selectedTab, setSelectedTab] = useState(null);

  const handleClick = (project) => {
    setSelectedTab(project);
  };

  return (
    <ProjectStyle>
      <div className="project-container">
        <div className="text-project">PROJECTS</div>
        <div className="project-lists">
          {Projects.map((project) => (
            <button
              className="project-tab"
              key={project.title}
              onClick={() => handleClick(project)}
            >
              {project.title}
            </button>
          ))}
        </div>
        <div className="project-list">
          {selectedTab && <Detail project={selectedTab} />}
        </div>
      </div>
    </ProjectStyle>
  );
}

const ProjectStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(
    100deg,
    rgba(255, 254, 234, 1) 0%,
    rgba(255, 254, 234, 1) 35%,
    rgba(183, 232, 235, 1) 100%
  );

  .project-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .text-project {
    color: rgba(67, 174, 186, 1);
    font-size: 3rem;
    font-weight: 700;
  }

  ${({ isModal }) =>
    isModal &&
    `
      &:before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3); 
      }
    `}

  .project-lists {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .project-tab {
    display: flex;
    justify-content: center;
    border-radius: 40px;
    font-size: 1.4rem;
    font-weight: 500;
    width: 160px;
    margin: 1rem 2rem;
    padding: 0.5rem 0rem;
    background-color: white;
    box-shadow: rgba(149, 160, 165, 0.5) 0px 8px 24px;
    border: none;
  }
  .project-tab:hover {
    cursor: pointer;
  }
  @media screen and (min-width: 375px) and (max-width: 440px) {
    .text-project {
      font-size: 2rem;
      margin: 2rem 0;
    }
  }
`;
