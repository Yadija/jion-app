interface TrailerSectionProps {
  title: string;
  embedUrl?: string;
}

export default function TrailerSection({
  title,
  embedUrl,
}: TrailerSectionProps) {
  if (!embedUrl) return null;

  return (
    <article className="py-2">
      <h3 className="mb-2 border-b border-fun-blue text-xl font-bold text-fun-blue dark:border-denim-blue dark:text-denim-blue">
        {title}
      </h3>
      <section className="relative w-full overflow-hidden pt-[56.25%] lg:max-w-[780px] lg:pt-[438.75px]">
        <iframe
          className="absolute inset-0 my-2 size-full bg-fun-blue dark:bg-denim-blue"
          src={embedUrl}
          title={title}
          allowFullScreen
        />
      </section>
    </article>
  );
}
