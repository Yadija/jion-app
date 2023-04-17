import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { asyncReceiveDetail } from '../states/detail/action';

function DetailPage() {
  const { type, id } = useParams();
  const { data = null } = useSelector((states) => states.detail);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveDetail(type, id));
  }, [dispatch, id, type]);

  if (data === null) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center py-4 px-6">
      <div className="flex max-w-lg flex-col gap-2 text-white">
        <h2 className="text-2xl font-bold text-cyan-500">{data.title}</h2>
        <section className="flex">
          <section>
            <img src={data.images.jpg.image_url} alt={data.title} />
          </section>
          <section>
            <section className="flex flex-wrap gap-2 p-2">
              <article className="text-center">
                <h4 className="bg-cyan-500 py-0.5 px-2 font-bold text-black">SCORE</h4>
                <p className="text-lg font-bold text-cyan-500">{data.score || 'N/A'}</p>
                <p className="text-xs">
                  {data.scored_by || '-'}
                  {' '}
                  users
                </p>
              </article>
              <section className="px-2">
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
            <p className="mx-2 border-l-2 border-l-cyan-500 px-1 text-sm">
              {data.genres.map(({ name }) => name).join(' | ')}
            </p>
          </section>
        </section>
        <div className="max-w-2xl">
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
          {/* <img
            src={data.trailer.images.maximum_image_url || data.images.jpg.large_image_url}
            alt={data.title}
            className="max-w-md"
          />
          <iframe src={data.trailer.embed_url} title={data.title} /> */}
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
