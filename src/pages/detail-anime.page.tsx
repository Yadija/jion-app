import { useEffect, useState } from "react";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { useParams } from "react-router-dom";

// components
import AnimeInformation from "../components/anime-information/anime-information";
import FetchError from "../components/error/fetch-error";
import FavoriteButton from "../components/favorite-button/favorite-button";
import Footer from "../components/footer/footer";
import GenreList from "../components/genre-list/genre-list";
import InfoList from "../components/info-list/info-list";
import LinkSection from "../components/link-section/link-section";
import Loading from "../components/loading/loading";
import Modal from "../components/modal/modal";
import ScoreBoard from "../components/score-board/score-board";
import SummarySection from "../components/summary-section/summary-section";
import TrailerSection from "../components/trailer-section/trailer-section";
// hooks
import { useAppDispatch, useAppSelector } from "../hooks/use-redux";
// states
import { AppDispatch } from "../states";
import { asyncReceiveDetailAnime } from "../states/detail-anime/action";
// utils
import { mappingData } from "../utils";
// pages
import NotFoundPage from "./not-found-page";

export default function DetailAnimePage() {
  const [showModal, setShowModal] = useState(false);

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
    return <NotFoundPage />;
  }

  if (error) {
    return <FetchError />;
  }

  if (isLoading || !detail?.data) {
    return <Loading />;
  }

  document.title = `${detail.data.title} | Jion`;

  const handleModal = () => {
    setShowModal(() => false);
  };

  return (
    <>
      {/* start modal */}
      {showModal && (
        <Modal
          image={detail.data.images.jpg.large_image_url || ""}
          title={detail.data.title || ""}
          handleModal={handleModal}
        />
      )}
      {/* end modal */}

      <div className="text-color-black relative flex min-h-screen flex-col">
        <nav className="flex py-9" />

        <FavoriteButton data={mappingData({ ...detail.data, type: "anime" })} />

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
          <section className="background-color-white absolute bottom-0 top-[220px] w-full lg:top-[260px]" />
        </section>
        {/* end backgorund image */}

        <section className="relative z-[1] mb-6 flex grow flex-col gap-4 px-4 sm:px-6 md:px-12 lg:px-20">
          <section className="flex gap-2 md:gap-4">
            <button
              type="button"
              className="relative z-10 max-w-[300px] md:hover:opacity-75"
              onClick={() => setShowModal(true)}
            >
              <img
                className="rounded-md bg-gradient-to-tl from-gray-300 to-white shadow-sm md:w-[225px]"
                src={detail.data.images.jpg.image_url}
                alt={detail.data.title}
              />
              <section className="absolute inset-y-0 flex w-full items-center justify-center rounded-md text-soft-peach opacity-0 hover:opacity-100">
                <BsArrowsAngleExpand className="text-4xl md:text-6xl" />
              </section>
            </button>
            <section className="flex flex-col gap-2">
              <h2 className="text-color-blue text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
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

          <AnimeInformation {...detail.data} />

          <TrailerSection
            title="Trailer"
            embedUrl={detail.data.trailer.embed_url}
          />

          <InfoList title="Producers" items={detail.data.producers} />
          <InfoList title="Licensors" items={detail.data.licensors} />
          <InfoList title="Studios" items={detail.data.studios} />

          <LinkSection title="More Information" url={detail.data.url} />
        </section>

        <div className="relative">
          <Footer />
        </div>
      </div>
    </>
  );
}
