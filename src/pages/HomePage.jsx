import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Loading from '../components/Loading';
import Navigation from '../components/Navigation';
import SlideShow from '../components/SlideShow';
import { asyncReceiveNow } from '../states/now/action';
import { asyncReceiveUpcoming } from '../states/upcoming/action';
import { mappingData } from '../utils';

function HomePage() {
  const {
    now: { data: seasonNow = [] },
    upcoming: { data: seasonUpcoming = [] },
  } = useSelector((states) => states);

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
      <Navigation />
      <section className='px-16 pb-10 xs:px-12'>
        <article>
          <div className='mx-2 mb-2 flex justify-between pt-4 text-balticSea dark:text-softPeach'>
            <h2 className='text-xl font-bold'>Now</h2>
            <Link to='/now' className='hover:text-funBLue active:text-funBLue'>
              See All
            </Link>
          </div>
          <SlideShow data={mappingData(seasonNow)} />
        </article>
        <article>
          <div className='mx-2 mb-2 flex justify-between pt-4 text-balticSea dark:text-softPeach'>
            <h2 className='text-xl font-bold'>Upcoming</h2>
            <Link to='/upcoming' className='hover:text-funBLue active:text-funBLue'>
              See All
            </Link>
          </div>
          <SlideShow data={mappingData(seasonUpcoming)} />
        </article>
      </section>
    </>
  );
}

export default HomePage;
