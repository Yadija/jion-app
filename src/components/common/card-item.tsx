import { Link } from "react-router-dom";

// types
import { Card } from "@/types/card.type";

export type CardItemProps = Card;

export default function CardItem({
  title,
  image,
  type,
  link,
  rating = "",
}: CardItemProps) {
  return (
    <Link to={link}>
      <section
        className="select-none overflow-hidden rounded-lg text-soft-peach shadow-md dark:text-baltic-sea"
        title={title}
      >
        <img
          src={image}
          alt={title}
          className={`${
            rating?.toLowerCase().includes("rx") &&
            "blur-md" /* filter for nsfw */
          } ${
            type === "producers" ? "h-[140px]" : "h-[260px]"
          } pointer-events-none w-full bg-gradient-to-tl from-gray-300 to-white object-cover object-center`}
        />
        <h2 className="line-clamp-1 bg-fun-blue p-1 text-center font-semibold transition-all duration-1000 dark:bg-soft-peach">
          {title}
        </h2>
      </section>
    </Link>
  );
}
