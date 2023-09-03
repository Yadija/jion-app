/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { trimTitle } from '../utils';

function CardItem({ title, image, type, mal_id }) {
  const typesManga = ['Manga', 'Light Novel', 'Manhwa', 'Manhua', 'Novel', 'One-shot'];
  const isType = typesManga.some((kind) => kind === type);
  const typeAnime = isType ? 'manga' : 'anime';

  return (
    <Link to={`/${typeAnime}/${mal_id}`}>
      <div className='select-none overflow-hidden rounded-lg bg-merino' title={title}>
        <img
          src={image}
          alt={title}
          className='pointer-events-none h-[260px] w-full bg-gradient-to-tl from-gray-300 to-white object-cover object-center'
        />
        <h2 className='p-0.5 text-center font-semibold'>{trimTitle(title, 12)}</h2>
      </div>
    </Link>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const cardItemShape = {
  mal_id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

CardItem.propTypes = {
  ...cardItemShape,
};

export default CardItem;
