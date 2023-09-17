/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';

// components
import CardsList from '../components/Cards/CardsList';
import Loading from '../components/Loading/Loading';
import Navbar from '../components/Navbar/Navbar';
import Pagination from '../components/Pagination/Pagination';
// states
import { asyncReceiveBySearch } from '../states/bySearch/action';
// utils
import { mappingDataInArray } from '../utils';
// pages
import NotFoundPage from './NotFoundPage';

function SearchPage() {
  const data = useSelector((states) => states.bySearch.data) || [];
  const pagination = useSelector((states) => states.bySearch.pagination) || {};
  const dispatch = useDispatch();

  const { type } = useParams();
  if (!['anime', 'manga'].some((item) => item === type)) {
    return <NotFoundPage />;
  }

  const [searchParams] = useSearchParams();
  const search = searchParams.get('search') || '';

  document.title = search
    ? `Search ${type.replace(/^./, type[0].toUpperCase())}: ${search} | Jion`
    : `${type.replace(/^./, type[0].toUpperCase())} | Jion`;

  useEffect(() => {
    dispatch(asyncReceiveBySearch(type, { query: search }));
  }, [search, type]);

  const onPageChangeHandler = async (page) => {
    dispatch(asyncReceiveBySearch(type, { query: search, page }));

    // document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  if (data.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className='flex min-h-screen flex-col justify-between px-16 xs:px-12'>
        {search ? (
          <h1 className='mb-4 pt-8 text-xl font-bold text-baltic-sea dark:text-soft-peach'>{`Search ${type.replace(
            /^./,
            type[0].toUpperCase(),
          )}: ${search}`}</h1>
        ) : (
          <span className='py-6' />
        )}
        <div className='grow'>
          <CardsList data={mappingDataInArray(data)} />
        </div>
        <Pagination pagination={pagination} onPageChange={onPageChangeHandler} />
      </div>
    </>
  );
}

export default SearchPage;
