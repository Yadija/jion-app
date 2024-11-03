// components
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// components
import CardsList from "../components/cards/cards-list";
import MessageError from "../components/error/message-error";
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
    dispatch(asyncReceiveTopManga({ page }));
  }, [dispatch, page]);

  if (page < 1) {
    return (
      <MessageError
        title="What Did You Do?"
        message="What you've done is illegal"
      />
    );
  }

  if (isLoading || !topManga?.data) {
    return <Loading />;
  }

  if (topManga.pagination.last_visible_page < page) {
    return (
      <MessageError
        title="What Did You Do?"
        message="I know you're curious, but there's nothing here"
      />
    );
  }

  if (topManga.data.length === 0) {
    return (
      <MessageError
        title="Nothing Here"
        message="Nothing here, please try again later"
      />
    );
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
