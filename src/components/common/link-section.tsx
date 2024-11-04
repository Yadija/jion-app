interface LinkSectionProps {
  title: string;
  url: string;
}

export default function LinkSection({ title, url }: LinkSectionProps) {
  if (!url) return null;

  return (
    <article className="py-2">
      <h3 className="title-with-border">{title}</h3>
      <p className="py-2">
        •{" "}
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="text-color-blue border-b border-fun-blue hover:border-0 dark:border-denim-blue"
        >
          MAL
        </a>
      </p>
    </article>
  );
}
