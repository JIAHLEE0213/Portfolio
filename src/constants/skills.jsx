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
import { SiVercel } from 'react-icons/si';

export const Frontend = [
  {
    stack: 'frontend',
    icon: <RiJavascriptFill />,
    name: 'Javascript',
    color: '#ffcc00', // Specify the color you want
  },
  {
    stack: 'frontend',
    icon: <AiFillHtml5 />,
    name: 'HTML',
    color: '#e34c26',
  },
  {
    stack: 'frontend',
    icon: <FaCss3Alt />,
    name: 'CSS',
    color: '#2965f1',
  },
  {
    stack: 'frontend',
    icon: <SiTypescript />,
    name: 'Typescript',
    color: '#3178c6',
  },
];

export const Library = [
  {
    stack: 'Library',
    icon: <FaReact />,
    name: 'React',
    color: '#61dafb',
  },
  {
    stack: 'Library',
    icon: <SiRedux />,
    name: 'Redux',
    color: '#764abc',
  },
  {
    stack: 'Library',
    icon: <SiStyledcomponents />,
    name: 'Styled-components',
    color: '#db7093',
  },
];

export const Etc = [
  {
    stack: 'ETC',
    icon: <FaNodeJs />,
    name: 'Node.js',
    color: '#8cc84b',
  },
  {
    stack: 'ETC',
    icon: <FaFigma />,
    name: 'Figma',
    color: '#f24e1e',
  },
  {
    stack: 'ETC',
    icon: <AiFillGithub />,
    name: 'Github',
    color: '#333',
  },
  {
    stack: 'ETC',
    icon: <FaAws />,
    name: 'AWS',
    color: '#ff9900',
  },
  {
    stack: 'ETC',
    icon: <SiPostman />,
    name: 'Postman',
    color: '#ff6c37',
  },
  {
    stack: 'ETC',
    icon: <SiVercel />,
    name: 'Vercel',
    color: '#000000',
  },
];
