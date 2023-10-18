import React from 'react';
import styled from 'styled-components';
import { TbArrowBigDownLinesFilled } from 'react-icons/tb';

export default function Button() {
  return (
    <ButtonStyle className="button-box">
      <Arrow />
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 50px;
  height: 50px;
  background-color: grey;
  border: none;
  border-radius: 30px;
`;

const Arrow = styled(TbArrowBigDownLinesFilled)`
  z-index: 100%;
  font-size: 40px;
  color: #ffffff;
`;
