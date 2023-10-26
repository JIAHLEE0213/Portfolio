import React, { useState } from 'react';
import { Projects } from '../constants/projects';
import styled from 'styled-components';
import Detail from '../components/detail';

export default function Project() {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };
  const closeModal = () => {
    setIsModal(false);
  };

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
              <div className="project-detail">
                <button className="detail-button" onClick={openModal}>
                  Detail
                </button>
              </div>
            </ListStyle>
          ))}
        </div>
      </div>
      {isModal && <Detail closeModal={closeModal} />}
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
  .project-detail {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .detail-button {
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
`;
