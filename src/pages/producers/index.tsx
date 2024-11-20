import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// components
import CardList from "@/components/common/card-list";
import Loading from "@/components/common/loading";
import Pagination from "@/components/common/pagination";
// hooks
import { useAppDispatch, useAppSelector } from "@/hooks/use-redux";
// lib
import { mapProducerArray } from "@/lib/utils";
// states
import { asyncReceiveProducers } from "@/states/producers/action";

export default function Producers() {
  document.title = "Producers | Jion";

  const { data: producers, isLoading } = useAppSelector(
    (states) => states.producers,
  );
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);

  useEffect(() => {
    dispatch(asyncReceiveProducers(page));
  }, [dispatch, page]);

  if (isLoading || !producers) {
    return <Loading />;
  }

  return (
    <section className="flex flex-col justify-between px-16 xs:px-12">
      <h1 className="mb-4 text-center text-2xl font-bold text-baltic-sea dark:text-soft-peach">
        Producers
      </h1>
      <section className="grow">
        <CardList data={mapProducerArray(producers.data)} />
      </section>
      <Pagination pagination={producers.pagination} />
    </section>
  );
}
