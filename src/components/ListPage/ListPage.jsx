import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

// utils
import { mappingDataInArray, mappingDataProducerInArray } from '../../utils';
// component
import CardsList from '../Cards/CardsList';
import FetchError from '../Error/FetchError';
import MessageError from '../Error/MessageError';
import Loading from '../Loading/Loading';
import Pagination from '../Pagination/Pagination';

function ListPage({ title, asyncReceiveFunc, dataState, producers = false }) {
  const data = useSelector((states) => states[dataState].data) || [];
  const error = useSelector((states) => states[dataState].error) || '';
  const pagination = useSelector((states) => states[dataState].pagination) || {};
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page'), 10) || 1;

  if (page < 1) {
    return (
      <MessageError title='What Did You Do?' message={`What you've done is illegal`} />
    );
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    dispatch(asyncReceiveFunc());
  }, [page]);

  const onPageChangeHandler = async (page) => {
    dispatch(asyncReceiveFunc(page));

    // document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  if (page > pagination.last_visible_page) {
    return (
      <MessageError
        title='What Did You Do?'
        message={`I know you're curious, but there's nothing here`}
      />
    );
  }

  if (error) {
    return <FetchError />;
  }

  if (data.length === 0) {
    return <Loading />;
  }

  return (
    <div className='flex flex-col justify-between px-16 xs:px-12'>
      <h1 className='title-page'>{title}</h1>
      <div className='grow'>
        <CardsList
          data={producers ? mappingDataProducerInArray(data) : mappingDataInArray(data)}
        />
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
