import { configureStore, Reducer, UnknownAction } from "@reduxjs/toolkit";

// types
import { AnimeDetailState, AnimeListState } from "../types/anime.type";
import { MangaDetailState, MangaListState } from "../types/manga.type";
import {
  ProducerDetailState,
  ProducersListState,
} from "../types/producer.type";
// reducers
import bySearchReducer from "./bySearch/reducer";
import detailReducer from "./detail/reducer";
import detailProducerReducer from "./detail-producer/reducer";
import nowReducer from "./now/reducer";
import producersReducer from "./producers/reducer";
import topAnimeReducer from "./top-anime/reducer";
import topMangaReducer from "./top-manga/reducer";
import upcomingReducer from "./upcoming/reducer";

const store = configureStore({
  reducer: {
    now: nowReducer as Reducer<AnimeListState, UnknownAction>,
    upcoming: upcomingReducer as Reducer<AnimeListState, UnknownAction>,
    topAnime: topAnimeReducer as Reducer<AnimeListState, UnknownAction>,
    topManga: topMangaReducer as Reducer<MangaListState, UnknownAction>,
    producers: producersReducer as Reducer<ProducersListState, UnknownAction>,
    detail: detailReducer as Reducer<
      AnimeDetailState | MangaDetailState,
      UnknownAction
    >,
    detailProducer: detailProducerReducer as Reducer<
      ProducerDetailState,
      UnknownAction
    >,
    bySearch: bySearchReducer as Reducer<
      AnimeListState | MangaListState,
      UnknownAction
    >,
  },
});

// Define the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
