import React from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import styled from 'styled-components';

export default function Top() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <TopStyle className="button-box" onClick={scrollToTop}>
      <FaArrowAltCircleUp className="icon" />
    </TopStyle>
  );
}

const TopStyle = styled.div`
  display: flex;
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  background-color: white;
  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.09);
  .icon {
    font-size: 50px;
    color: #98afba;
  }
`;
