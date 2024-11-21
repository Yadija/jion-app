import { parseAsBoolean, parseAsInteger, useQueryState } from "nuqs";
import { useEffect } from "react";

// components
import ContentGallery from "@/components/common/content-gallery";
// hooks
import { useAppDispatch, useAppSelector } from "@/hooks/use-redux";
// lib
import { mapAnimeArray } from "@/lib/utils";
// states
import { asyncReceiveUpcoming } from "@/states/upcoming/action";

export default function Upcoming() {
  document.title = "Upcoming | Jion";

  const { data: upcoming, isLoading } = useAppSelector(
    (states) => states.upcoming,
  );
  const dispatch = useAppDispatch();

  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [nsfw] = useQueryState("nsfw", parseAsBoolean.withDefault(false));

  useEffect(() => {
    dispatch(asyncReceiveUpcoming({ page, sfw: !nsfw }));
  }, [dispatch, page, nsfw]);

  return (
    <ContentGallery
      title="Upcoming"
      page={page}
      content={
        upcoming
          ? {
              data: mapAnimeArray(upcoming.data),
              pagination: upcoming.pagination,
            }
          : null
      }
      isLoading={isLoading}
      type="Anime"
    />
  );
}
