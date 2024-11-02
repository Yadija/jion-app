import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// components
import CardsList from "../components/cards/cards-list";
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
  const [searchParams] = useSearchParams();
  const { data: manga, isLoading } =
    useAppSelector((states) => states.manga) || [];
  const dispatch = useAppDispatch();

  const search = searchParams.get("search") || "";

  document.title = search ? `Search Manga: ${search} | Jion` : "Manga | Jion";

  useEffect(() => {
    dispatch(asyncReceiveManga({ query: search, page: 1 }));
  }, [dispatch, search]);

  // const onPageChangeHandler = async (page: number) => {
  //   dispatch(asyncReceiveBySearch(type, { query: search, page }));

  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  // };

  if (isLoading || !manga?.data) {
    return <Loading />;
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
        <Pagination
          pagination={manga.pagination}
          // onPageChange={onPageChangeHandler}
        />
      </div>
    </>
  );
}
