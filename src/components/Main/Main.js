import React from 'react'
import './Main.scss'


export default function Main() {
  return (
    <main className='main-content'>
      <div className='introduction'>
        <div className='name'>Hello, my name is Lawson McPhetridge</div>

        <div className='paragraph'>
          I am a certified full stack web developer and UI/UX javascript
          specialist with 2 years of experience creating dynamic, user-friendly
          websites and web applications. I have worked on projects ranging from
          small-scale websites for local businesses to large-scale enterprise
          applications. My proficiency includes expertise in React, Node.js, and
          MongoDB. I believe that a strong focus on user experience is essential
          to creating successful web applications, and I am dedicated to
          creating intuitive, engaging interfaces that help users achieve their
          goals.
        </div>

        <a
          href='lawson-resume.pdf'
          target='_blank'
        >
          Resume
        </a>
      </div>
    </main>
  );
}
