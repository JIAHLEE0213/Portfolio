import React from 'react';
import { Projects } from '../constants/projects';
import styled from 'styled-components';
import Button from '../components/button';

export default function Project() {
  return (
    <ProjectStyle>
      <div className="project-container">
        <div className="text-project">Project</div>
        <div className="project-list">
          {Projects.map(({ img, title, subtitle }) => (
            <ListStyle key={title} className="project">
              <div className="project-img">{img}</div>
              <div className="project-text">
                <p className="project-title">{title}</p>
                <p className="project-subtitle">{subtitle}</p>
              </div>
            </ListStyle>
          ))}
        </div>
      </div>
      <Button />
    </ProjectStyle>
  );
}

const ProjectStyle = styled.div`
  display: flex;
  flex-direction: column;
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
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .text-project {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 2rem 0rem;
  }
  .project-list {
  }
`;

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
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
