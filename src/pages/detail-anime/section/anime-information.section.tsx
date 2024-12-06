interface AnimeInformationSectionProps {
  status?: string;
  season?: string;
  rating?: string;
  aired?: { string: string };
  episodes?: number;
  duration?: string;
  source?: string;
  type?: string;
}

export default function AnimeInformationSection({
  status,
  season,
  rating,
  aired,
  episodes,
  duration,
  source,
  type,
}: AnimeInformationSectionProps) {
  return (
    <article className="py-2">
      <h3 className="border-b border-fun-blue text-xl font-bold text-fun-blue dark:border-denim-blue dark:text-denim-blue">
        Information
      </h3>
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
      <p>
        <b>Episodes:</b> {episodes ? episodes : "Unknown"}
      </p>
      <p>
        <b>Duration:</b> {duration ? duration : "Unknown"}
      </p>
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
