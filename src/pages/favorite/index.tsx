import { useLiveQuery } from "dexie-react-hooks";

// components
import CardList from "@/components/common/card-list";
import Loading from "@/components/common/loading";
import MessageError from "@/components/common/message-error";
// lib
import { db } from "@/lib/db";
// pages
import NotFound from "@/pages/not-found";
// types
import { Card } from "@/types/card.type";

interface FavoriteProps {
  type: "anime" | "manga";
}

export default function Favorite({ type }: FavoriteProps) {
  const data = useLiveQuery(() => db[type].toArray(), [type]) as Card[] | null;

  if (!data) return <Loading />;

  if (data.length === 0) {
    return (
      <MessageError
        title="No Favorite"
        message="You haven't favorited anything yet, so we don't have anything to show you! Pick some!"
      />
    );
  }

  if (!["anime", "manga"].includes(type)) {
    return <NotFound />;
  }

  document.title = `Favorite ${type.charAt(0).toUpperCase() + type.slice(1)} | Jion`;

  return (
    <section className="flex flex-col justify-between px-16 xs:px-12">
      <h1 className="mb-4 text-center text-2xl font-bold text-baltic-sea dark:text-soft-peach">{`Favorite ${type.charAt(0).toUpperCase() + type.slice(1)}`}</h1>
      <section className="grow">
        <CardList data={data} />
      </section>
    </section>
  );
}
