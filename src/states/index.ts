import { configureStore, Reducer, UnknownAction } from "@reduxjs/toolkit";

// types
import { AnimeDetail, AnimeList } from "../types/anime.type";
import { MangaDetail, MangaList } from "../types/manga.type";
import { ProducerDetail, ProducersList } from "../types/producer.type";
// reducers
import bySearchReducer from "./bySearch/reducer";
import detailReducer from "./detail/reducer";
import detailProducerReducer from "./detailProducer/reducer";
import nowReducer from "./now/reducer";
import producersReducer from "./producers/reducer";
import topAnimeReducer from "./top-anime/reducer";
import topMangaReducer from "./top-manga/reducer";
import upcomingReducer from "./upcoming/reducer";

const store = configureStore({
  reducer: {
    now: nowReducer as Reducer<AnimeList, UnknownAction>,
    upcoming: upcomingReducer as Reducer<AnimeList, UnknownAction>,
    topAnime: topAnimeReducer as Reducer<AnimeList, UnknownAction>,
    topManga: topMangaReducer as Reducer<MangaList, UnknownAction>,
    producers: producersReducer as Reducer<ProducersList, UnknownAction>,
    detail: detailReducer as Reducer<AnimeDetail | MangaDetail, UnknownAction>,
    detailProducer: detailProducerReducer as Reducer<
      ProducerDetail,
      UnknownAction
    >,
    bySearch: bySearchReducer as Reducer<AnimeList | MangaList, UnknownAction>,
  },
});

// Define the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
