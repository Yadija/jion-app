import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { mappingData } from '../../utils';
import CardsList from '../Cards/CardsList';
import Loading from '../Loading/Loading';
import Pagination from '../Pagination/Pagination';

function ListPage({ title, asyncReceiveFunc, dataState }) {
  const data = useSelector((states) => states[dataState].data) || [];
  const pagination = useSelector((states) => states[dataState].pagination) || {};
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveFunc());
  }, []);

  const onPageChangeHandler = async (page) => {
    dispatch(asyncReceiveFunc(page));

    // document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  if (data.length === 0) {
    return <Loading />;
  }

  return (
    <div className='flex flex-col justify-between px-16 xs:px-12'>
      <h1 className='title-page'>{title}</h1>
      <div className='grow'>
        <CardsList data={mappingData(data)} />
      </div>
      <Pagination pagination={pagination} onPageChange={onPageChangeHandler} />
    </div>
  );
}

ListPage.propTypes = {
  title: PropTypes.string.isRequired,
  asyncReceiveFunc: PropTypes.func.isRequired,
  dataState: PropTypes.string.isRequired,
};

export default ListPage;
