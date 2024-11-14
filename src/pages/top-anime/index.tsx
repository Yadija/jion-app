// components
import { parseAsBoolean, parseAsInteger, useQueryState } from "nuqs";
import { useEffect } from "react";

// components
import CardsList from "@/components/common/cards-list";
import Loading from "@/components/common/loading";
import MessageError from "@/components/common/message-error";
import Pagination from "@/components/common/pagination";
// hooks
import { useAppDispatch, useAppSelector } from "@/hooks/use-redux";
// lib
import { mapAnimeArray } from "@/lib/utils";
// states
import { asyncReceiveTopAnime } from "@/states/top-anime/action";

export default function TopAnime() {
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
    <section className="flex h-full flex-col justify-between px-16 xs:px-12">
      <h1 className="mb-4 text-center text-2xl font-bold text-baltic-sea dark:text-soft-peach">
        Top Anime
      </h1>
      <section className="grow">
        <CardsList data={mapAnimeArray(topAnime.data)} />
      </section>
      <Pagination pagination={topAnime.pagination} />
    </section>
  );
}
