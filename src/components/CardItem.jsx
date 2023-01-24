import React from 'react';
import PropTypes from 'prop-types';
import { trimTitle } from '../utils';

function CardItem({ title, images }) {
  return (
    <div className="select-none overflow-hidden rounded-lg bg-merino" title={title}>
      <img
        src={images.jpg.image_url}
        alt={title}
        className="pointer-events-none h-[260px] w-full object-cover object-center"
      />
      <h2 className="p-0.5 text-center font-semibold">{trimTitle(title, 12)}</h2>
    </div>
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
