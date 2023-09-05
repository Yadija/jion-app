import PropTypes from 'prop-types';
import React from 'react';

import CardItem, { cardItemShape } from './CardItem';

const CardsList = ({ data }) => {
  return (
    <div className='grid gap-x-4 gap-y-6 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
      {data.map((item) => (
        <CardItem key={item.mal_id} {...item} />
      ))}
    </div>
  );
};

CardsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(cardItemShape)).isRequired,
};

export default CardsList;
