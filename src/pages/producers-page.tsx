import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// components
import CardsList from "../components/cards/cards-list";
import Loading from "../components/loading/loading";
import Pagination from "../components/pagination/pagination";
// hooks
import { useAppDispatch, useAppSelector } from "../hooks/use-redux";
// states
import { asyncReceiveProducers } from "../states/producers/action";
// utils
import { mappingDataProducerInArray } from "../utils";

export default function ProducersPage() {
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
    <div className="min-h-screen">
      <div className="flex min-h-screen flex-col justify-between px-16 xs:px-12">
        <h1 className="title-page">Producers</h1>
        <div className="grow">
          <CardsList data={mappingDataProducerInArray(producers.data)} />
        </div>
        <Pagination pagination={producers.pagination} />
      </div>
    </div>
  );
}
