import { Link } from "react-router-dom";

// utils
import { trimTitle } from "../../utils";

export interface CardItemProps {
  title: string;
  image: string;
  type: string;
  mal_id: number;
  rating?: string;
}

export default function CardItem({
  title,
  image,
  type,
  mal_id,
  rating = "",
}: CardItemProps) {
  // const typesManga = ['Manga', 'Light Novel', 'Manhwa', 'Manhua', 'Novel', 'One-shot'];

  switch (type.toLowerCase()) {
    case "manga":
    case "light novel":
    case "manhwa":
    case "manhua":
    case "novel":
    case "one-shot":
      type = "manga";
      break;

    case "producer":
      type = "producers";
      break;

    default:
      type = "anime";
      break;
  }

  return (
    <Link to={`/${type}/${mal_id}`}>
      <section
        className="text-color-white select-none overflow-hidden rounded-lg shadow-md"
        title={title}
      >
        <img
          src={image}
          alt={title}
          className={`${
            rating.toLowerCase().includes("rx") &&
            "blur-md" /* filter for nsfw */
          } ${
            type === "producers" ? "h-[140px]" : "h-[260px]"
          } pointer-events-none w-full bg-gradient-to-tl from-gray-300 to-white object-cover object-center`}
        />
        <h2 className="bg-fun-blue p-0.5 text-center font-semibold transition-all duration-1000 dark:bg-soft-peach">
          {trimTitle(title, 12)}
        </h2>
      </section>
    </Link>
  );
}
