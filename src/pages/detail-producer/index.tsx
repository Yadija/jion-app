import { useEffect } from "react";
import { useParams } from "react-router-dom";

// components
import FetchError from "@/components/common/fetch-error";
import Footer from "@/components/common/footer";
import ImagePreview from "@/components/common/image-preview";
import LinkSection from "@/components/common/link-section";
import Loading from "@/components/common/loading";
import SummarySection from "@/components/common/summary-section";
// hooks
import { useAppDispatch, useAppSelector } from "@/hooks/use-redux";
// lib
import { getProducerTitleFromUrl } from "@/lib/utils";
// pages
import NotFound from "@/pages/not-found";
// states
import { asyncReceiveDetailProducer } from "@/states/detail-producer/action";

export default function DetailProducer() {
  const { id = "" } = useParams();
  const {
    data: detail,
    isLoading,
    error,
  } = useAppSelector((states) => states.detailProducer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(asyncReceiveDetailProducer(id));
  }, [dispatch, id]);

  if (error?.match(/not found/)) {
    return <NotFound />;
  }

  if (error) {
    return <FetchError />;
  }

  if (isLoading || !detail?.data) {
    return <Loading />;
  }

  const title = getProducerTitleFromUrl(detail.data.url);
  document.title = `${title} | Jion`;

  return (
    <section className="relative flex h-full flex-col text-baltic-sea dark:text-soft-peach">
      <section className="relative z-[1] mb-6 flex grow flex-col gap-4 px-4 sm:px-6 md:px-12 lg:px-20">
        <section className="flex gap-2 md:gap-4">
          <ImagePreview
            title={title}
            image={detail.data.images.jpg.image_url}
            largeImage={detail.data.images.jpg.image_url}
          />

          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-fun-blue dark:text-denim-blue sm:text-2xl md:text-3xl lg:text-4xl">
              {title}
            </h2>
            <p>
              <b>Alternative Names:</b>{" "}
              {detail.data.titles
                .map((item) => `${item.title}(${item.type})`)
                .join(" | ")}
            </p>
            {detail.data.favorites && (
              <p>
                <b>Member Favorites:</b> {detail.data.favorites}
              </p>
            )}
            <p>
              <b>Established:</b>{" "}
              {new Date(detail.data.established).toLocaleDateString("en-EN", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </section>
        </section>

        <SummarySection title="About" content={detail.data.about} />

        <LinkSection title="More Information" url={detail.data.url} />
      </section>

      <section className="relative">
        <Footer />
      </section>
    </section>
  );
}
