import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// component
import Carousel from '../components/Carousel/Carousel';
import Error from '../components/Error/Error';
import Loading from '../components/Loading/Loading';
import Navbar from '../components/Navbar/Navbar';
// states
import { asyncReceiveNow } from '../states/now/action';
import { asyncReceiveUpcoming } from '../states/upcoming/action';
// utils
import { mappingDataInArray } from '../utils';

function HomePage() {
  const seasonNow = useSelector((states) => states.now.data) || [];
  const errorInNow = useSelector((states) => states.now.error) || '';
  const seasonUpcoming = useSelector((states) => states.upcoming.data) || [];
  const errorInUpcoming = useSelector((states) => states.upcoming.error) || '';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveNow());
    dispatch(asyncReceiveUpcoming());
  }, [dispatch]);

  if (errorInNow || errorInUpcoming) {
    return <Error message={errorInNow || errorInUpcoming} />;
  }

  if (seasonNow.length === 0 || seasonUpcoming.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <section>
        <article>
          <div className='text-color-black mx-2 mb-2 flex justify-between px-4 pt-4 xs:px-4'>
            <h2 className='text-xl font-bold'>Now</h2>
            <Link to='/now' className='hover:text-color-blue active:text-color-blue'>
              See All
            </Link>
          </div>
          <Carousel data={mappingDataInArray(seasonNow)} />
        </article>

        <article className='pb-10'>
          <div className='text-color-black mx-2 mb-2 flex justify-between px-4 pt-4 xs:px-4'>
            <h2 className='text-xl font-bold'>Upcoming</h2>
            <Link to='/upcoming' className='hover:text-color-blue active:text-color-blue'>
              See All
            </Link>
          </div>
          <Carousel data={mappingDataInArray(seasonUpcoming)} />
        </article>
      </section>
    </>
  );
}

export default HomePage;
