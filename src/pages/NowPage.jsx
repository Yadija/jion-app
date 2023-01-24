import React, { useEffect, useState } from 'react';
import CardsList from '../components/CardsList';
import Pagination from '../components/Pagination';
import { getSeasonNow } from '../utils/api';

function NowPage() {
  const [seasonNow, setSeasonNow] = useState([]);
  const [paginationNow, setPaginationNow] = useState({});

  useEffect(() => {
    getSeasonNow().then(({ data, pagination }) => {
      setSeasonNow(data);
      setPaginationNow(pagination);
    });
  }, []);

  const onUpdateHandler = async (page) => {
    const { data, pagination } = await getSeasonNow(page);
    setSeasonNow(data);
    setPaginationNow(pagination);

    // document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="px-16 xs:px-12">
      <h1 className="mb-4 pt-8 text-center text-2xl font-bold text-white">Now</h1>
      <CardsList data={seasonNow} />
      <Pagination pagination={paginationNow} onUpdate={onUpdateHandler} />
    </div>
  );
}

export default NowPage;
