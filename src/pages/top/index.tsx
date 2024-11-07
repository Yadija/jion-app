import { useEffect } from "react";
import { Link } from "react-router-dom";

// components
import Carousel from "@/components/common/carousel";
import FetchError from "@/components/common/fetch-error";
import Loading from "@/components/common/loading";
// hooks
import { useAppDispatch, useAppSelector } from "@/hooks/use-redux";
// states
import { asyncReceiveTopAnime } from "@/states/top-anime/action";
import { asyncReceiveTopManga } from "@/states/top-manga/action";
// utils
import { mappingDataInArray } from "@/utils";

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
      <section className="mx-4 mb-4">
        <section className="text-color-black mb-2 flex justify-between">
          <h2 className="text-xl font-bold">Top Anime</h2>
          <Link
            to="/top/anime"
            className="hover:text-color-blue active:text-color-blue"
          >
            See All
          </Link>
        </section>
        <Carousel data={mappingDataInArray(topAnime.data)} />
      </section>

      <section className="mx-4">
        <section className="text-color-black mb-2 flex justify-between">
          <h2 className="text-xl font-bold">Top Manga</h2>
          <Link
            to="/top/manga"
            className="hover:text-color-blue active:text-color-blue"
          >
            See All
          </Link>
        </section>
        <Carousel data={mappingDataInArray(topManga.data)} />
      </section>
    </>
  );
}
