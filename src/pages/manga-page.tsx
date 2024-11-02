import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// components
import CardsList from "../components/cards/cards-list";
import MessageError from "../components/error/message-error";
import Loading from "../components/loading/loading";
import Navbar from "../components/navbar/navbar";
import Pagination from "../components/pagination/pagination";
// hooks
import { useAppDispatch, useAppSelector } from "../hooks/use-redux";
// states
import { asyncReceiveManga } from "../states/manga/action";
// utils
import { mappingDataInArray } from "../utils";

export default function MangaPage() {
  const { data: manga, isLoading } =
    useAppSelector((states) => states.manga) || [];
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const sfw = searchParams.get("sfw") === "false" ? false : true;

  document.title = search ? `Search Manga: ${search} | Jion` : "Manga | Jion";

  useEffect(() => {
    dispatch(asyncReceiveManga({ query: search, page, sfw }));
  }, [dispatch, page, search, sfw]);

  if (page < 1) {
    return (
      <MessageError
        title="What Did You Do?"
        message="What you've done is illegal"
      />
    );
  }

  if (isLoading || !manga?.data) {
    return <Loading />;
  }

  if (manga.pagination.last_visible_page < page) {
    return (
      <MessageError
        title="What Did You Do?"
        message="I know you're curious, but there's nothing here"
      />
    );
  }

  if (manga.data.length === 0 && search) {
    return (
      <MessageError title="No Result" message={`No result for "${search}"`} />
    );
  }

  if (manga.data.length === 0) {
    return <MessageError title="No Manga" message="No manga here" />;
  }

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col justify-between px-16 xs:px-12">
        {search ? (
          <h1 className="mb-4 pt-8 text-xl font-bold text-baltic-sea dark:text-soft-peach">{`Search Anime: ${search}`}</h1>
        ) : (
          <h1 className="title-page">Manga</h1>
        )}
        <div className="grow">
          <CardsList data={mappingDataInArray(manga.data)} />
        </div>
        <Pagination pagination={manga.pagination} />
      </div>
    </>
  );
}
