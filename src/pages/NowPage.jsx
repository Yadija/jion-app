import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardsList from '../components/Cards/CardsList';
import Loading from '../components/Loading/Loading';
import Pagination from '../components/Pagination/Pagination';
import { asyncReceiveNow } from '../states/now/action';
import { mappingData } from '../utils';

function NowPage() {
  document.title = 'Now | Jion';

  const data = useSelector((states) => states.now.data) || [];
  const pagination = useSelector((states) => states.now.pagination) || {};
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveNow());
  }, [dispatch]);

  const onPageChangeHandler = async (page) => {
    dispatch(asyncReceiveNow(page));

    // document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  if (data.length === 0) {
    return <Loading />;
  }

  return (
    <div className='flex min-h-screen flex-col justify-between px-16 xs:px-12'>
      <h1 className='title-page'>Now</h1>
      <div className='grow'>
        <CardsList data={mappingData(data)} />
      </div>
      <Pagination pagination={pagination} onPageChange={onPageChangeHandler} />
    </div>
  );
}

export default NowPage;
