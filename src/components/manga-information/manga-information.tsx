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
    <section>
      <article className="py-2">
        <h3 className="title-with-border">Information</h3>
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
    </section>
  );
}
