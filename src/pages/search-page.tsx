import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

// components
import CardsList from "../components/cards/cards-list";
import Loading from "../components/loading/loading";
import Navbar from "../components/navbar/navbar";
import Pagination from "../components/pagination/pagination";
// hooks
import { useAppDispatch, useAppSelector } from "../hooks/use-redux";
// states
import { asyncReceiveBySearch } from "../states/bySearch/action";
// utils
import { mappingDataInArray } from "../utils";
// pages
import NotFoundPage from "./not-found-page";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const { data } = useAppSelector((states) => states.bySearch) || [];
  const pagination =
    useAppSelector((states) => states.bySearch.pagination) || {};
  const dispatch = useAppDispatch();

  const { type } = useParams() as { type: "anime" | "manga" };
  if (!["anime", "manga"].some((item) => item === type)) {
    return <NotFoundPage />;
  }

  const search = searchParams.get("search") || "";

  document.title = search
    ? `Search ${type.replace(/^./, type[0].toUpperCase())}: ${search} | Jion`
    : `${type.replace(/^./, type[0].toUpperCase())} | Jion`;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    dispatch(asyncReceiveBySearch(type, { query: search, page: 1 }));
  }, [dispatch, search, type]);

  // const onPageChangeHandler = async (page: number) => {
  //   dispatch(asyncReceiveBySearch(type, { query: search, page }));

  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  // };

  if (data.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col justify-between px-16 xs:px-12">
        {search ? (
          <h1 className="mb-4 pt-8 text-xl font-bold text-baltic-sea dark:text-soft-peach">{`Search ${type.replace(
            /^./,
            type[0].toUpperCase(),
          )}: ${search}`}</h1>
        ) : (
          <span className="py-6" />
        )}
        <div className="grow">
          <CardsList data={mappingDataInArray(data)} />
        </div>
        <Pagination
          pagination={pagination}
          // onPageChange={onPageChangeHandler}
        />
      </div>
    </>
  );
}
