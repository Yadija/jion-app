import React from 'react';
import { Link } from 'react-router-dom';

// component
import DarkMode from '../DarkMode/DarkMode.jsx';
import Dropdown from '../Dropdown/Dropdown.jsx';

const Navbar = () => {
  return (
    <nav className='background-color-blue text-color-white sticky top-0 z-[1000] flex items-center justify-between px-6 py-4 transition-all duration-1000'>
      <h2 className='text-xl font-bold'>
        <Link to='/'>Jion</Link>
      </h2>
      <div className='flex'>
        <Dropdown />
        <DarkMode />
      </div>
    </nav>
  );
};

export default Navbar;
