import React from 'react';
import styled from 'styled-components';

export default function Header() {
  const categoryItems = [
    { label: 'ABOUT', id: 'contact' },
    { label: 'SKILL', id: 'skill' },
    { label: 'PROJECT', id: 'project' },
  ];

  return (
    <HeaderStyle>
      <div className="header">
        <div className="header-logo">JIAH</div>
        <ul className="header-category">
          {categoryItems.map((item) => (
            <CategoryItem key={item.id} className="header-categoty-items">
              {item.label}
            </CategoryItem>
          ))}
        </ul>
      </div>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding: 0px 24px;
  margin: 10px 24px;
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
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
    padding: 0;
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
