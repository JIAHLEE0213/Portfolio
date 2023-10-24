import React, { useState } from 'react';
import { Frontend, Library, Etc } from '../constants/skills';
import styled from 'styled-components';

export default function Skill() {
  const [selectedStack, setSelectedStack] = useState('frontend');

  const handleStackButtonClick = (stack) => {
    setSelectedStack(stack);
  };

  let skillsToDisplay = [];
  if (selectedStack === 'frontend') {
    skillsToDisplay = Frontend;
  } else if (selectedStack === 'Library') {
    skillsToDisplay = Library;
  } else if (selectedStack === 'ETC') {
    skillsToDisplay = Etc;
  }

  return (
    <SkillStyle>
      <div className="skill-container">
        <div className="stack-box">
          <button
            onClick={() => handleStackButtonClick('frontend')}
            className="stack-button"
          >
            Frontend
          </button>
          <button
            onClick={() => handleStackButtonClick('Library')}
            className="stack-button"
          >
            Library
          </button>
          <button
            onClick={() => handleStackButtonClick('ETC')}
            className="stack-button"
          >
            ETC
          </button>
        </div>
        <div className="skills-list">
          {skillsToDisplay.map((skill, index) => (
            <ListStyle key={index} className="skills-box">
              <div className="skill-icon">{skill.icon}</div>
              <p className="skill-name">{skill.name}</p>
            </ListStyle>
          ))}
        </div>
      </div>
    </SkillStyle>
  );
}

const SkillStyle = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  .skill-container {
    display: flex;
    align-items: center;
  }
  .stack-box {
    display: flex;
    flex-direction: column;
  }
  .stack-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border: 5px solid transparent; /* 투명한 선을 만듭니다. */
    border-radius: 50%;
    border-image: linear-gradient(
      90deg,
      rgba(255, 254, 234, 1),
      rgba(183, 232, 235, 1)
    );
    border-image-slice: 1; /* 테두리의 양쪽 모두에 그라데이션을 적용합니다. */
    background-color: white;
    cursor: pointer;
    margin: 2rem 15rem 2rem 5rem;
  }
  .skills-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    .skill-container {
      flex-direction: column;
    }
    .stack-box {
      flex-direction: row;
    }
    .stack-button {
      margin: 1rem 1.5rem;
    }
    .skills-list {
      height: 30vh;
    }
  }
`;

const ListStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid black;
  width: 160px;
  height: 70px;
  margin: 1.5rem;
  padding: 0 0.5rem;
  .skill-icon {
    display: flex;
    align-items: center;
    padding: 0px 13px;
    font-size: 1.5rem;
  }
`;
