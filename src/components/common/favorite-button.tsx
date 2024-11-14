import { useLiveQuery } from "dexie-react-hooks";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

// lib
import { db } from "@/lib/db";
// types
import { Card } from "@/types/card.type";

interface FavoriteButtonProps {
  data: Card;
}

export default function FavoriteButton({ data }: FavoriteButtonProps) {
  const item = useLiveQuery(
    () =>
      db[data.type as "anime" | "manga"].where("id").equals(data.id).first(),
    [],
  );

  async function saveFavorite(data: Card) {
    try {
      await db[data.type as "anime" | "manga"].add(data);
    } catch (error) {
      alert((error as Error).message);
    }
  }

  async function removeFavorite(data: Card) {
    try {
      await db[data.type as "anime" | "manga"].delete(
        data.id as unknown as "id",
      );
    } catch (error) {
      alert((error as Error).message);
    }
  }

  async function onFavoriteHandler(data: Card) {
    if (item) {
      await removeFavorite(data);
    } else {
      await saveFavorite(data);
    }
  }

  return (
    <section className="fixed bottom-0 right-0 z-[2] mx-10 my-6 flex size-12 items-center justify-center rounded-full bg-fun-blue text-2xl text-soft-peach shadow-md dark:bg-denim-blue dark:text-baltic-sea">
      <button onClick={() => onFavoriteHandler(data)}>
        {item ? <MdOutlineFavorite /> : <MdOutlineFavoriteBorder />}
      </button>
    </section>
  );
}
