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
  const data = useLiveQuery(() => db[type].toArray(), []) || '';

  if (!data) return <Loading />;
  if (data.length === 0) return <div>Is empty</div>;

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
