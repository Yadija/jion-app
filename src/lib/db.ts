import Dexie, { type Table } from "dexie";

// types
import { Card } from "@/types/card.type";

// create the database instance
const db = new Dexie("jion") as Dexie & {
  anime: Table<Card, "id">;
  manga: Table<Card, "id">;
};

// schema declaration
db.version(1).stores({
  anime: "id, title, image, type, link, rating",
  manga: "id, title, image, type, link, rating",
});

export { db };
