import React from 'react';

import ListPage from '../components/ListPage/ListPage';
import { asyncReceiveNow } from '../states/now/action';

function NowPage() {
  document.title = 'Now | Jion';

  return (
    <div className='min-h-screen'>
      <ListPage title='Now' asyncReceiveFunc={asyncReceiveNow} dataState='now' />
    </div>
  );
}

export default NowPage;
