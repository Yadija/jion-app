import React from 'react';
import { Link } from 'react-router-dom';

const dropdown = [
  {
    id: 'item-1',
    title: 'Top',
    content: [
      {
        id: 'content-1-1',
        title: 'Top Anime',
        link: '/top-anime',
      },
      {
        id: 'content-1-2',
        title: 'Top Manga',
        link: '/top-manga',
      },
    ],
  },
];

const Dropdown = () => {
  return (
    <ul className='flex'>
      {dropdown.map((item) => (
        <li className='w-28' key={item.id}>
          <section className='group relative'>
            <button
              id='dropdownHoverButton'
              data-dropdown-toggle='dropdownHover'
              data-dropdown-trigger='hover'
              className='text-color-white inline-flex items-center text-center'
              type='button'
            >
              {item.title}{' '}
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
              <section className='background-color-white shadow-lg'>
                <ul
                  className='text-color-black py-2 text-sm'
                  aria-labelledby='dropdownHoverButton'
                >
                  {item.content.map((content) => (
                    <li key={content.id}>
                      <Link
                        to={content.link}
                        className='hover:background-color-blue block px-4 py-2 hover:text-soft-peach'
                      >
                        {content.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </section>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
