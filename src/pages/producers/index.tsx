import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// components
import CardsList from "@/components/common/cards-list";
import Loading from "@/components/common/loading";
import Pagination from "@/components/common/pagination";
// hooks
import { useAppDispatch, useAppSelector } from "@/hooks/use-redux";
// states
import { asyncReceiveProducers } from "@/states/producers/action";
// utils
import { mappingDataProducerInArray } from "@/utils";

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

    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
  }, [dispatch, page]);

  if (isLoading || !producers) {
    return <Loading />;
  }

  return (
    <section className="min-h-screen">
      <section className="flex min-h-screen flex-col justify-between px-16 xs:px-12">
        <h1 className="title-page">Producers</h1>
        <section className="grow">
          <CardsList data={mappingDataProducerInArray(producers.data)} />
        </section>
        <Pagination pagination={producers.pagination} />
      </section>
    </section>
  );
}
