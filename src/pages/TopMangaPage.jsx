import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardsList from '../components/Cards/CardsList';
import Loading from '../components/Loading/Loading';
import Pagination from '../components/Pagination/Pagination';
import { asyncReceiveTopManga } from '../states/topManga/action';
import { mappingData } from '../utils';

function TopMangaPage() {
  document.title = 'Top Manga | Jion';

  const data = useSelector((states) => states.topManga.data) || [];
  const pagination = useSelector((states) => states.topManga.pagination) || {};
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveTopManga());
  }, [dispatch]);

  const onPageChangeHandler = async (page) => {
    dispatch(asyncReceiveTopManga(page));

    // document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  if (data.length === 0) {
    return <Loading />;
  }

  return (
    <div className='flex min-h-screen flex-col justify-between px-16 xs:px-12'>
      <h1 className='title-page'>Top Manga</h1>
      <div className='grow'>
        <CardsList data={mappingData(data)} />
      </div>
      <Pagination pagination={pagination} onPageChange={onPageChangeHandler} />
    </div>
  );
}

export default TopMangaPage;
