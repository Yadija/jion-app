import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// components
import CardsList from "../components/cards/cards-list";
import Loading from "../components/loading/loading";
import Pagination from "../components/pagination/pagination";
// hooks
import { useAppDispatch, useAppSelector } from "../hooks/use-redux";
// states
import { asyncReceiveNow } from "../states/now/action";
// utils
import { mappingDataInArray } from "../utils";

export default function NowPage() {
  document.title = "Now | Jion";

  const { data: now, isLoading } = useAppSelector((states) => states.now);
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);

  useEffect(() => {
    dispatch(asyncReceiveNow(page));

    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
  }, [dispatch, page]);

  if (isLoading || !now) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen">
      <div className="flex min-h-screen flex-col justify-between px-16 xs:px-12">
        <h1 className="title-page">Now</h1>
        <div className="grow">
          <CardsList data={mappingDataInArray(now.data)} />
        </div>
        <Pagination pagination={now.pagination} />
      </div>
    </div>
  );
}
