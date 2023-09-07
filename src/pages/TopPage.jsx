import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import SlideShow from '../components/Carousel/SlideShow';
import Loading from '../components/Loading/Loading';
import Navbar from '../components/Navbar/Navbar';
import { asyncReceiveTopAnime } from '../states/topAnime/action';
import { asyncReceiveTopManga } from '../states/topManga/action';
import { mappingData } from '../utils';

function TopPage() {
  document.title = 'Top | Jion';

  const topAnime = useSelector((states) => states.topAnime.data) || [];
  const topManga = useSelector((states) => states.topManga.data) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveTopAnime());
    dispatch(asyncReceiveTopManga());
  }, [dispatch]);

  if (topAnime.length === 0 || topManga.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <section className='px-16 pb-10 xs:px-12'>
        <article>
          <div className='text-color-black mx-2 mb-2 flex justify-between pt-4'>
            <h2 className='text-xl font-bold'>Top Anime</h2>
            <Link
              to='/top-anime'
              className='hover:text-color-blue active:text-color-blue'
            >
              See All
            </Link>
          </div>
          <SlideShow data={mappingData(topAnime)} />
        </article>
        <article>
          <div className='text-color-black mx-2 mb-2 flex justify-between pt-4'>
            <h2 className='text-xl font-bold'>Top Manga</h2>
            <Link
              to='/top-manga'
              className='hover:text-color-blue active:text-color-blue'
            >
              See All
            </Link>
          </div>
          <SlideShow data={mappingData(topManga)} />
        </article>
      </section>
    </>
  );
}

export default TopPage;
