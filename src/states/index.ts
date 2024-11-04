import { configureStore, Reducer, UnknownAction } from "@reduxjs/toolkit";

// reducers
import animeReducer from "@/states/anime/reducer";
import detailAnimeReducer from "@/states/detail-anime/reducer";
import detailMangaReducer from "@/states/detail-manga/reducer";
import detailProducerReducer from "@/states/detail-producer/reducer";
import mangaReducer from "@/states/manga/reducer";
import nowReducer from "@/states/now/reducer";
import producersReducer from "@/states/producers/reducer";
import topAnimeReducer from "@/states/top-anime/reducer";
import topMangaReducer from "@/states/top-manga/reducer";
import upcomingReducer from "@/states/upcoming/reducer";
// types
import { AnimeDetailState, AnimeListState } from "@/types/anime.type";
import { MangaDetailState, MangaListState } from "@/types/manga.type";
import { ProducerDetailState, ProducersListState } from "@/types/producer.type";

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
