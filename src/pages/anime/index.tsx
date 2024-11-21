import { parseAsBoolean, parseAsInteger, useQueryState } from "nuqs";
import { useEffect } from "react";

// components
import ContentGallery from "@/components/common/content-gallery";
// hooks
import { useAppDispatch, useAppSelector } from "@/hooks/use-redux";
// lib
import { mapAnimeArray } from "@/lib/utils";
// states
import { asyncReceiveAnime } from "@/states/anime/action";

export default function Anime() {
  const { data: anime, isLoading } =
    useAppSelector((states) => states.anime) || [];
  const dispatch = useAppDispatch();

  const [search] = useQueryState("search", { defaultValue: "" });
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [nsfw] = useQueryState("nsfw", parseAsBoolean.withDefault(false));

  document.title = search ? `Search Anime: ${search} | Jion` : "Anime | Jion";

  useEffect(() => {
    dispatch(asyncReceiveAnime({ query: search, page, sfw: !nsfw }));
  }, [dispatch, search, page, nsfw]);

  return (
    <ContentGallery
      title="Anime"
      page={page}
      content={
        anime
          ? { data: mapAnimeArray(anime.data), pagination: anime.pagination }
          : null
      }
      isLoading={isLoading}
      type="Anime"
      search={search}
    />
  );
}
