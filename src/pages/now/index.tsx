import { parseAsBoolean, parseAsInteger, useQueryState } from "nuqs";
import { useEffect } from "react";

// components
import ContentGallery from "@/components/common/content-gallery";
// hooks
import { useAppDispatch, useAppSelector } from "@/hooks/use-redux";
// lib
import { mapAnimeArray } from "@/lib/utils";
// states
import { asyncReceiveNow } from "@/states/now/action";

export default function Now() {
  document.title = "Now | Jion";

  const { data: now, isLoading } = useAppSelector((states) => states.now);
  const dispatch = useAppDispatch();

  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [nsfw] = useQueryState("nsfw", parseAsBoolean.withDefault(false));

  useEffect(() => {
    dispatch(asyncReceiveNow({ page, sfw: !nsfw }));
  }, [dispatch, page, nsfw]);

  return (
    <ContentGallery
      title="Now"
      page={page}
      content={
        now
          ? { data: mapAnimeArray(now.data), pagination: now.pagination }
          : null
      }
      isLoading={isLoading}
      type="Anime"
    />
  );
}
