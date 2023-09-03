/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { trimTitle } from '../utils';

function CardItem({ title, images, type, mal_id }) {
  const typesManga = ['Manga', 'Light Novel', 'Manhwa', 'Manhua', 'Novel', 'One-shot'];
  const isType = typesManga.some((ty) => ty === type);
  const typeAnime = isType ? 'manga' : 'anime';

  return (
    <Link to={`/${typeAnime}/${mal_id}`}>
      <div className='select-none overflow-hidden rounded-lg bg-merino' title={title}>
        <img
          src={images.jpg.image_url}
          alt={title}
          className='pointer-events-none h-[260px] w-full bg-gradient-to-tl from-gray-300 to-white object-cover object-center'
        />
        <h2 className='p-0.5 text-center font-semibold'>{trimTitle(title, 12)}</h2>
      </div>
    </Link>
  );
}

export const cardItemShape = {
  title: PropTypes.string.isRequired,
  images: PropTypes.shape({
    jpg: PropTypes.shape({
      image_url: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

CardItem.propTypes = {
  ...cardItemShape,
};

export default CardItem;
