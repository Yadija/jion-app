import React from 'react';

import ListPage from '../components/ListPage/ListPage';
import { asyncReceiveTopAnime } from '../states/topAnime/action';

function TopAnimePage() {
  document.title = 'Top Anime | Jion';
  return (
    <div className='min-h-screen'>
      <ListPage
        title='Top Anime'
        asyncReceiveFunc={asyncReceiveTopAnime}
        dataState='topAnime'
      />
    </div>
  );
}

export default TopAnimePage;
