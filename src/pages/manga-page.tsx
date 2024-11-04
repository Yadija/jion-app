import { parseAsBoolean, parseAsInteger, useQueryState } from "nuqs";
import { useEffect } from "react";

// components
import CardsList from "@/components/common/cards-list";
import Loading from "@/components/common/loading";
import MessageError from "@/components/common/message-error";
import Navbar from "@/components/common/navbar";
import Pagination from "@/components/common/pagination";
// hooks
import { useAppDispatch, useAppSelector } from "@/hooks/use-redux";
// states
import { asyncReceiveManga } from "@/states/manga/action";
// utils
import { mappingDataInArray } from "@/utils";

export default function MangaPage() {
  const { data: manga, isLoading } =
    useAppSelector((states) => states.manga) || [];
  const dispatch = useAppDispatch();

  const [search] = useQueryState("search", { defaultValue: "" });
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [nsfw] = useQueryState("nsfw", parseAsBoolean.withDefault(false));

  document.title = search ? `Search Manga: ${search} | Jion` : "Manga | Jion";

  useEffect(() => {
    dispatch(asyncReceiveManga({ query: search, page, sfw: !nsfw }));
  }, [dispatch, page, search, nsfw]);

  if (page < 1) {
    return (
      <MessageError
        title="What Did You Do?"
        message="What you've done is illegal"
      />
    );
  }

  if (isLoading || !manga?.data) {
    return <Loading />;
  }

  if (manga.pagination.last_visible_page < page) {
    return (
      <MessageError
        title="What Did You Do?"
        message="I know you're curious, but there's nothing here"
      />
    );
  }

  if (manga.data.length === 0 && search) {
    return (
      <MessageError title="No Result" message={`No result for "${search}"`} />
    );
  }

  if (manga.data.length === 0) {
    return <MessageError title="No Manga" message="No manga here" />;
  }

  return (
    <>
      <Navbar />
      <section className="flex min-h-screen flex-col justify-between px-16 xs:px-12">
        {search ? (
          <h1 className="mb-4 pt-8 text-xl font-bold text-baltic-sea dark:text-soft-peach">{`Search Anime: ${search}`}</h1>
        ) : (
          <h1 className="title-page">Manga</h1>
        )}
        <section className="grow">
          <CardsList data={mappingDataInArray(manga.data)} />
        </section>
        <Pagination pagination={manga.pagination} />
      </section>
    </>
  );
}
