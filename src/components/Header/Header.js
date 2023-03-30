import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className='main-header'>
      <NavLink to='/'>About</NavLink>
      <NavLink to='/resume'>Resume</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
    </div>
  );
}
