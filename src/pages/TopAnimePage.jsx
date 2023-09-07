import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardsList from '../components/Cards/CardsList';
import Loading from '../components/Loading/Loading';
import Pagination from '../components/Pagination/Pagination';
import { asyncReceiveTopAnime } from '../states/topAnime/action';
import { mappingData } from '../utils';

function TopAnimePage() {
  document.title = 'Top Anime | Jion';

  const data = useSelector((states) => states.topAnime.data) || [];
  const pagination = useSelector((states) => states.topAnime.pagination) || {};
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveTopAnime());
  }, [dispatch]);

  const onPageChangeHandler = async (page) => {
    dispatch(asyncReceiveTopAnime(page));

    // document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  if (data.length === 0) {
    return <Loading />;
  }

  return (
    <div className='flex min-h-screen flex-col justify-between px-16 xs:px-12'>
      <h1 className='title-page'>Top Anime</h1>
      <div className='grow'>
        <CardsList data={mappingData(data)} />
      </div>
      <Pagination pagination={pagination} onPageChange={onPageChangeHandler} />
    </div>
  );
}

export default TopAnimePage;
