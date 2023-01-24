import React, { useEffect, useState } from 'react';
import CardsList from '../components/CardsList';
import Pagination from '../components/Pagination';
import { getSeasonUpcoming } from '../utils/api';

function UpcomingPage() {
  const [seasonUpcoming, setSeasonUpcoming] = useState([]);
  const [paginationUpcoming, setPaginationUpcoming] = useState({});

  useEffect(() => {
    getSeasonUpcoming().then(({ data, pagination }) => {
      setSeasonUpcoming(data);
      setPaginationUpcoming(pagination);
    });
  }, []);

  const onUpdateHandler = async (page) => {
    const { data, pagination } = await getSeasonUpcoming(page);
    setSeasonUpcoming(data);
    setPaginationUpcoming(pagination);

    // document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="px-16 xs:px-12">
      <h1 className="mb-4 pt-8 text-center text-2xl font-bold text-white">Upcoming</h1>
      <CardsList data={seasonUpcoming} />
      <Pagination pagination={paginationUpcoming} onUpdate={onUpdateHandler} />
    </div>
  );
}

export default UpcomingPage;
