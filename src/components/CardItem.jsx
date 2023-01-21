import React from 'react';
import PropTypes from 'prop-types';
import { trimTitle } from '../utils';

function CardItem({ title, images }) {
  return (
    <div className="rounded-lg overflow-hidden bg-merino" title={title}>
      <img src={images.jpg.image_url} alt={title} className="h-[260px] object-center object-cover w-full" />
      <h2 className="text-center font-semibold p-0.5">{trimTitle(title, 12)}</h2>
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
