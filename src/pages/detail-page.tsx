import { useEffect, useState } from "react";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";

// components
import FetchError from "../components/error/fetch-error";
import FavoriteButton from "../components/favorite-button/favorite-button";
import Footer from "../components/footer/footer";
import Loading from "../components/loading/loading";
import Modal from "../components/modal/modal";
// hooks
import { useAppDispatch, useAppSelector } from "../hooks/use-redux";
// states
import { AppDispatch } from "../states";
import { asyncReceiveDetail } from "../states/detail/action";
// utils
import { mappingData } from "../utils";
// pages
import NotFoundPage from "./not-found-page";

export default function DetailPage() {
  const [showModal, setShowModal] = useState(false);

  const { type, id } = useParams();
  const {
    data: detail,
    isLoading,
    error,
  } = useAppSelector((states) => states.detail);
  // const error = useAppSelector((states) => states.detail.error) || "";

  const dispatch = useAppDispatch<AppDispatch>();

  if (!type || !id) {
    return <NotFoundPage />;
  }

  if (
    !["anime", "manga"].some((item) => item === type) ||
    !id.match(/^[0-9]+$/)
  ) {
    return <NotFoundPage />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    dispatch(asyncReceiveDetail(type, Number(id)));
  }, [dispatch, id, type]);

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

        <FavoriteButton data={mappingData({ ...detail.data, type })} />

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

              {/* start genre */}
              <section className="flex flex-wrap gap-1 text-sm">
                {detail.data.genres.map(({ name }, i) => (
                  <p
                    key={i}
                    className="background-color-blue text-color-white rounded-lg px-2 font-bold mix-blend-darken dark:mix-blend-screen"
                  >
                    {name}
                  </p>
                ))}
              </section>
              {/* end genre */}

              <section className="flex flex-wrap gap-2">
                <article className="text-center">
                  <h4 className="background-color-blue text-color-white px-2 py-0.5 font-bold mix-blend-darken dark:mix-blend-screen">
                    SCORE
                  </h4>
                  <p className="text-color-blue text-lg font-bold">
                    {detail.data.score || "N/A"}
                  </p>
                  <p className="text-xs">
                    {detail.data.scored_by || "-"} users
                  </p>
                </article>
                <section className="px-2 text-sm sm:text-base">
                  <article>
                    <p>
                      Ranked{" "}
                      <b className="text-color-blue">
                        {detail.data.rank === null
                          ? "N/A"
                          : `#${detail.data.rank}`}
                      </b>
                    </p>
                  </article>
                  <article>
                    <p>
                      Popularity{" "}
                      <b className="text-color-blue">
                        {detail.data.popularity === null
                          ? "N/A"
                          : `#${detail.data.popularity}`}
                      </b>
                    </p>
                  </article>
                  <article>
                    <p>
                      Members{" "}
                      <b className="text-color-blue">
                        {detail.data.members === null
                          ? "N/A"
                          : `#${detail.data.members}`}
                      </b>
                    </p>
                  </article>
                </section>
              </section>
            </section>
          </section>

          <section>
            <article className="py-2">
              <h3 className="title-with-border">Synopsis</h3>
              <p>
                {detail.data.synopsis ||
                  "No synopsis information has been added to this title."}
              </p>
            </article>
            <article className="py-2">
              <h3 className="title-with-border">Background</h3>
              <p>
                {detail.data.background ||
                  "No background information has been added to this title."}
              </p>
            </article>
          </section>

          {/* start informations */}
          <section>
            <article className="py-2">
              <h3 className="title-with-border">Information</h3>
              {detail.data.status && (
                <p>
                  <b>Status:</b> {detail.data.status}
                </p>
              )}
              {"season" in detail.data && detail.data.season && (
                <p>
                  <b>Season:</b> {detail.data.season}
                </p>
              )}
              {"rating" in detail.data && detail.data.rating && (
                <p>
                  <b>Rating:</b> {detail.data.rating}
                </p>
              )}
              {"aired" in detail.data && detail.data.aired && (
                <p>
                  <b>Aired:</b> {detail.data.aired.string}
                </p>
              )}
              {"published" in detail.data && detail.data.published && (
                <p>
                  <b>Published:</b> {detail.data.published.string}
                </p>
              )}
              {"volumes" in detail.data && detail.data.volumes && (
                <p>
                  <b>Volumes:</b> {detail.data.volumes}
                </p>
              )}
              {"episodes" in detail.data && detail.data.episodes && (
                <p>
                  <b>Episodes:</b> {detail.data.episodes}
                </p>
              )}
              {"duration" in detail.data && detail.data.duration && (
                <p>
                  <b>Duration:</b> {detail.data.duration}
                </p>
              )}
              {"source" in detail.data && detail.data.source && (
                <p>
                  <b>Source:</b> {detail.data.source}
                </p>
              )}
              {detail.data.type && (
                <p>
                  <b>Type:</b> {detail.data.type}
                </p>
              )}
            </article>
          </section>
          {/* end informations */}

          {/* start trailer */}
          {"trailer" in detail.data && detail.data.trailer?.embed_url && (
            <section>
              <article className="py-2">
                <h3 className="title-with-border">Trailer</h3>
                <section className="relative w-full overflow-hidden pt-[56.25%] lg:max-w-[780px] lg:pt-[438.75px]">
                  <iframe
                    className="absolute inset-0 my-2 size-full bg-fun-blue dark:bg-denim-blue"
                    src={detail.data.trailer.embed_url}
                    title={detail.data.title}
                  />
                </section>
              </article>
            </section>
          )}
          {/* end trailer */}

          {/* start producers */}
          {"producers" in detail.data &&
            detail.data.producers &&
            detail.data.producers.length > 0 && (
              <section>
                <article className="py-2">
                  <h3 className="title-with-border">Producers</h3>
                  <section className="flex flex-wrap gap-2 py-2">
                    {detail.data.producers.map((producer) => (
                      <p key={producer.mal_id}>
                        •{" "}
                        <Link
                          to={`/producers/${producer.mal_id}`}
                          target="_blank"
                          className="text-color-blue border-b border-fun-blue hover:border-0 dark:border-denim-blue"
                        >
                          {producer.name}
                        </Link>
                      </p>
                    ))}
                  </section>
                </article>
              </section>
            )}
          {/* end producers */}

          {/* start licensors */}
          {"licensors" in detail.data &&
            detail.data.licensors &&
            detail.data.licensors.length > 0 && (
              <section>
                <article className="py-2">
                  <h3 className="title-with-border">Licensors</h3>
                  <section className="flex flex-wrap gap-2 py-2">
                    {detail.data.licensors.map((licensor) => (
                      <p key={licensor.mal_id}>
                        •{" "}
                        <Link
                          to={`/producers/${licensor.mal_id}`}
                          target="_blank"
                          className="text-color-blue border-b border-fun-blue hover:border-0 dark:border-denim-blue"
                        >
                          {licensor.name}
                        </Link>
                      </p>
                    ))}
                  </section>
                </article>
              </section>
            )}
          {/* end licensors */}

          {/* start studios */}
          {"studios" in detail.data &&
            detail.data.studios &&
            detail.data.studios.length > 0 && (
              <section>
                <article className="py-2">
                  <h3 className="title-with-border">Studios</h3>
                  <section className="flex flex-wrap gap-2 py-2">
                    {detail.data.studios.map((studio) => (
                      <p key={studio.mal_id}>
                        •{" "}
                        <Link
                          to={`/producers/${studio.mal_id}`}
                          target="_blank"
                          className="text-color-blue border-b border-fun-blue hover:border-0 dark:border-denim-blue"
                        >
                          {studio.name}
                        </Link>
                      </p>
                    ))}
                  </section>
                </article>
              </section>
            )}
          {/* end studios */}

          {/* start url */}
          {detail.data.url && (
            <section>
              <article className="py-2">
                <h3 className="title-with-border">Links</h3>
                <p className="py-2">
                  •{" "}
                  <a
                    href={detail.data.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-color-blue border-b border-fun-blue hover:border-0 dark:border-denim-blue"
                  >
                    MAL
                  </a>
                </p>
              </article>
            </section>
          )}
          {/* end url */}
        </section>

        <div className="relative">
          <Footer />
        </div>
      </div>
    </>
  );
}
