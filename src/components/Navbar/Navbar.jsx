import React, { useContext } from 'react';
import { GoSearch } from 'react-icons/go';
import { Link } from 'react-router-dom';

// context
import { SearchContext } from '../../context/SearchContext.jsx';
import { ThemeContext } from '../../context/ThemeContext.jsx';
// images
import JionBlack from '../../images/jion-black.png';
import JionWhite from '../../images/jion-white.png';
// component
import DarkMode from '../DarkMode/DarkMode.jsx';
import Drawer from '../Drawer/Drawer.jsx';

const Navbar = () => {
  const { isShowSearchModal, toggleSearchModal } = useContext(SearchContext);
  const { mode } = useContext(ThemeContext);

  return (
    <nav className='background-color-blue text-color-white sticky top-0 z-[10000] flex items-center justify-between px-6 py-3 transition-all duration-1000'>
      <h2 className='text-xl font-bold'>
        <Link to='/'>
          <img className='h-8' src={mode === 'dark' ? JionBlack : JionWhite} alt='logo' />
        </Link>
      </h2>
      <div className='flex items-center gap-3'>
        <button
          className={`${
            isShowSearchModal && 'background-color-white text-color-blue'
          } mr-3 rounded-full p-2 transition-all duration-500`}
          onClick={() => toggleSearchModal((prev) => !prev)}
        >
          <GoSearch />
        </button>
        <DarkMode />
        <Drawer />
      </div>
    </nav>
  );
};

export default Navbar;
