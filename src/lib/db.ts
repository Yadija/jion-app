import Dexie, { type Table } from "dexie";

// define the interface for Anime and Manga
interface Anime {
  title: string;
  image: string;
  type: string;
  mal_id: number;
  rating?: string;
}

interface Manga {
  title: string;
  image: string;
  type: string;
  mal_id: number;
  rating?: string;
}

// create the database instance
const db = new Dexie("jion") as Dexie & {
  anime: Table<Anime, "mal_id">;
  manga: Table<Manga, "mal_id">;
};

// schema declaration
db.version(1).stores({
  anime: "mal_id, title, image, type, rating",
  manga: "mal_id, title, image, type, rating",
});

export type { Anime, Manga };
export { db };
