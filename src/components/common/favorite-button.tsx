import { useLiveQuery } from "dexie-react-hooks";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

// lib
import { db } from "../../lib/db";
// types
import { Anime, Manga } from "../../lib/db";

interface FavoriteButtonProps {
  data: Anime | Manga;
}

export default function FavoriteButton({ data }: FavoriteButtonProps) {
  const item = useLiveQuery(
    () =>
      db[data.type as "anime" | "manga"]
        .where("mal_id")
        .equals(data.mal_id)
        .first(),
    [],
  );

  async function saveFavorite(data: Anime | Manga) {
    try {
      await db[data.type as "anime" | "manga"].add(data);
    } catch (error) {
      alert((error as Error).message);
    }
  }

  async function removeFavorite(data: Anime | Manga) {
    try {
      await db[data.type as "anime" | "manga"].delete(
        data.mal_id as unknown as "mal_id",
      );
    } catch (error) {
      alert((error as Error).message);
    }
  }

  async function onFavoriteHandler(data: Anime | Manga) {
    if (item) {
      await removeFavorite(data);
    } else {
      await saveFavorite(data);
    }
  }

  return (
    <section className="text-color-white background-color-blue fixed bottom-0 right-0 z-[2] mx-10 my-6 flex size-12 items-center justify-center rounded-full text-2xl shadow-md">
      <button onClick={() => onFavoriteHandler(data)}>
        {item ? <MdOutlineFavorite /> : <MdOutlineFavoriteBorder />}
      </button>
    </section>
  );
}
