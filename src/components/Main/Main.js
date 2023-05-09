import React from 'react';
import './Main.scss';

const Main = () => {
  return (
    <div className='main'>
      <div className='introduction'>
        <h1 className='name'>Hello, I'm Lawson McPhetridge</h1>
        <p className='paragraph'>
          I'm a certified full-stack web developer and UI/UX specialist with
          over two years of experience creating dynamic, user-friendly websites
          and web applications. My focus is on creating clean, scalable code and
          intuitive, engaging interfaces that help users achieve their goals. My
          proficiency includes expertise in React, Node.js, and MongoDB. I
          believe that a strong focus on user experience is essential to
          creating successful web applications, and I'm dedicated to delivering
          high-quality solutions to my clients.
        </p>
        <div className='resume-btn-container'>
          <a
            href='lawson-resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='resume-btn'
          >
            View My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
