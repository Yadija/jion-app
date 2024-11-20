import { Link } from "react-router-dom";

// components
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card as UICard } from "@/components/ui/card";
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
    <UICard>
      <Link to={link}>
        <section
          className="select-none overflow-hidden rounded-lg text-soft-peach shadow-md dark:text-baltic-sea"
          title={title}
        >
          <AspectRatio ratio={type === "producer" ? 1 / 1 : 4 / 5} asChild>
            <img
              src={image}
              alt={title}
              className={`${
                rating?.toLowerCase().includes("rx") &&
                "blur-md" /* filter for nsfw */
              } ${
                type === "producers" ? "" : ""
              } pointer-events-none size-full bg-gradient-to-tl from-gray-300 to-white object-cover object-center`}
            />
          </AspectRatio>
          <h2 className="line-clamp-1 bg-fun-blue p-1 text-center font-semibold transition-all duration-1000 dark:bg-soft-peach">
            {title}
          </h2>
        </section>
      </Link>
    </UICard>
  );
}
