import React from 'react';
import styled, { keyframes } from 'styled-components';
import { TbArrowBigDownLinesFilled } from 'react-icons/tb';

export default function Button() {
  return (
    <ButtonStyle className="button-box">
      <Arrow />
    </ButtonStyle>
  );
}

const ArrowAnimation = keyframes`
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
`;

const ButtonStyle = styled.button`
  display: flex;
  position: relative;
  margin: 0 auto;
  bottom: 40px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 50px;
  height: 50px;
  background-color: #98afba;
  border: none;
  border-radius: 50%;
  animation: ${ArrowAnimation} 2s infinite;
`;

const Arrow = styled(TbArrowBigDownLinesFilled)`
  font-size: 30px;
  color: #ffffff;
`;
