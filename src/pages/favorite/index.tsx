import { useLiveQuery } from "dexie-react-hooks";
import { useParams } from "react-router";

// components
import CardsList from "@/components/common/cards-list";
import Loading from "@/components/common/loading";
import MessageError from "@/components/common/message-error";
// lib
import { db } from "@/lib/db";
// types
import { Anime, Manga } from "@/lib/db";
// pages
import NotFound from "@/pages/not-found";

export default function Favorite() {
  const { type } = useParams<{ type: "anime" | "manga" }>() as {
    type: "anime" | "manga";
  };

  const data = useLiveQuery(() => db[type].toArray(), []) as
    | (Anime | Manga)[]
    | null;

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
        <CardsList data={data} />
      </section>
    </section>
  );
}
