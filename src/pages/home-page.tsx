import { useEffect } from "react";
import { Link } from "react-router-dom";

// components
import Carousel from "../components/common/carousel";
import FetchError from "../components/common/fetch-error";
import Loading from "../components/common/loading";
import Navbar from "../components/common/navbar";
// hooks
import { useAppDispatch, useAppSelector } from "../hooks/use-redux";
// states
import { asyncReceiveNow } from "../states/now/action";
import { asyncReceiveUpcoming } from "../states/upcoming/action";
// utils
import { mappingDataInArray } from "../utils";

export default function HomePage() {
  const {
    data: seasonNow,
    isLoading: loadingInNow,
    error: errorInNow,
  } = useAppSelector((states) => states.now);
  const {
    data: seasonUpcoming,
    isLoading: loadingInUpcoming,
    error: errorInUpcoming,
  } = useAppSelector((states) => states.upcoming);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(asyncReceiveNow());
    dispatch(asyncReceiveUpcoming());
  }, [dispatch]);

  if (errorInNow || errorInUpcoming) {
    return <FetchError />;
  }

  if (loadingInNow || loadingInUpcoming || !seasonNow || !seasonUpcoming) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <section>
        <article>
          <section className="text-color-black mx-2 mb-2 flex justify-between px-4 pt-4 xs:px-4">
            <h2 className="text-xl font-bold">Now</h2>
            <Link
              to="/now"
              className="hover:text-color-blue active:text-color-blue"
            >
              See All
            </Link>
          </section>
          <Carousel data={mappingDataInArray(seasonNow.data)} />
        </article>

        <article className="pb-10">
          <section className="text-color-black mx-2 mb-2 flex justify-between px-4 pt-4 xs:px-4">
            <h2 className="text-xl font-bold">Upcoming</h2>
            <Link
              to="/upcoming"
              className="hover:text-color-blue active:text-color-blue"
            >
              See All
            </Link>
          </section>
          <Carousel data={mappingDataInArray(seasonUpcoming.data)} />
        </article>
      </section>
    </>
  );
}
