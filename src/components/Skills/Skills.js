import React from 'react';
import './Skills.scss';

export default function Skills() {
  return (
    <div className='main'>
      <div className='skills-section'>
        <h2 className='skills-title'>Skills</h2>
        <div className='skills'>
          <div className='logo-wrapper'>
            <span>HTML</span>
            <img
              className='logo'
              src='../images/HTML5v2.svg'
              alt='html-logo'
            ></img>
          </div>

          <div className='logo-wrapper'>
            <span>CSS</span>
            <img className='logo' src='../images/CSS.svg' alt='css-logo'></img>
          </div>
          <div className='logo-wrapper'>
            <span>JavaScript</span>
            <img
              className='logo'
              src='../images/JS.svg'
              alt='javascript-logo'
            ></img>
          </div>

          <div className='logo-wrapper'>
            <span>React</span>
            <img
              className='logo'
              src='../images/react-logo.png'
              alt='react-logo'
            ></img>
          </div>
          <div className='logo-wrapper'>
            <span>Redux</span>
            <img
              className='logo'
              src='../images/redux-logo.png'
              alt='redux-logo'
            ></img>
          </div>
          <div className='logo-wrapper'>
            <span>TypeScript</span>
            <img
              className='logo'
              src='../images/typescript-logo.png'
              alt='typescript-logo'
            ></img>
          </div>

          <div className='logo-wrapper'>
            <span>PostgreSQL</span>
            <img
              className='logo'
              src='../images/postgreSQL-logo.png'
              alt='postgreSQL-logo'
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
