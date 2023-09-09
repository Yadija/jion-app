import React, { useContext } from 'react';
import { GoSearch } from 'react-icons/go';
import { Link } from 'react-router-dom';

// context
import { SearchContext } from '../../context/SearchContext.jsx';
// component
import DarkMode from '../DarkMode/DarkMode.jsx';
import Dropdown from '../Dropdown/Dropdown.jsx';

const Navbar = () => {
  const { isShowSearchModal, toggleSearchModal } = useContext(SearchContext);

  return (
    <nav className='background-color-blue text-color-white sticky top-0 z-[10000] flex items-center justify-between px-6 py-3 transition-all duration-1000'>
      <h2 className='text-xl font-bold'>
        <Link to='/'>Jion</Link>
      </h2>
      <div className='flex items-center'>
        <Dropdown />
        <button
          className={`${
            isShowSearchModal && 'background-color-white text-color-blue'
          } mr-3 rounded-full p-2 transition-all duration-500`}
          onClick={() => toggleSearchModal((prev) => !prev)}
        >
          <GoSearch />
        </button>
        <DarkMode />
      </div>
    </nav>
  );
};

export default Navbar;
