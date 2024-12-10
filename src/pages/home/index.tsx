import { useEffect } from "react";

// components
import BannerSlider from "@/components/common/banner-slider";
import CardSlider from "@/components/common/card-slider";
import FetchError from "@/components/common/fetch-error";
// hooks
import { useAppDispatch, useAppSelector } from "@/hooks/use-redux";
// lib
import { getCurrentSeason, mapAnimeArray, mapMangaArray } from "@/lib/utils";
// states
import { asyncReceiveNow } from "@/states/now/action";
import { asyncReceiveTopAnime } from "@/states/top-anime/action";
import { asyncReceiveTopManga } from "@/states/top-manga/action";
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

  const {
    data: topAnime,
    isLoading: loadingInTopAnime,
    error: errorInTopAnime,
  } = useAppSelector((states) => states.topAnime) || [];
  const {
    data: topManga,
    isLoading: loadingInTopManga,
    error: errorInTopManga,
  } = useAppSelector((states) => states.topManga) || [];

  const dispatch = useAppDispatch();

  document.title = "Jion";

  useEffect(() => {
    dispatch(asyncReceiveNow());
    dispatch(asyncReceiveUpcoming());

    setTimeout(() => {
      dispatch(asyncReceiveTopAnime());
      dispatch(asyncReceiveTopManga());
    }, 2000);
  }, [dispatch]);

  if (errorInNow || errorInUpcoming || errorInTopAnime || errorInTopManga) {
    return <FetchError />;
  }

  return (
    <>
      <BannerSlider
        title={`Season: ${getCurrentSeason()}`}
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

      <CardSlider
        title="Top Anime"
        link="/top/anime"
        data={topAnime ? mapAnimeArray(topAnime.data) : null}
        isLoading={loadingInTopAnime}
      />

      <CardSlider
        title="Top Manga"
        link="/top/manga"
        data={topManga ? mapMangaArray(topManga.data) : null}
        isLoading={loadingInTopManga}
      />
    </>
  );
}
