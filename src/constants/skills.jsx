import React from 'react';
import {
  SiTypescript,
  SiRedux,
  SiStyledcomponents,
  SiPostman,
} from 'react-icons/si';
import { RiJavascriptFill } from 'react-icons/ri';
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaNodeJs, FaFigma, FaAws } from 'react-icons/fa';

export const Frontend = [
  {
    stack: 'frontend',
    icon: <RiJavascriptFill />,
    name: 'Javascript',
  },
  {
    stack: 'frontend',
    icon: <AiFillHtml5 />,
    name: 'HTML',
  },
  {
    stack: 'frontend',
    icon: <FaCss3Alt />,
    name: 'CSS',
  },
  {
    stack: 'frontend',
    icon: <SiTypescript />,
    name: 'Typescript',
  },
];

export const Library = [
  {
    stack: 'Library',
    icon: <FaReact />,
    name: 'React',
  },
  {
    stack: 'Library',
    icon: <SiRedux />,
    name: 'Redux',
  },
  {
    stack: 'Library',
    icon: <SiStyledcomponents />,
    name: 'Styled-components',
  },
];

export const Etc = [
  {
    stack: 'ETC',
    icon: <FaNodeJs />,
    name: 'Node.js',
  },
  {
    stack: 'ETC',
    icon: <FaFigma />,
    name: 'Figma',
  },
  {
    stack: 'ETC',
    icon: <AiFillGithub />,
    name: 'Github',
  },
  {
    stack: 'ETC',
    icon: <FaAws />,
    name: 'AWS',
  },
  {
    stack: 'ETC',
    icon: <SiPostman />,
    name: 'Postman',
  },
];
