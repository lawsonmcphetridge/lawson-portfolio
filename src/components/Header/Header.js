import React from 'react'
import './Header.scss'
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className='main-header'>
      <NavLink to='/' className='about'>
        About
      </NavLink>
      <NavLink to='/skills' className='skills'>
        Skills
      </NavLink>
      <NavLink to='/contact' className="contact">Contact</NavLink>
    </div>
  );
}
