import React from 'react';

export const Projects = [
  {
    img: (
      // eslint-disable-next-line no-undef
      <img src={process.env.PUBLIC_URL + '/img/Celebee.png'} alt="Celebee" />
    ),
    title: 'Celebee',
    subtitle:
      '나와 같은 관심사를 가진 친구를 찾기 위해 모임 생성 및 참여를 할 수 있는 페이지를 개발하였습니다.',
    members: 'FE : 3명, BE : 3명',
    period: '23.08.24 ~ 23.09.22',
    deploy: 'https://celebee.kro.kr/',
    repository: 'https://github.com/JIAHLEE0213/Celebee',
    introduce: '모임',
    implement: ['Figma 작업', '무한 스크롤', '카카오 OAuth'],
    stacks: 'React, React Router, Redux, Style-Component, AWS, Node.js, Axios',
  },
];
