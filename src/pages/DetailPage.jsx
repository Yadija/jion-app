/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { asyncReceiveDetail } from '../states/detail/action';

function DetailPage() {
  const [showModal, setShowModal] = React.useState(false);

  const { type, id } = useParams();
  const { data = null } = useSelector((states) => states.detail);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveDetail(type, id));
  }, [dispatch, id, type]);

  if (data === null) {
    return <Loading />;
  }

  document.title = `${data.title} - Jion`;

  return (
    <>
      {/* start modal */}
      {showModal && (
      <>
        <button
          type="button"
          onClick={() => setShowModal(false)}
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50"
        >
          <div className="relative w-auto my-6 mx-auto max-w-3xl px-4">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white">
              <img
                className="rounded-md shadow-md"
                src={data.images.jpg.large_image_url}
                alt={data.title}
              />
            </div>
          </div>
        </button>
        <div className="opacity-25 fixed inset-0 z-40 bg-white" />
      </>
      )}
      {/* end modal */}

      <div className="relative flex flex-col text-white">
        <nav className="flex py-9" />

        {/* start backgorund image */}
        <section>
          <section className="absolute top-0 -z-10 block w-full">
            <section
              className="fixed h-[220px] w-full bg-cover bg-[center_top_35%] blur-[1px] lg:h-[260px]"
              style={{ backgroundImage: `url(${data.images.jpg.large_image_url})` }}
            />
          </section>
          <section className="fixed top-0 -z-10 h-[220px] w-full bg-gradient-to-br from-slate-800 to-transparent bg-fixed lg:h-[260px]" />
          <section className="absolute bottom-0 top-[220px] -z-[5] w-full bg-codGray lg:top-[260px]" />
        </section>
        {/* end backgorund image */}

        <section className="flex flex-col gap-4 px-4 sm:px-6 md:px-12 lg:px-20">
          <section className="flex gap-2 md:gap-4">
            <button
              type="button"
              className="max-w-[300px]"
              onClick={() => setShowModal(true)}
            >
              <img
                className="rounded-md bg-gradient-to-tl from-gray-300 to-white shadow-sm md:w-[225px]"
                src={data.images.jpg.image_url}
                alt={data.title}
              />
            </button>
            <section className="flex flex-col gap-2">
              <h2 className="text-xl font-bold text-cyan-500 sm:text-2xl md:text-3xl lg:text-4xl">
                {data.title}
              </h2>

              {/* start genre */}
              <section className="flex flex-wrap gap-1 text-sm">
                {data.genres.map(({ name }, i) => (
                  <p
                    key={i}
                    className="rounded-lg bg-cyan-500 px-2 font-bold text-[#171717] mix-blend-screen"
                  >
                    {name}
                  </p>
                ))}
              </section>
              {/* end genre */}

              <section className="flex flex-wrap gap-2">
                <article className="text-center">
                  <h4 className="bg-cyan-500 py-0.5 px-2 font-bold text-[#171717] mix-blend-screen">
                    SCORE
                  </h4>
                  <p className="text-lg font-bold text-cyan-500">{data.score || 'N/A'}</p>
                  <p className="text-xs">
                    {data.scored_by || '-'}
                    {' '}
                    users
                  </p>
                </article>
                <section className="px-2 text-sm sm:text-base">
                  <article>
                    <p>
                      Ranked
                      {' '}
                      <b className="text-cyan-500">
                        {data.rank === null ? 'N/A' : `#${data.rank}`}
                      </b>
                    </p>
                  </article>
                  <article>
                    <p>
                      Popularity
                      {' '}
                      <b className="text-cyan-500">
                        {data.popularity === null ? 'N/A' : `#${data.popularity}`}
                      </b>
                    </p>
                  </article>
                  <article>
                    <p>
                      Members
                      {' '}
                      <b className="text-cyan-500">
                        {data.members === null ? 'N/A' : `#${data.members}`}
                      </b>
                    </p>
                  </article>
                </section>
              </section>
            </section>
          </section>

          <section className="bg-codGray">
            <article className="py-2">
              <h3 className="border-b border-cyan-500 text-xl font-bold text-cyan-500">
                Synopsis
              </h3>
              <p>
                {data.synopsis || 'No synopsis information has been added to this title.'}
              </p>
            </article>
            <article className="py-2">
              <h3 className="border-b border-cyan-500 text-xl font-bold text-cyan-500">
                Background
              </h3>
              <p>
                {data.background
                || 'No background information has been added to this title.'}
              </p>
            </article>
          </section>

          {
          data.trailer
          && (
          <section>
            <article>
              <h3 className="border-b border-cyan-500 text-xl font-bold text-cyan-500">
                Trailer
              </h3>
              <section className="relative overflow-hidden w-full lg:max-w-[780px] lg:pt-[438.75px] pt-[56.25%]">
                <iframe className="absolute h-full w-full top-0 right-0 left-0 bottom-0 py-2" src={data.trailer.embed_url} title={data.title} />
              </section>
            </article>
          </section>
          )
        }
        </section>
      </div>
    </>
  );
}

export default DetailPage;
