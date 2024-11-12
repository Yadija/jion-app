interface LinkSectionProps {
  title: string;
  url: string;
}

export default function LinkSection({ title, url }: LinkSectionProps) {
  if (!url) return null;

  return (
    <article className="py-2">
      <h3 className="border-b border-fun-blue text-xl font-bold text-fun-blue dark:border-denim-blue dark:text-denim-blue">
        {title}
      </h3>
      <p className="py-2">
        •{" "}
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="border-b border-fun-blue text-fun-blue hover:border-0 dark:border-denim-blue dark:text-denim-blue"
        >
          MAL
        </a>
      </p>
    </article>
  );
}
