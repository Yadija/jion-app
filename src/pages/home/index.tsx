import { useEffect } from "react";

// components
import BannerSlider from "@/components/common/banner-slider";
import CardSlider from "@/components/common/card-slider";
import FetchError from "@/components/common/fetch-error";
// hooks
import { useAppDispatch, useAppSelector } from "@/hooks/use-redux";
// lib
import { getCurrentSeason, mapAnimeArray } from "@/lib/utils";
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

  return (
    <>
      <BannerSlider
        title={`Now: ${getCurrentSeason()}`}
        link="/now"
        data={seasonNow?.data || null}
        isLoading={loadingInNow}
      />

      <CardSlider
        title="Upcoming"
        link="/upcoming"
        data={
          seasonUpcoming
            ? mapAnimeArray(
                seasonUpcoming.data.filter(
                  (value, index, self) =>
                    self.findIndex((item) => item.mal_id === value.mal_id) ===
                    index,
                ),
              )
            : null
        }
        isLoading={loadingInUpcoming}
      />
    </>
  );
}
