interface AnimeInformationProps {
  status?: string;
  season?: string;
  rating?: string;
  aired?: { string: string };
  episodes?: number;
  duration?: string;
  source?: string;
  type?: string;
}

export default function AnimeInformation({
  status,
  season,
  rating,
  aired,
  episodes,
  duration,
  source,
  type,
}: AnimeInformationProps) {
  return (
    <article className="py-2">
      <h3 className="title-with-border">Information</h3>
      {status && (
        <p>
          <b>Status:</b> {status}
        </p>
      )}
      {season && (
        <p>
          <b>Season:</b> {season}
        </p>
      )}
      {rating && (
        <p>
          <b>Rating:</b> {rating}
        </p>
      )}
      {aired && (
        <p>
          <b>Aired:</b> {aired.string}
        </p>
      )}
      {episodes && (
        <p>
          <b>Episodes:</b> {episodes}
        </p>
      )}
      {duration && (
        <p>
          <b>Duration:</b> {duration}
        </p>
      )}
      {source && (
        <p>
          <b>Source:</b> {source}
        </p>
      )}
      {type && (
        <p>
          <b>Type:</b> {type}
        </p>
      )}
    </article>
  );
}
