// components
import { parseAsInteger, useQueryState } from "nuqs";
import { useEffect } from "react";

// components
import CardsList from "@/components/common/cards-list";
import Loading from "@/components/common/loading";
import MessageError from "@/components/common/message-error";
import Pagination from "@/components/common/pagination";
// hooks
import { useAppDispatch, useAppSelector } from "@/hooks/use-redux";
import { asyncReceiveTopManga } from "@/states/top-manga/action";
// states
import { mappingDataInArray } from "@/utils";

export default function TopManga() {
  document.title = "Top Manga | Jion";

  const { data: topManga, isLoading } = useAppSelector(
    (states) => states.topManga,
  );
  const dispatch = useAppDispatch();

  const [page] = useQueryState("page", parseAsInteger.withDefault(1));

  useEffect(() => {
    dispatch(asyncReceiveTopManga({ page }));
  }, [dispatch, page]);

  if (page < 1) {
    return (
      <MessageError
        title="What Did You Do?"
        message="What you've done is illegal"
      />
    );
  }

  if (isLoading || !topManga?.data) {
    return <Loading />;
  }

  if (topManga.pagination.last_visible_page < page) {
    return (
      <MessageError
        title="What Did You Do?"
        message="I know you're curious, but there's nothing here"
      />
    );
  }

  if (topManga.data.length === 0) {
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
        <h1 className="title-page">Top Manga</h1>
        <section className="grow">
          <CardsList data={mappingDataInArray(topManga.data)} />
        </section>
        <Pagination pagination={topManga.pagination} />
      </section>
    </section>
  );
}
