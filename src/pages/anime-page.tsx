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
import { asyncReceiveAnime } from "../states/anime/action";
// utils
import { mappingDataInArray } from "../utils";

export default function AnimePage() {
  const { data: anime, isLoading } =
    useAppSelector((states) => states.anime) || [];
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const sfw = searchParams.get("sfw") === "false" ? false : true;

  document.title = search ? `Search Anime: ${search} | Jion` : "Anime | Jion";

  useEffect(() => {
    dispatch(asyncReceiveAnime({ query: search, page, sfw }));
  }, [dispatch, search, page, sfw]);

  if (page < 1) {
    return (
      <MessageError
        title="What Did You Do?"
        message="What you've done is illegal"
      />
    );
  }

  if (isLoading || !anime?.data) {
    return <Loading />;
  }

  if (anime.pagination.last_visible_page < page) {
    return (
      <MessageError
        title="What Did You Do?"
        message="I know you're curious, but there's nothing here"
      />
    );
  }

  if (anime.data.length === 0 && search) {
    return (
      <MessageError title="No Result" message={`No result for "${search}"`} />
    );
  }

  if (anime.data.length === 0) {
    return <MessageError title="No Anime" message="No anime here" />;
  }

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col justify-between px-16 xs:px-12">
        {search ? (
          <h1 className="mb-4 pt-8 text-xl font-bold text-baltic-sea dark:text-soft-peach">{`Search Anime: ${search}`}</h1>
        ) : (
          <h1 className="title-page">Anime</h1>
        )}
        <div className="grow">
          <CardsList data={mappingDataInArray(anime.data)} />
        </div>
        <Pagination pagination={anime.pagination} />
      </div>
    </>
  );
}
