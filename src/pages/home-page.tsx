import { useEffect } from "react";
import { Link } from "react-router-dom";

// components
import Carousel from "../components/carousel/carousel";
// import FetchError from "../components/error/fetch-error";
import Loading from "../components/loading/loading";
import Navbar from "../components/navbar/navbar";
// hooks
import { useAppDispatch, useAppSelector } from "../hooks/use-redux";
// states
import { asyncReceiveNow } from "../states/now/action";
import { asyncReceiveUpcoming } from "../states/upcoming/action";
// utils
import { mappingDataInArray } from "../utils";

export default function HomePage() {
  const { data: seasonNow } = useAppSelector((states) => states.now);
  // const errorInNow = useAppSelector((states) => states.now.error) || "";
  const { data: seasonUpcoming } = useAppSelector((states) => states.upcoming);
  // const errorInUpcoming =
  //   useAppSelector((states) => states.upcoming.error) || "";
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(asyncReceiveNow());
    dispatch(asyncReceiveUpcoming());
  }, [dispatch]);

  // if (errorInNow || errorInUpcoming) {
  //   return <FetchError />;
  // }

  if (seasonNow.length === 0 || seasonUpcoming.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <section>
        <article>
          <div className="text-color-black mx-2 mb-2 flex justify-between px-4 pt-4 xs:px-4">
            <h2 className="text-xl font-bold">Now</h2>
            <Link
              to="/now"
              className="hover:text-color-blue active:text-color-blue"
            >
              See All
            </Link>
          </div>
          <Carousel data={mappingDataInArray(seasonNow)} />
        </article>

        <article className="pb-10">
          <div className="text-color-black mx-2 mb-2 flex justify-between px-4 pt-4 xs:px-4">
            <h2 className="text-xl font-bold">Upcoming</h2>
            <Link
              to="/upcoming"
              className="hover:text-color-blue active:text-color-blue"
            >
              See All
            </Link>
          </div>
          <Carousel data={mappingDataInArray(seasonUpcoming)} />
        </article>
      </section>
    </>
  );
}
