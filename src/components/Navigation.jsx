import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between bg-cyan-500 px-10 py-4 text-white">
      <h2 className="text-xl font-bold">
        <Link to="/">Jion</Link>
      </h2>
      <ul className="flex flex-row">
        <li className="w-28">
          <div className="group relative">
            <button
              id="dropdownHoverButton"
              data-dropdown-toggle="dropdownHover"
              data-dropdown-trigger="hover"
              className="inline-flex items-center text-center text-white"
              type="button"
            >
              Top
              {' '}
              <svg
                className="ml-1 h-4 w-4"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="bg-grey-200 absolute z-10 hidden group-hover:block">
              <div className="bg-gray-200 shadow-lg">
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownHoverButton"
                >
                  <li>
                    <a
                      href="/top-anime"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Top Anime
                    </a>
                  </li>
                  <li>
                    <a
                      href="/top-manga"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Top Manga
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
