import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// components
import Carousel from "../components/carousel/carousel";
import FetchError from "../components/error/fetch-error";
import Loading from "../components/loading/loading";
import Navbar from "../components/navbar/navbar";
// states
import { asyncReceiveTopAnime } from "../states/topAnime/action";
import { asyncReceiveTopManga } from "../states/topManga/action";
// utils
import { mappingDataInArray } from "../utils";

function TopPage() {
  document.title = "Top | Jion";

  const topAnime = useSelector((states) => states.topAnime.data) || [];
  const errorInTopAnime = useSelector((states) => states.topAnime.error) || "";
  const topManga = useSelector((states) => states.topManga.data) || [];
  const errorInTopManga = useSelector((states) => states.topManga.error) || "";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveTopAnime());
    dispatch(asyncReceiveTopManga());
  }, [dispatch]);

  if (errorInTopAnime || errorInTopManga) {
    return <FetchError />;
  }

  if (topAnime.length === 0 || topManga.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <section>
        <article>
          <div className="text-color-black mx-2 mb-2 flex justify-between px-4 pt-4 xs:px-4">
            <h2 className="text-xl font-bold">Top Anime</h2>
            <Link
              to="/upcoming"
              className="hover:text-color-blue active:text-color-blue"
            >
              See All
            </Link>
          </div>
          <Carousel data={mappingDataInArray(topAnime)} />
        </article>

        <article className="pb-10">
          <div className="text-color-black mx-2 mb-2 flex justify-between px-4 pt-4 xs:px-4">
            <h2 className="text-xl font-bold">Top Manga</h2>
            <Link
              to="/upcoming"
              className="hover:text-color-blue active:text-color-blue"
            >
              See All
            </Link>
          </div>
          <Carousel data={mappingDataInArray(topManga)} />
        </article>
      </section>
    </>
  );
}

export default TopPage;
