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
  return (
    <article className="py-2">
      <h3 className="title-with-border">{title}</h3>
      <p>{content}</p>
    </article>
  );
}
