import React, { useState } from 'react';
import styled from 'styled-components';

export default function Header() {
  const categoryItems = [
    { label: 'ABOUT', id: 'about' },
    { label: 'SKILL', id: 'skill' },
    { label: 'PROJECT', id: 'project' },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  const scrollToSection = (sectionid) => {
    const section = document.getElementById(sectionid);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const headerMenu = (itemid) => {
    setSelectedItem(itemid === selectedItem ? null : itemid);
    if (itemid) {
      scrollToSection(itemid);
    }
  };
  return (
    <HeaderStyle>
      <div className="header">
        <div className="header-logo" onClick={scrollToTop}>
          JIAH
        </div>
        <ul className="header-category">
          {categoryItems.map((item) => (
            <CategoryItem
              key={item.id}
              className="header-categoty-items"
              onClick={() => headerMenu(item.id)}
            >
              {item.label}
            </CategoryItem>
          ))}
        </ul>
      </div>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  width: 100%;
  background-color: white;
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 20px 30px;
  }
  .header-logo {
    display: flex;
    flex-direction: row;
    font-size: 1.75rem;
    font-weight: 500;
    padding-left: 36px;
    cursor: pointer;
  }
  .header-category {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 0px 10px 0px 0px;
  }
  @media screen and (min-width: 375px) and (max-width: 440px) {
    .header-logo {
      padding: 0;
    }
    .header-categoty-items {
      font-size: 0.9rem;
    }
  }
`;

const CategoryItem = styled.li`
  display: flex;
  padding: 0px 8px;
  font-size: 1rem;
  font-weight: 500;
  align-items: center;
  cursor: pointer;
`;
