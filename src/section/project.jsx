import React, { useState } from 'react';
import { Projects } from '../constants/projects';
import styled from 'styled-components';
import Detail from '../components/detail';

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModal, setIsModal] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModal(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModal(false);
  };

  return (
    <ProjectStyle isModal={isModal}>
      <div className="project-container">
        <div className="text-project">Project List</div>
        <div className="project-list">
          {Projects.map((project) => (
            <ListStyle key={project.title} className="project">
              <div className="project-img">{project.img}</div>
              <div className="project-text">
                <p className="project-title">{project.title}</p>
                <p className="project-subtitle">{project.subtitle}</p>
              </div>
              <div className="project-detail">
                <button
                  className="detail-button"
                  onClick={() => openModal(project)}
                >
                  Detail
                </button>
              </div>
            </ListStyle>
          ))}
        </div>
      </div>
      {isModal && selectedProject && (
        <Detail project={selectedProject} closeModal={closeModal} />
      )}
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
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .text-project {
    color: rgba(67, 174, 186, 1);
    font-size: 3rem;
    font-weight: 700;
    margin: 2rem 0rem 3rem 0rem;
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
  .project-list {
    display: flex;
    flex-direction: row;
  }
  @media screen and (min-width: 375px) and (max-width: 440px) {
    .text-project {
      font-size: 2rem;
      margin: 2rem 0;
    }
  }
`;

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 310px;
  height: 29rem;
  background-color: white;
  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  margin: 0 2rem;
  img {
    width: 100%;
    height: 200px;
    border-radius: 10px 10px 0px 0px;
  }
  .project-title {
    color: #4b4a54;
    font-size: 1.8rem;
    font-weight: 600;
  }
  .project-subtitle {
    font-size: 1rem;
  }
  .project-text {
    padding: 0 2rem;
  }
  .project-detail {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 100%;
  }
  .detail-button {
    margin-bottom: 20px;
    font-size: 1rem;
    font-weight: 600;
    color: white;
    width: 100px;
    height: 40px;
    border-radius: 20px;
    border: 0;
    background: #9ce7eb;
    cursor: pointer;
    transition: box-shadow 0.3s ease;
  }
  .detail-button:hover {
    box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.2);
  }
  .detail-button:active,
  .detail-button:focus {
    box-shadow: inset 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
  }
  @media screen and (min-width: 375px) and (max-width: 440px) {
    width: 15rem;
    height: 21rem;
    img {
      width: 100%;
      height: 150px;
    }
    .project-text {
      padding: 0.5rem 0.8rem 0 0.8rem;
    }
    .project-title {
      margin: 0;
      font-size: 1.4rem;
    }
    .project-subtitle {
      font-size: 0.9rem;
      margin: 0.5rem 0rem;
    }
    .project-detail {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
    .detail-button {
      width: 85px;
      height: 35px;
      font-size: 1rem;
    }
  }
`;
