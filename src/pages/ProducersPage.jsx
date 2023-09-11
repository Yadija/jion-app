import React from 'react';

import ListPage from '../components/ListPage/ListPage';
import { asyncReceiveProducers } from '../states/producers/action';

function ProducersPage() {
  document.title = 'Producers | Jion';
  return (
    <div className='min-h-screen'>
      <ListPage
        title='Producers'
        asyncReceiveFunc={asyncReceiveProducers}
        dataState='producers'
        producers
      />
    </div>
  );
}

export default ProducersPage;
