interface SummarySectionProps {
  title: string;
  content: string;
  fallbackMessage?: string;
  className?: string;
}

export default function SummarySection({
  title,
  content,
}: SummarySectionProps) {
  if (!content) return null;

  return (
    <article className="py-2">
      <h3 className="border-b border-fun-blue text-xl font-bold text-fun-blue dark:border-denim-blue dark:text-denim-blue">
        {title}
      </h3>
      <p>{content}</p>
    </article>
  );
}
