import { configureStore } from '@reduxjs/toolkit';
import nowReducer from './now/reducer';
import topAnimeReducer from './topAnime/reducer';
import topMangaReducer from './topManga/reducer';
import upcomingReducer from './upcoming/reducer';

const store = configureStore({
  reducer: {
    now: nowReducer,
    upcoming: upcomingReducer,
    topAnime: topAnimeReducer,
    topManga: topMangaReducer,
  },
});

export default store;
