interface MangaInformationSectionProps {
  status?: string;
  published?: { string: string };
  volumes?: number;
  chapters?: number;
  type?: string;
}

export default function MangaInformationSection({
  status,
  published,
  volumes,
  chapters,
  type,
}: MangaInformationSectionProps) {
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
      {published && (
        <p>
          <b>Published:</b> {published.string}
        </p>
      )}
      <p>
        <b>Volumes:</b> {volumes ? volumes : "Unknown"}
      </p>
      <p>
        <b>Chapters:</b> {chapters ? chapters : "Unknown"}
      </p>
      {type && (
        <p>
          <b>Type:</b> {type}
        </p>
      )}
    </article>
  );
}
