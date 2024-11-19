import { useEffect } from "react";

// components
import CardSlider from "@/components/common/card-slider";
import FetchError from "@/components/common/fetch-error";
import Loading from "@/components/common/loading";
// hooks
import { useAppDispatch, useAppSelector } from "@/hooks/use-redux";
// lib
import { mapAnimeArray } from "@/lib/utils";
// states
import { asyncReceiveNow } from "@/states/now/action";
import { asyncReceiveUpcoming } from "@/states/upcoming/action";

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
      <CardSlider
        title="Now"
        link="/now"
        data={mapAnimeArray(seasonNow.data)}
      />

      <CardSlider
        title="Upcoming"
        link="/upcoming"
        data={mapAnimeArray(seasonUpcoming.data)}
      />
    </>
  );
}
