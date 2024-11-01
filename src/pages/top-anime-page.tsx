// components
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// components
import CardsList from "../components/cards/cards-list";
import Loading from "../components/loading/loading";
import Pagination from "../components/pagination/pagination";
// hooks
import { useAppDispatch, useAppSelector } from "../hooks/use-redux";
// states
import { asyncReceiveTopAnime } from "../states/top-anime/action";
import { mappingDataInArray } from "../utils";

export default function TopAnimePage() {
  document.title = "Top Anime | Jion";

  const { data: topAnime, isLoading } = useAppSelector(
    (states) => states.topAnime,
  );
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);

  useEffect(() => {
    dispatch(asyncReceiveTopAnime(page));

    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
  }, [dispatch, page]);

  if (isLoading || !topAnime) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen">
      <div className="flex min-h-screen flex-col justify-between px-16 xs:px-12">
        <h1 className="title-page">Top Anime</h1>
        <div className="grow">
          <CardsList data={mappingDataInArray(topAnime.data)} />
        </div>
        <Pagination pagination={topAnime.pagination} />
      </div>
    </div>
  );
}
