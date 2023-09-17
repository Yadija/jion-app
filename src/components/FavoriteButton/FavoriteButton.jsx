import { useLiveQuery } from 'dexie-react-hooks';
import React from 'react';
// icons
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';

// utils
import { db } from '../../utils/db';

function FavoriteButton({ data }) {
  const item = useLiveQuery(
    () => db.anime.where('mal_id').equals(data.mal_id).first(),
    [],
  );

  async function saveFavorite(data) {
    try {
      await db[data.type].add(data);
    } catch (error) {
      alert(error.message);
    }
  }

  async function removeFavorite(data) {
    try {
      await db[data.type].delete(data.mal_id);
    } catch (error) {
      alert(error.message);
    }
  }

  async function onFavoriteHandler(data) {
    if (item) {
      await removeFavorite(data);
    } else {
      await saveFavorite(data);
    }
  }

  return (
    <div className='text-color-white background-color-blue fixed bottom-0 right-0 z-[2] mx-10 my-6 flex h-12 w-12 items-center justify-center rounded-full text-2xl shadow-md'>
      <button onClick={() => onFavoriteHandler(data)}>
        {item ? <MdOutlineFavorite /> : <MdOutlineFavoriteBorder />}
      </button>
    </div>
  );
}

export default FavoriteButton;
