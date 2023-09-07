import React from 'react';

import ListPage from '../components/ListPage/ListPage';
import { asyncReceiveTopManga } from '../states/topManga/action';

function TopMangaPage() {
  document.title = 'Top Manga | Jion';

  return (
    <div className='min-h-screen'>
      <ListPage
        title='Top Manga'
        asyncReceiveFunc={asyncReceiveTopManga}
        dataState='topManga'
      />
    </div>
  );
}

export default TopMangaPage;
