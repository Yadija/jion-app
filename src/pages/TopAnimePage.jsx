import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardsList from '../components/CardsList';
import Loading from '../components/Loading';
import Pagination from '../components/Pagination';
import { asyncReceiveTopAnime } from '../states/topAnime/action';

function TopAnimePage() {
  document.title = 'Top Anime - Jion';
  const { data = [], pagination = {} } = useSelector((states) => states.topAnime);

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
    <div className="px-16 xs:px-12">
      <h1 className="mb-4 pt-8 text-center text-2xl font-bold text-white">Top Anime</h1>
      <CardsList data={data} />
      <Pagination pagination={pagination} onPageChange={onPageChangeHandler} />
    </div>
  );
}

export default TopAnimePage;
