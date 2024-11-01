import { UnknownAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// hooks
import { useAppDispatch, useAppSelector } from "../../hooks/use-redux";
// states
import { RootState } from "../../states";
// types
import { Anime } from "../../types/anime.type";
import { Manga } from "../../types/manga.type";
import { Producer } from "../../types/producer.type";
// utils
import { mappingDataInArray, mappingDataProducerInArray } from "../../utils";
// components
import CardsList from "../cards/cards-list";
import FetchError from "../error/fetch-error";
import MessageError from "../error/message-error";
import Loading from "../loading/loading";
import Pagination from "../pagination/pagination";

type DataState = keyof RootState;

interface ListPageProps {
  title: string;
  asyncReceiveFunc: (page: number) => UnknownAction;
  dataState: DataState;
  producers?: boolean;
}

export default function ListPage({
  title,
  asyncReceiveFunc,
  dataState,
  producers = false,
}: ListPageProps) {
  const data = useAppSelector((states) => states[dataState].data) || [];
  // const error = useAppSelector((states) => states[dataState].error) || "";
  const pagination =
    useAppSelector((states) => states[dataState].pagination) || {};
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);

  if (page < 1) {
    return (
      <MessageError
        title="What Did You Do?"
        message={`What you've done is illegal`}
      />
    );
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    dispatch(asyncReceiveFunc(page));

    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, page]);

  if (page > pagination.last_visible_page) {
    return (
      <MessageError
        title="What Did You Do?"
        message={`I know you're curious, but there's nothing here`}
      />
    );
  }

  // if (error) {
  //   return <FetchError />;
  // }

  if (!Array.isArray(data)) {
    return <FetchError />;
  }

  if (data.length === 0) {
    return <Loading />;
  }

  return (
    <div className="flex min-h-screen flex-col justify-between px-16 xs:px-12">
      <h1 className="title-page">{title}</h1>
      <div className="grow">
        <CardsList
          data={
            producers
              ? mappingDataProducerInArray(data as Producer[])
              : mappingDataInArray(data as Anime[] | Manga[])
          }
        />
      </div>
      <Pagination pagination={pagination} />
    </div>
  );
}
