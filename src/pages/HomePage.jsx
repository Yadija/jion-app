import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// component
import Carousel from '../components/Carousel/Carousel';
import Loading from '../components/Loading/Loading';
import Navbar from '../components/Navbar/Navbar';
// states
import { asyncReceiveNow } from '../states/now/action';
import { asyncReceiveUpcoming } from '../states/upcoming/action';
// utils
import { mappingData } from '../utils';

function HomePage() {
  const seasonNow = useSelector((states) => states.now.data) || [];
  const seasonUpcoming = useSelector((states) => states.upcoming.data) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveNow());
    dispatch(asyncReceiveUpcoming());
  }, [dispatch]);

  if (seasonNow.length === 0 || seasonUpcoming.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <section className='pb-10'>
        <article>
          <div className='text-color-black mx-2 mb-2 flex justify-between px-4 pt-4 xs:px-4'>
            <h2 className='text-xl font-bold'>Now</h2>
            <Link to='/upcoming' className='hover:text-color-blue active:text-color-blue'>
              See All
            </Link>
          </div>
          <Carousel data={mappingData(seasonNow)} />
        </article>

        <article>
          <div className='text-color-black mx-2 mb-2 flex justify-between px-4 pt-4 xs:px-4'>
            <h2 className='text-xl font-bold'>Upcoming</h2>
            <Link to='/upcoming' className='hover:text-color-blue active:text-color-blue'>
              See All
            </Link>
          </div>
          <Carousel data={mappingData(seasonUpcoming)} />
        </article>
      </section>
    </>
  );
}

export default HomePage;
