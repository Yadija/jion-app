interface MangaInformationProps {
  status?: string;
  published?: { string: string };
  volumes?: number;
  type?: string;
}

export default function MangaInformation({
  status,
  published,
  volumes,
  type,
}: MangaInformationProps) {
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
      {volumes && (
        <p>
          <b>Volumes:</b> {volumes}
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
