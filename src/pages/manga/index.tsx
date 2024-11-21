import { parseAsBoolean, parseAsInteger, useQueryState } from "nuqs";
import { useEffect } from "react";

// components
import ContentGallery from "@/components/common/content-gallery";
// hooks
import { useAppDispatch, useAppSelector } from "@/hooks/use-redux";
// lib
import { mapMangaArray } from "@/lib/utils";
// states
import { asyncReceiveManga } from "@/states/manga/action";

export default function Manga() {
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

  return (
    <ContentGallery
      title="Manga"
      page={page}
      content={
        manga
          ? { data: mapMangaArray(manga.data), pagination: manga.pagination }
          : null
      }
      isLoading={isLoading}
      type="Manga"
      search={search}
    />
  );
}
