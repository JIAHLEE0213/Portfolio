import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import styled from 'styled-components';

export default function Top() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <TopStyle
      className={`button-box ${isVisible ? 'visible' : 'hidden'}`}
      onClick={scrollToTop}
    >
      <FaArrowAltCircleUp className="icon" />
    </TopStyle>
  );
}

const TopStyle = styled.div`
  display: flex;
  position: fixed;
  bottom: 30px;
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
  &.visibla {
    display: flex;
  }
  &.hidden {
    display: none;
  }
  @media screen and (min-width: 375px) and (max-width: 440px) {
    width: 35px;
    height: 35px;

    .icon {
      font-size: 35px;
    }
  }
`;
