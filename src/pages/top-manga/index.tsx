// components
import { parseAsInteger, useQueryState } from "nuqs";
import { useEffect } from "react";

// components
import ContentGallery from "@/components/common/content-gallery";
// hooks
import { useAppDispatch, useAppSelector } from "@/hooks/use-redux";
// lib
import { mapMangaArray } from "@/lib/utils";
// states
import { asyncReceiveTopManga } from "@/states/top-manga/action";

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

  return (
    <ContentGallery
      title="Top Manga"
      page={page}
      content={
        topManga
          ? {
              data: mapMangaArray(topManga.data),
              pagination: topManga.pagination,
            }
          : null
      }
      isLoading={isLoading}
      type="Anime"
    />
  );
}
