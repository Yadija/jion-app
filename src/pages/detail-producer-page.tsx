import { useEffect, useState } from "react";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { useParams } from "react-router-dom";

// components
import FetchError from "../components/common/fetch-error";
import Footer from "../components/common/footer";
import Loading from "../components/common/loading";
import Modal from "../components/common/modal";
// hooks
import { useAppDispatch, useAppSelector } from "../hooks/use-redux";
// states
import { asyncReceiveDetailProducer } from "../states/detail-producer/action";
// utils
import { getTitleFromUrl } from "../utils";
// pages
import NotFoundPage from "./not-found-page";

export default function DetailProducerPage() {
  const [showModal, setShowModal] = useState(false);

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
    return <NotFoundPage />;
  }

  if (error) {
    return <FetchError />;
  }

  if (isLoading || !detail?.data) {
    return <Loading />;
  }

  const title = getTitleFromUrl(detail.data.url);
  document.title = `${title} | Jion`;

  const handleModal = () => {
    setShowModal(() => false);
  };

  return (
    <>
      {/* start modal */}
      {showModal && (
        <Modal
          image={detail.data.images.jpg.image_url || ""}
          title={title || ""}
          handleModal={handleModal}
        />
      )}
      {/* end modal */}

      <section className="text-color-black relative flex min-h-screen flex-col">
        <nav className="flex py-9" />
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
                alt={title}
              />
              <section className="absolute inset-y-0 flex w-full items-center justify-center rounded-md text-soft-peach opacity-0 hover:opacity-100">
                <BsArrowsAngleExpand className="text-4xl md:text-6xl" />
              </section>
            </button>
            <section className="flex flex-col gap-2">
              <h2 className="text-color-blue text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
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
              {/* <p>
                <b>External:</b>{" "}
                <span>
                  {detail.data.external.map((item: any, index: number) => (
                    <span key={index}>
                      •{" "}
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-color-blue border-b border-fun-blue hover:border-0 dark:border-denim-blue"
                      >
                        {item.name}
                      </a>{" "}
                    </span>
                  ))}
                </span>
              </p> */}
            </section>
          </section>

          <section>
            <article className="py-2">
              <h3 className="title-with-border">About</h3>
              <p>
                {detail.data.about ||
                  "No about information has been added to this title."}
              </p>
            </article>
          </section>

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

        <section className="relative">
          <Footer />
        </section>
      </section>
    </>
  );
}
