import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className='main-header'>
      <div className='nav-links'>
        <NavLink to='/' className='nav-link'>
          About
        </NavLink>
        <NavLink to='/skills' className='nav-link'>
          Skills
        </NavLink>
        <NavLink to='/contact' className='nav-link'>
          Contact
        </NavLink>
      </div>
    </div>
  );
}
