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
      <h1 className="font-bold text-center pt-8 mb-4 text-2xl text-white">Upcoming</h1>
      <CardsList data={seasonUpcoming} />
      <Pagination pagination={paginationUpcoming} onUpdate={onUpdateHandler} />
    </div>
  );
}

export default UpcomingPage;
