/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { trimTitle } from '../../utils';

const CardItem = ({ title, image, type, mal_id, rating = '' }) => {
  // const typesManga = ['Manga', 'Light Novel', 'Manhwa', 'Manhua', 'Novel', 'One-shot'];

  switch (type.toLowerCase()) {
    case 'manga':
    case 'light novel':
    case 'manhwa':
    case 'manhua':
    case 'novel':
    case 'one-shot':
      type = 'manga';
      break;

    case 'producer':
      type = 'producers';
      break;

    default:
      type = 'anime';
      break;
  }

  return (
    <Link to={`/${type}/${mal_id}`}>
      <div
        className='text-color-white select-none overflow-hidden rounded-lg shadow-md'
        title={title}
      >
        <img
          src={image}
          alt={title}
          className={`${
            rating.toLowerCase().includes('rx') && 'blur-md' /* filter for nsfw */
          } ${
            type === 'producers' ? 'h-[140px]' : 'h-[260px]'
          } pointer-events-none w-full bg-gradient-to-tl from-gray-300 to-white object-cover object-center`}
        />
        <h2 className='bg-fun-blue p-0.5 text-center font-semibold transition-all duration-1000 dark:bg-soft-peach'>
          {trimTitle(title, 12)}
        </h2>
      </div>
    </Link>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const cardItemShape = {
  mal_id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.string,
};

CardItem.propTypes = {
  ...cardItemShape,
};

export default CardItem;
