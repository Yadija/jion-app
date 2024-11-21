import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

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

  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);

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
