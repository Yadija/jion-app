import 'react-multi-carousel/lib/styles.css';

import PropTypes from 'prop-types';
import React from 'react';
import Carousel from 'react-multi-carousel';

import { responsive } from '../config/config';
import CardItem, { cardItemShape } from './CardItem';

const SlideShow = ({ data }) => {
  return (
    <Carousel
      autoPlay
      autoPlaySpeed={4000}
      customTransition='all .7s ease-out'
      containerClass='carousel-container'
      draggable
      dotListClass='custom-dot-list-style'
      infinite
      itemClass='carousel-item-padding-40-px'
      keyBoardControl
      pauseOnHover
      removeArrowOnDeviceType={['tablet', 'mobile']}
      responsive={responsive}
      swipeable
      ssr
      transitionDuration={1000}
    >
      {data.map((item) => (
        <div className='mx-2' key={item.mal_id}>
          <CardItem {...item} />
        </div>
      ))}
    </Carousel>
  );
};

SlideShow.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(cardItemShape)).isRequired,
};

export default SlideShow;
