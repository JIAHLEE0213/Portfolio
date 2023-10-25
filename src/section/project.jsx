import React from 'react';
import { Projects } from '../constants/projects';
import styled from 'styled-components';

export default function Project() {
  return (
    <ProjectStyle>
      <div className="project-container">
        <div className="project-title">
          <h1 className="text-project">Project</h1>
          <h2 className="text-click">click</h2>
        </div>
        <ListStyle className="project-list">
          {Projects.map(({ img, title, subtitle }) => (
            <div key={title} className="project">
              <div className="project-img">{img}</div>
              <div className="project-text">
                <p className="project-title">{title}</p>
                <p className="project-subtitle">{subtitle}</p>
              </div>
            </div>
          ))}
        </ListStyle>
      </div>
    </ProjectStyle>
  );
}

const ProjectStyle = styled.div`
  display: flex;
  flex-direction: column;
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
  }
`;

const ListStyle = styled.div`
  display: flex;
  width: 310px;
  height: 460px;
  background-color: white;
  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.08);
  border-radius: 10px;

  img {
    width: 100%;
    height: 200px;
    border-radius: 10px 10px 0px 0px;
  }
  .project-title {
    font-size: 1.8rem;
    font-weight: 600;
  }
  .project-text {
    padding: 0 3vw;
  }
`;
