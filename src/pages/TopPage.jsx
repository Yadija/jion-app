import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// component
import Carousel from '../components/Carousel/Carousel';
import Loading from '../components/Loading/Loading';
import Navbar from '../components/Navbar/Navbar';
// states
import { asyncReceiveTopAnime } from '../states/topAnime/action';
import { asyncReceiveTopManga } from '../states/topManga/action';
// utils
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
      <section className='pb-10'>
        <article>
          <div className='text-color-black mx-2 mb-2 flex justify-between px-4 pt-4 xs:px-4'>
            <h2 className='text-xl font-bold'>Top Anime</h2>
            <Link to='/upcoming' className='hover:text-color-blue active:text-color-blue'>
              See All
            </Link>
          </div>
          <Carousel data={mappingData(topAnime)} />
        </article>

        <article>
          <div className='text-color-black mx-2 mb-2 flex justify-between px-4 pt-4 xs:px-4'>
            <h2 className='text-xl font-bold'>Top Manga</h2>
            <Link to='/upcoming' className='hover:text-color-blue active:text-color-blue'>
              See All
            </Link>
          </div>
          <Carousel data={mappingData(topManga)} />
        </article>
      </section>
    </>
  );
}

export default TopPage;
