import React from 'react';
import { Projects } from '../constants/projects';

export default function Detail() {
  return (
    <div className="detail-container">
      <div className="detail-img"></div>
      <div className="explain-container">
        {Projects.map(
          ({
            title,
            members,
            period,
            deploy,
            repository,
            introduce,
            implement,
            stacks,
          }) => (
            <div key={title} className="explain-box">
              <div className="explain-deploy">{deploy}</div>
              <div className="explain-repo">{repository}</div>
              <div className="explain-period">{period}</div>
              <div className="explain-members">{members}</div>
              <div className="explain-pr">{introduce}</div>
              <ul className="explain-impl">
                {implement.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="explain-stacks">{stacks}</div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
