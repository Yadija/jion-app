import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Loading from '../components/Loading';
import Navigation from '../components/Navigation';
import SlideShow from '../components/SlideShow';
import { asyncReceiveTopAnime } from '../states/topAnime/action';
import { asyncReceiveTopManga } from '../states/topManga/action';

function TopPage() {
  document.title = 'Top | Jion';
  const {
    topAnime: { data: topAnime = [] },
    topManga: { data: topManga = [] },
  } = useSelector((states) => states);

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
      <Navigation />
      <section className='mx-16 pb-10 xs:mx-12'>
        <article>
          <div className='mx-2 mb-2 flex justify-between pt-4 text-white'>
            <h2 className='text-xl font-bold'>Top Anime</h2>
            <Link to='/top-anime' className='hover:text-cyan-500 active:text-cyan-500'>
              See All
            </Link>
          </div>
          <SlideShow data={topAnime} />
        </article>
        <article>
          <div className='mx-2 mb-2 flex justify-between pt-4 text-white'>
            <h2 className='text-xl font-bold'>Top Manga</h2>
            <Link to='/top-manga' className='hover:text-cyan-500 active:text-cyan-500'>
              See All
            </Link>
          </div>
          <SlideShow data={topManga} />
        </article>
      </section>
    </>
  );
}

export default TopPage;
