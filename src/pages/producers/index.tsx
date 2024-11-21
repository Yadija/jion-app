import { parseAsInteger, useQueryState } from "nuqs";
import { useEffect } from "react";

// components
import ContentGallery from "@/components/common/content-gallery";
// hooks
import { useAppDispatch, useAppSelector } from "@/hooks/use-redux";
// lib
import { mapProducerArray } from "@/lib/utils";
// states
import { asyncReceiveProducers } from "@/states/producers/action";

export default function Producers() {
  document.title = "Producers | Jion";

  const { data: producers, isLoading } = useAppSelector(
    (states) => states.producers,
  );
  const dispatch = useAppDispatch();

  const [page] = useQueryState("page", parseAsInteger.withDefault(1));

  useEffect(() => {
    dispatch(asyncReceiveProducers(page));
  }, [dispatch, page]);

  return (
    <ContentGallery
      title="Producers"
      page={page}
      content={
        producers
          ? {
              data: mapProducerArray(producers.data),
              pagination: producers.pagination,
            }
          : null
      }
      isLoading={isLoading}
      type="Producer"
    />
  );
}
