import { useEffect } from "react";
import { Link } from "react-router-dom";

// components
import Carousel from "../components/carousel/carousel";
import FetchError from "../components/error/fetch-error";
import Loading from "../components/loading/loading";
import Navbar from "../components/navbar/navbar";
// hooks
import { useAppDispatch, useAppSelector } from "../hooks/use-redux";
// states
import { asyncReceiveTopAnime } from "../states/top-anime/action";
import { asyncReceiveTopManga } from "../states/top-manga/action";
// utils
import { mappingDataInArray } from "../utils";

function TopPage() {
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
      <Navbar />
      <section>
        <article>
          <section className="text-color-black mx-2 mb-2 flex justify-between px-4 pt-4 xs:px-4">
            <h2 className="text-xl font-bold">Top Anime</h2>
            <Link
              to="/top/anime"
              className="hover:text-color-blue active:text-color-blue"
            >
              See All
            </Link>
          </section>
          <Carousel data={mappingDataInArray(topAnime.data)} />
        </article>

        <article className="pb-10">
          <section className="text-color-black mx-2 mb-2 flex justify-between px-4 pt-4 xs:px-4">
            <h2 className="text-xl font-bold">Top Manga</h2>
            <Link
              to="/top/manga"
              className="hover:text-color-blue active:text-color-blue"
            >
              See All
            </Link>
          </section>
          <Carousel data={mappingDataInArray(topManga.data)} />
        </article>
      </section>
    </>
  );
}

export default TopPage;
