import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardsList from '../components/CardsList';
import Pagination from '../components/Pagination';
import { asyncReceiveTopManga } from '../states/topManga/action';

function TopMangaPage() {
  const { data = [], pagination = {} } = useSelector((states) => states.topManga);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveTopManga());
  }, [dispatch]);

  const onUpdateHandler = async (page) => {
    dispatch(asyncReceiveTopManga(page));

    // document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="px-16 xs:px-12">
      <h1 className="mb-4 pt-8 text-center text-2xl font-bold text-white">Top Manga</h1>
      <CardsList data={data} />
      <Pagination pagination={pagination} onUpdate={onUpdateHandler} />
    </div>
  );
}

export default TopMangaPage;
