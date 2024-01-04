import React from 'react';

export const Projects = [
  {
    img: (
      // eslint-disable-next-line no-undef
      <img
        src={process.env.PUBLIC_URL + '/img/Portfolio.png'}
        alt="Portfolio"
      />
    ),
    project: 'Solo Project',
    title: 'Portfolio',
    subtitle: '취업을 위한 프론트엔드 개발자 포트폴리오입니다.',
    members: 'Solo',
    period: '23.10.13 ~ 23.11.11',
    deploy: 'https://jiah-portfolio.vercel.app/',
    repository: 'https://github.com/JIAHLEE0213/portfolio',
    introduce:
      '프론트엔드 개발자로서 취업을 위한 프로젝트입니다. 차별점을 둔 포트폴리오를 보여드리기 위해 웹 제작을 하였으며 Vercel을 통해 원활한 배포가 이루어졌습니다.',
    implement: [
      '스크롤 이벤트를 통해 페이지 상호작용을 높여 사용자에게 더욱 동적이고 흥미로운 경험을 제공하였습니다.',
      '포트폴리오 페이지에 사용자의 경험을 올리기 위해 애니메이션 효과를 적용하여 시각적인 효과를 극대화했습니다.',
      'Vercel을 활용하여 자동화된 배포 프로세스를 구축하여 웹 애플리케이션의 효율적이고 신속한 업데이트가 이루어질 수 있도록 하였습니다.',
      '다양한 디바이스에 최적화된 반응형 웹 페이지를 개발하여 사용자 경험을 향상시켰습니다. ',
    ],
    stacks: 'React, Styled-components, Node.js, Vercel',
  },
  {
    img: (
      // eslint-disable-next-line no-undef
      <img src={process.env.PUBLIC_URL + '/img/Celebee.png'} alt="Celebee" />
    ),
    project: 'Team Project',
    title: 'Celebee',
    subtitle:
      '나와 같은 관심사를 가진 친구를 찾기 위해 모임 생성 및 참여를 할 수 있는 페이지를 개발하였습니다.',
    members: 'FE : 3명, BE : 3명',
    period: '23.08.24 ~ 23.09.22',
    deploy: 'https://celebee.kro.kr/',
    repository: 'https://github.com/JIAHLEE0213/Celebee',
    introduce:
      "'Celebee'는 내가 관심있는 분야의 모임을 생성하고 참여도 하며 새로운 친구를 사귀고 함께 활동을 하기 위한 페이지를 만들었습니다.",
    implement: [
      '기획 회의를 거쳐 팀원들의 의견을 통합하여 Figma를 활용해 디자인을 제작하였고, FE 팀원들이 일관된 환경에서 마크업 작업을 진행할 수 있도록 지원했습니다.',
      'Home page에서 모든 모임을 한눈에 파악할 수 있도록 구성하였으며, 카테고리 및 좋아요 순으로 손쉽게 필터링할 수 있는 기능을 도입하여 사용자가 원하는 정보를 빠르게 찾을 수 있도록 했습니다.',
      '무한 스크롤을 구현하여 사용자가 웹 페이지에 머무는 시간을 증가시켜 향상된 사용자 경험을 제공했습니다.',
      '사용자 편의성을 고려한 디자인으로 회원가입 페이지를 구현하여, 웹 사이트의 가입 프로세스를 간소화하고 스마트하게 제공했습니다.',
      '카카오 OAuth 로그인을 통해 웹 페이지에 간편하게 접근할 수 있는 사용자 친화적인 환경을 조성하여 웹 경험을 향상시켰습니다.',
    ],
    stacks:
      'React, React Router, Redux, Styled-components, AWS, Node.js, Axios',
  },
];
