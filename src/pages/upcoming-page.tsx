import { parseAsBoolean, parseAsInteger, useQueryState } from "nuqs";
import { useEffect } from "react";

// components
import CardsList from "../components/cards/cards-list";
import MessageError from "../components/error/message-error";
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

  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [nsfw] = useQueryState("nsfw", parseAsBoolean.withDefault(false));

  useEffect(() => {
    dispatch(asyncReceiveUpcoming({ page, sfw: !nsfw }));
  }, [dispatch, page, nsfw]);

  if (page < 1) {
    return (
      <MessageError
        title="What Did You Do?"
        message="What you've done is illegal"
      />
    );
  }

  if (isLoading || !upcoming) {
    return <Loading />;
  }

  if (upcoming.pagination.last_visible_page < page) {
    return (
      <MessageError
        title="What Did You Do?"
        message="I know you're curious, but there's nothing here"
      />
    );
  }

  if (upcoming.data.length === 0) {
    return (
      <MessageError
        title="Nothing Here"
        message="Nothing here, please try again later"
      />
    );
  }

  return (
    <section className="min-h-screen">
      <section className="flex min-h-screen flex-col justify-between px-16 xs:px-12">
        <h1 className="title-page">Upcoming</h1>
        <section className="grow">
          <CardsList data={mappingDataInArray(upcoming.data)} />
        </section>
        <Pagination pagination={upcoming.pagination} />
      </section>
    </section>
  );
}
