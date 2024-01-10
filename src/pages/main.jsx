import React, { useRef } from 'react';
import Project from '../section/project';
import About from '../section/about';
import Skill from '../section/skill';
import Top from '../components/Top';
import Intro from '../section/Intro';

export default function Main() {
  const sections = [
    { id: 'intro', component: <Intro /> },
    { id: 'about', component: <About /> },
    { id: 'skill', component: <Skill /> },
    { id: 'project', component: <Project /> },
  ];

  const index = useRef(0);

  function scrollToSection(targetIndex = index.current) {
    index.current = targetIndex;
    const sectionId = sections[targetIndex].id;
    window.scrollTo({
      top:
        document.getElementById(sectionId).getBoundingClientRect().top +
        window.scrollY,
      behavior: 'smooth',
    });
  }
  function nextClick() {
    if (index.current < sections.length - 1) {
      scrollToSection(index.current + 1);
    } else {
      scrollToSection(0);
    }
  }

  return (
    <div className="">
      {sections.map((section) => (
        <section key={section.id} id={section.id}>
          {React.cloneElement(section.component, {
            nextClick: nextClick,
          })}
        </section>
      ))}
      <Top />
    </div>
  );
}
