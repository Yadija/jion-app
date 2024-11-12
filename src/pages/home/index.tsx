import { useEffect } from "react";
import { Link } from "react-router-dom";

// components
import Carousel from "@/components/common/carousel";
import FetchError from "@/components/common/fetch-error";
import Loading from "@/components/common/loading";
// hooks
import { useAppDispatch, useAppSelector } from "@/hooks/use-redux";
// states
import { asyncReceiveNow } from "@/states/now/action";
import { asyncReceiveUpcoming } from "@/states/upcoming/action";
// utils
import { mappingDataInArray } from "@/utils";

export default function Home() {
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

  document.title = "Jion";

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
      <section className="mx-4 mb-4">
        <section className="mb-2 flex justify-between text-baltic-sea dark:text-soft-peach">
          <h2 className="text-xl font-bold">Now</h2>
          <Link
            to="/now"
            className="hover:text-fun-blue active:text-fun-blue hover:dark:text-denim-blue active:dark:text-denim-blue"
          >
            See All
          </Link>
        </section>

        <Carousel data={mappingDataInArray(seasonNow.data)} />
      </section>

      <section className="mx-4">
        <section className="mb-2 flex justify-between text-baltic-sea dark:text-soft-peach">
          <h2 className="text-xl font-bold">Upcoming</h2>
          <Link
            to="/upcoming"
            className="hover:text-fun-blue active:text-fun-blue hover:dark:text-denim-blue active:dark:text-denim-blue"
          >
            See All
          </Link>
        </section>

        <Carousel data={mappingDataInArray(seasonUpcoming.data)} />
      </section>
    </>
  );
}
