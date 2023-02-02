import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardsList from '../components/CardsList';
import Pagination from '../components/Pagination';
import { asyncReceiveNow } from '../states/now/action';

function NowPage() {
  const { data = [], pagination = {} } = useSelector((states) => states.now);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveNow());
  }, [dispatch]);

  const onUpdateHandler = async (page) => {
    dispatch(asyncReceiveNow(page));

    // document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="px-16 xs:px-12">
      <h1 className="mb-4 pt-8 text-center text-2xl font-bold text-white">Now</h1>
      <CardsList data={data} />
      <Pagination pagination={pagination} onUpdate={onUpdateHandler} />
    </div>
  );
}

export default NowPage;
