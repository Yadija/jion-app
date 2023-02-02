import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import SlideShow from '../components/SlideShow';
import { getSeasonNow, getSeasonUpcoming } from '../utils/api';

function HomePage() {
  const [seasonNow, setSeasonNow] = useState([]);
  const [seasonUpcoming, setSeasonUpcoming] = useState([]);

  useEffect(() => {
    getSeasonNow().then(({ data }) => {
      setSeasonNow(data);
    });
    getSeasonUpcoming().then(({ data }) => {
      setSeasonUpcoming(data);
    });
  }, []);

  return (
    <>
      <Navigation />
      <section className="mx-16 xs:mx-12 pb-10">
        <article>
          <div className="mx-2 mb-2 flex justify-between pt-4 text-white">
            <h2 className="text-xl font-bold">Now</h2>
            <Link to="/now" className="hover:text-cyan-500 active:text-cyan-500">
              See All
            </Link>
          </div>
          <SlideShow data={seasonNow} />
        </article>
        <article>
          <div className="mx-2 mb-2 flex justify-between pt-4 text-white">
            <h2 className="text-xl font-bold">Upcoming</h2>
            <Link to="/upcoming" className="hover:text-cyan-500 active:text-cyan-500">
              See All
            </Link>
          </div>
          <SlideShow data={seasonUpcoming} />
        </article>
      </section>
    </>
  );
}

export default HomePage;
