// components
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// components
import CardsList from "../components/cards/cards-list";
import Loading from "../components/loading/loading";
import Pagination from "../components/pagination/pagination";
// hooks
import { useAppDispatch, useAppSelector } from "../hooks/use-redux";
import { asyncReceiveTopManga } from "../states/top-manga/action";
// states
import { mappingDataInArray } from "../utils";

export default function TopMangaPage() {
  document.title = "Top Manga | Jion";

  const { data: topManga, isLoading } = useAppSelector(
    (states) => states.topManga,
  );
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);

  useEffect(() => {
    dispatch(asyncReceiveTopManga(page));

    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
  }, [dispatch, page]);

  if (isLoading || !topManga) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen">
      <div className="flex min-h-screen flex-col justify-between px-16 xs:px-12">
        <h1 className="title-page">Top Manga</h1>
        <div className="grow">
          <CardsList data={mappingDataInArray(topManga.data)} />
        </div>
        <Pagination pagination={topManga.pagination} />
      </div>
    </div>
  );
}
