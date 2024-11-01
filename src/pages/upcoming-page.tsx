import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// components
import CardsList from "../components/cards/cards-list";
import Loading from "../components/loading/loading";
import Pagination from "../components/pagination/pagination";
// hooks
import { useAppDispatch, useAppSelector } from "../hooks/use-redux";
// states
import { asyncReceiveUpcoming } from "../states/upcoming/action";
import { mappingDataInArray } from "../utils";

export default function UpcomingPage() {
  document.title = "Upcoming | Jion";

  const { data: upcoming, isLoading } = useAppSelector(
    (states) => states.upcoming,
  );
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);

  useEffect(() => {
    dispatch(asyncReceiveUpcoming(page));

    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
  }, [dispatch, page]);

  if (isLoading || !upcoming) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen">
      <div className="flex min-h-screen flex-col justify-between px-16 xs:px-12">
        <h1 className="title-page">Upcoming</h1>
        <div className="grow">
          <CardsList data={mappingDataInArray(upcoming.data)} />
        </div>
        <Pagination pagination={upcoming.pagination} />
      </div>
    </div>
  );
}
