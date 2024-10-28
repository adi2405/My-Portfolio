"use client";
import React from 'react';
import NavLink from './NavLink'; // Assuming NavLink component is in the same folder

const navLinks = [
  {
      title: 'About',
      path: '#about',
  },
  {
      title: 'Projects',
      path: '#projects',
  },
  {
      title: 'Contact',
      path: '#contact'
  },
]

const Footer = () => {
  return (
    <footer className='footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
      <div className='container p-6 md:p-12 flex flex-col md:flex-row items-center md:items-center'>
        <p className='text-transparent md:block hidden flex-1 mb-4 md:mb-0'></p>
        <div className='flex flex-row md:flex-row space-x-6 justify-center flex-1 mb-4 md:mb-0'>
          {navLinks.map((link, index) => (
            <NavLink key={index} href={link.path} title={link.title} />
          ))}
        </div>
        <p className='text-slate-600 flex-1 text-center md:text-right'>All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;