import { useLiveQuery } from "dexie-react-hooks";
import { useParams } from "react-router";

// components
import CardsList from "../components/cards/cards-list";
import MessageError from "../components/error/message-error";
import Loading from "../components/loading/loading";
// utils
import { db } from "../utils/db";
// types
import { Anime, Manga } from "../utils/db";
// pages
import NotFoundPage from "./not-found-page";

export default function FavoritePage() {
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
    return <NotFoundPage />;
  }

  document.title = `Favorite ${type.charAt(0).toUpperCase() + type.slice(1)} | Jion`;

  return (
    <div className="flex flex-col justify-between px-16 xs:px-12">
      <h1 className="title-page">{`Favorite ${type.charAt(0).toUpperCase() + type.slice(1)}`}</h1>
      <div className="grow">
        <CardsList data={data} />
      </div>
    </div>
  );
}
