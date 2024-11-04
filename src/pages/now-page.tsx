import { parseAsBoolean, parseAsInteger, useQueryState } from "nuqs";
import { useEffect } from "react";

// components
import CardsList from "../components/common/cards-list";
import Loading from "../components/common/loading";
import MessageError from "../components/common/message-error";
import Pagination from "../components/common/pagination";
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

  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [nsfw] = useQueryState("nsfw", parseAsBoolean.withDefault(false));

  useEffect(() => {
    dispatch(asyncReceiveNow({ page, sfw: !nsfw }));
  }, [dispatch, page, nsfw]);

  if (page < 1) {
    return (
      <MessageError
        title="What Did You Do?"
        message="What you've done is illegal"
      />
    );
  }

  if (isLoading || !now?.data) {
    return <Loading />;
  }

  if (now.pagination.last_visible_page < page) {
    return (
      <MessageError
        title="What Did You Do?"
        message="I know you're curious, but there's nothing here"
      />
    );
  }

  if (now.data.length === 0) {
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
        <h1 className="title-page">Now</h1>
        <section className="grow">
          <CardsList data={mappingDataInArray(now.data)} />
        </section>
        <Pagination pagination={now.pagination} />
      </section>
    </section>
  );
}
