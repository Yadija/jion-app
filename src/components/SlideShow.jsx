import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../config/config';
import CardItem, { cardItemShape } from './CardItem';

function SlideShow({ data }) {
  return (
    <Carousel
      autoPlay
      autoPlaySpeed={3000}
      customTransition="all 1s linear"
      containerClass="carousel-container"
      draggable
      dotListClass="custom-dot-list-style"
      infinite
      itemClass="carousel-item-padding-40-px"
      keyBoardControl
      pauseOnHover
      removeArrowOnDeviceType={['tablet', 'mobile']}
      responsive={responsive}
      swipeable
      ssr
      transitionDuration={1000}
    >
      {data.map((item) => (
        <div className="mx-2" key={item.mal_id}>
          <CardItem {...item} />
        </div>
      ))}
    </Carousel>
  );
}

SlideShow.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(cardItemShape)).isRequired,
};

export default SlideShow;
