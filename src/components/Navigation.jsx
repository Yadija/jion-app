import React from 'react';
import { Link } from 'react-router-dom';

import DarkMode from './DarkMode.jsx';

function Navigation() {
  return (
    <nav className='sticky top-0 z-[1000] flex items-center justify-between bg-funBLue px-10 py-4 text-softPeach transition-all duration-1000 dark:bg-denimBLue dark:text-balticSea'>
      <h2 className='text-xl font-bold'>
        <Link to='/'>Jion</Link>
      </h2>
      <ul className='flex flex-row gap-3'>
        <li className='w-28'>
          <section className='group relative'>
            <button
              id='dropdownHoverButton'
              data-dropdown-toggle='dropdownHover'
              data-dropdown-trigger='hover'
              className='inline-flex items-center text-center text-softPeach dark:text-balticSea'
              type='button'
            >
              Top{' '}
              <svg
                className='ml-1 h-4 w-4'
                aria-hidden='true'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>
            <div className='absolute z-10 hidden group-hover:block'>
              <section className='bg-softPeach shadow-lg dark:bg-balticSea'>
                <ul
                  className='py-2 text-sm text-balticSea dark:text-softPeach'
                  aria-labelledby='dropdownHoverButton'
                >
                  <li>
                    <a
                      href='/top-anime'
                      className='block px-4 py-2 hover:bg-funBLue hover:text-softPeach dark:hover:bg-denimBLue'
                    >
                      Top Anime
                    </a>
                  </li>
                  <li>
                    <a
                      href='/top-manga'
                      className='block px-4 py-2 hover:bg-funBLue hover:text-softPeach dark:hover:bg-denimBLue'
                    >
                      Top Manga
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </section>
        </li>
        <li>
          <DarkMode />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
