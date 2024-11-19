import { useEffect } from "react";

// components
import CardSlider from "@/components/common/card-slider";
import FetchError from "@/components/common/fetch-error";
import Loading from "@/components/common/loading";
// hooks
import { useAppDispatch, useAppSelector } from "@/hooks/use-redux";
// utils
import { mapAnimeArray, mapMangaArray } from "@/lib/utils";
// states
import { asyncReceiveTopAnime } from "@/states/top-anime/action";
import { asyncReceiveTopManga } from "@/states/top-manga/action";

export default function Top() {
  document.title = "Top | Jion";

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

  useEffect(() => {
    dispatch(asyncReceiveTopAnime());
    dispatch(asyncReceiveTopManga());
  }, [dispatch]);

  if (errorInTopAnime || errorInTopManga) {
    return <FetchError />;
  }

  if (loadingInTopAnime || loadingInTopManga || !topAnime || !topManga) {
    return <Loading />;
  }

  return (
    <>
      <CardSlider
        title="Top Anime"
        link="/top/anime"
        data={mapAnimeArray(topAnime.data)}
      />

      <CardSlider
        title="Top Manga"
        link="/top/manga"
        data={mapMangaArray(topManga.data)}
      />
    </>
  );
}
