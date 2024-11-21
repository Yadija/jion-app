// components
import { parseAsBoolean, parseAsInteger, useQueryState } from "nuqs";
import { useEffect } from "react";

// components
import ContentGallery from "@/components/common/content-gallery";
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

  return (
    <ContentGallery
      title="Top Anime"
      page={page}
      content={
        topAnime
          ? {
              data: mapAnimeArray(topAnime.data),
              pagination: topAnime.pagination,
            }
          : null
      }
      isLoading={isLoading}
      type="Anime"
    />
  );
}
