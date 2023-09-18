import { useLiveQuery } from 'dexie-react-hooks';
import React from 'react';
import { useParams } from 'react-router';

import CardsList from '../components/Cards/CardsList';
import Loading from '../components/Loading/Loading';
// utils
import { db } from '../utils/db';
// pages
import NotFoundPage from './NotFoundPage';

function FavoritePage() {
  const { type } = useParams();
  const data = useLiveQuery(() => db[type].toArray(), []) || null;

  if (!data) return <Loading />;
  if (data.length === 0)
    return (
      <div className='background-color-white grid h-screen'>
        <div className='m-auto flex flex-col p-14 text-center'>
          <h1 className='text-color-blue m-auto text-2xl font-bold md:text-4xl'>
            No Favorite
          </h1>
          <p className='lg:text-lg'>
            {`You haven't favorite anything yet, so we don't have anything to show you! Pick
            some!`}
          </p>
        </div>
      </div>
    );

  if (!['anime', 'manga'].some((item) => item === type)) {
    return <NotFoundPage />;
  }

  document.title = `Favorite ${type.replace(/^./, type[0].toUpperCase())} | Jion`;

  return (
    <div className='flex flex-col justify-between px-16 xs:px-12'>
      <h1 className='title-page'>{`Favorite ${type.replace(
        /^./,
        type[0].toUpperCase(),
      )}`}</h1>
      <div className='grow'>
        <CardsList data={data} />
      </div>
    </div>
  );
}

export default FavoritePage;
