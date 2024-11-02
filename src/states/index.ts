import { configureStore, Reducer, UnknownAction } from "@reduxjs/toolkit";

// types
import { AnimeDetailState, AnimeListState } from "../types/anime.type";
import { MangaDetailState, MangaListState } from "../types/manga.type";
import {
  ProducerDetailState,
  ProducersListState,
} from "../types/producer.type";
import animeReducer from "./anime/reducer";
// reducers
import detailAnimeReducer from "./detail-anime/reducer";
import detailMangaReducer from "./detail-manga/reducer";
import detailProducerReducer from "./detail-producer/reducer";
import mangaReducer from "./manga/reducer";
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
    anime: animeReducer as Reducer<AnimeListState, UnknownAction>,
    manga: mangaReducer as Reducer<MangaListState, UnknownAction>,
    producers: producersReducer as Reducer<ProducersListState, UnknownAction>,
    detailAnime: detailAnimeReducer as Reducer<AnimeDetailState, UnknownAction>,
    detailManga: detailMangaReducer as Reducer<MangaDetailState, UnknownAction>,
    detailProducer: detailProducerReducer as Reducer<
      ProducerDetailState,
      UnknownAction
    >,
  },
});

// Define the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
