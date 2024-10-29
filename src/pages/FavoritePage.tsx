import { useLiveQuery } from "dexie-react-hooks";
import { useParams } from "react-router";

// components
import CardsList from "../components/Cards/CardsList";
import MessageError from "../components/Error/MessageError";
import Loading from "../components/Loading/Loading";
// utils
import { db } from "../utils/db";
// pages
import NotFoundPage from "./NotFoundPage";

export default function FavoritePage() {
  const { type } = useParams();
  const data = useLiveQuery(() => db[type].toArray(), []) || null;

  if (!data) return <Loading />;
  if (data.length === 0)
    return (
      <MessageError
        title="No Favorite"
        message={`You haven't favorite anything yet, so we don't have anything to show you! Pick some!`}
      />
    );

  if (!["anime", "manga"].some((item) => item === type)) {
    return <NotFoundPage />;
  }

  document.title = `Favorite ${type.replace(/^./, type[0].toUpperCase())} | Jion`;

  return (
    <div className="flex flex-col justify-between px-16 xs:px-12">
      <h1 className="title-page">{`Favorite ${type.replace(
        /^./,
        type[0].toUpperCase(),
      )}`}</h1>
      <div className="grow">
        <CardsList data={data} />
      </div>
    </div>
  );
}
