import React from 'react';
import './Skills.scss'

export default function Skills() {
  return (
    <div className='main'>
      <div className='skills'>
        <div className='logo-wrapper'>
          <span>JavaScript</span>
          <img
            className='logo'
            src='../images/js-logo.png'
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
          <span>HTML</span>
          <img
            className='logo'
            src='../images/html-logo.png'
            alt='html-logo'
          ></img>
        </div>
        <div className='logo-wrapper'>
          <span>CSS</span>
          <img
            className='logo'
            src='../images/css-logo.png'
            alt='css-logo'
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
  );
}
