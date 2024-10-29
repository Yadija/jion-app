import Dexie from "dexie";

export const db = new Dexie("jion");
db.version(1).stores({
  anime: "mal_id",
  manga: "mal_id",
});
