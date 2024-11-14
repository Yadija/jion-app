import { useEffect } from "react";
import { useParams } from "react-router-dom";

// components
import FavoriteButton from "@/components/common/favorite-button";
import FetchError from "@/components/common/fetch-error";
import Footer from "@/components/common/footer";
import GenreList from "@/components/common/genre-list";
import ImagePreview from "@/components/common/image-preview";
import InfoList from "@/components/common/info-list";
import LinkSection from "@/components/common/link-section";
import Loading from "@/components/common/loading";
import ScoreBoard from "@/components/common/score-board";
import SummarySection from "@/components/common/summary-section";
// hooks
import { useAppDispatch, useAppSelector } from "@/hooks/use-redux";
// lib
import { mapAnimeData } from "@/lib/utils";
// section
import AnimeInformationSection from "@/pages/detail-anime/section/anime-information.section";
import TrailerSection from "@/pages/detail-anime/section/trailer.section";
// pages
import NotFound from "@/pages/not-found";
// states
import { AppDispatch } from "@/states";
import { asyncReceiveDetailAnime } from "@/states/detail-anime/action";

export default function DetailAnime() {
  const { id = "" } = useParams();
  const {
    data: detail,
    isLoading,
    error,
  } = useAppSelector((states) => states.detailAnime);

  const dispatch = useAppDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(asyncReceiveDetailAnime(id));
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

  document.title = `${detail.data.title} | Jion`;

  return (
    <section className="relative flex h-full flex-col text-baltic-sea dark:text-soft-peach">
      <FavoriteButton data={mapAnimeData(detail.data)} />

      {/* start backgorund image */}
      <section>
        <section className="fixed top-0 block w-full">
          <section
            className="h-[220px] w-full bg-cover bg-[center_top_35%] blur-[1px] lg:h-[260px]"
            style={{
              backgroundImage: `url(${detail.data.images.jpg.large_image_url})`,
            }}
          />
        </section>
        <section className="fixed top-0 h-[220px] w-full bg-gradient-to-br from-zinc-300 to-transparent bg-fixed dark:bg-gradient-to-br dark:from-slate-800 dark:to-transparent lg:h-[260px]" />
        <section className="absolute bottom-0 top-[220px] w-full bg-soft-peach dark:bg-baltic-sea lg:top-[260px]" />
      </section>
      {/* end backgorund image */}

      <section className="relative z-[1] mb-6 flex grow flex-col gap-4 px-4 sm:px-6 md:px-12 lg:px-20">
        <section className="flex gap-2 md:gap-4">
          <section>
            <ImagePreview
              title={detail.data.title}
              image={detail.data.images.jpg.image_url}
              largeImage={detail.data.images.jpg.large_image_url}
            />
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-fun-blue dark:text-denim-blue sm:text-2xl md:text-3xl lg:text-4xl">
              {detail.data.title}
            </h2>

            <GenreList genres={detail.data.genres} />
            <ScoreBoard {...detail.data} />
          </section>
        </section>

        <SummarySection
          title="Synopsis"
          content={
            detail.data.synopsis ||
            "No synopsis information has been added to this title."
          }
        />
        <SummarySection
          title="Background"
          content={
            detail.data.background ||
            "No background information has been added to this title."
          }
        />

        <AnimeInformationSection {...detail.data} />

        <TrailerSection
          title="Trailer"
          embedUrl={detail.data.trailer.embed_url}
        />

        <InfoList title="Producers" items={detail.data.producers} />
        <InfoList title="Licensors" items={detail.data.licensors} />
        <InfoList title="Studios" items={detail.data.studios} />

        <LinkSection title="More Information" url={detail.data.url} />
      </section>

      <section className="relative">
        <Footer />
      </section>
    </section>
  );
}
