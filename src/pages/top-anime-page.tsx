// components
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
import { asyncReceiveTopAnime } from "../states/top-anime/action";
import { mappingDataInArray } from "../utils";

export default function TopAnimePage() {
  document.title = "Top Anime | Jion";

  const { data: topAnime, isLoading } = useAppSelector(
    (states) => states.topAnime,
  );
  const dispatch = useAppDispatch();

  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [nsfw] = useQueryState("nsfw", parseAsBoolean.withDefault(false));

  useEffect(() => {
    dispatch(asyncReceiveTopAnime({ page, sfw: !nsfw }));
  }, [dispatch, page, nsfw]);

  if (page < 1) {
    return (
      <MessageError
        title="What Did You Do?"
        message="What you've done is illegal"
      />
    );
  }

  if (isLoading || !topAnime) {
    return <Loading />;
  }

  if (topAnime.pagination.last_visible_page < page) {
    return (
      <MessageError
        title="What Did You Do?"
        message="I know you're curious, but there's nothing here"
      />
    );
  }

  if (topAnime.data.length === 0) {
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
        <h1 className="title-page">Top Anime</h1>
        <section className="grow">
          <CardsList data={mappingDataInArray(topAnime.data)} />
        </section>
        <Pagination pagination={topAnime.pagination} />
      </section>
    </section>
  );
}
