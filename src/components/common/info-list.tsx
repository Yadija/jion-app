import { Link } from "react-router-dom";

interface Item {
  mal_id: number;
  name: string;
}

interface InfoListProps {
  title: string;
  items: Item[];
}

export default function InfoList({ title, items }: InfoListProps) {
  if (!items || items.length === 0) return null;

  return (
    <article className="py-2">
      <h3 className="border-b border-fun-blue text-xl font-bold text-fun-blue dark:border-denim-blue dark:text-denim-blue">
        {title}
      </h3>
      <section className="flex flex-wrap gap-2 py-2">
        {items.map((item) => (
          <p key={item.mal_id}>
            •{" "}
            <Link
              to={`/producers/${item.mal_id}`}
              target="_blank"
              className="border-b border-fun-blue text-fun-blue hover:border-0 dark:border-denim-blue dark:text-denim-blue"
            >
              {item.name}
            </Link>
          </p>
        ))}
      </section>
    </article>
  );
}
