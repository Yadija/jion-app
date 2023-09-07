import React from 'react';

import ListPage from '../components/ListPage/ListPage';
import { asyncReceiveUpcoming } from '../states/upcoming/action';

function UpcomingPage() {
  document.title = 'Upcoming | Jion';

  return (
    <div className='min-h-screen'>
      <ListPage
        title='Upcoming'
        asyncReceiveFunc={asyncReceiveUpcoming}
        dataState='upcoming'
      />
    </div>
  );
}

export default UpcomingPage;
