import React from 'react';
import styled, { keyframes } from 'styled-components';
import { TbArrowBigDownLinesFilled } from 'react-icons/tb';
import PropTypes from 'prop-types';

export default function Button({ onClick }) {
  return (
    <ButtonStyle className="button-box" onClick={onClick}>
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

Button.propTypes = { onClick: PropTypes.func.isRequired };
