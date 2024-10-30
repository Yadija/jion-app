import { useEffect, useState } from "react";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// components
import FetchError from "../components/error/fetch-error";
import Footer from "../components/footer/footer";
import Loading from "../components/loading/loading";
import Modal from "../components/modal/modal";
// states
import { asyncReceiveDetailProducer } from "../states/detailProducer/action";
import { getTitleFromUrl } from "../utils";
// pages
import NotFoundPage from "./not-found-page";

export default function DetailProducerPage() {
  const [showModal, setShowModal] = useState(false);

  const { id } = useParams();
  const data = useSelector((states) => states.detailProducer.data) || null;
  const error = useSelector((states) => states.detailProducer.error) || "";

  const dispatch = useDispatch();

  if (!id.match(/^[0-9]+$/)) {
    return <NotFoundPage />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    dispatch(asyncReceiveDetailProducer("producers", id));
  }, [dispatch, id]);

  if (error) {
    return <FetchError />;
  }

  if (data === null) {
    return <Loading />;
  }

  const title = getTitleFromUrl(data.url);
  document.title = `${title} | Jion`;

  const handleModal = () => {
    setShowModal(() => false);
  };

  return (
    <>
      {/* start modal */}
      {showModal && (
        <Modal
          image={data.images.jpg.image_url || ""}
          title={title || ""}
          handleModal={handleModal}
        />
      )}
      {/* end modal */}

      <div className="text-color-black relative flex min-h-screen flex-col">
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
                src={data.images.jpg.image_url}
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
                {data.titles
                  .map((item) => `${item.title}(${item.type})`)
                  .join(" | ")}
              </p>
              {data.favorites && (
                <p>
                  <b>Member Favorites:</b> {data.favorites}
                </p>
              )}
              <p>
                <b>Established:</b>{" "}
                {new Date(data.established).toLocaleDateString("en-EN", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p>
                <b>External:</b>{" "}
                <span>
                  {data.external.map((item, index) => (
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
              </p>
            </section>
          </section>

          <section>
            <article className="py-2">
              <h3 className="title-with-border">About</h3>
              <p>
                {data.about ||
                  "No about information has been added to this title."}
              </p>
            </article>
          </section>

          {/* start url */}
          {data.url && (
            <section>
              <article className="py-2">
                <h3 className="title-with-border">Links</h3>
                <p className="py-2">
                  •{" "}
                  <a
                    href={data.url}
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
