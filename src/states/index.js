import { configureStore } from '@reduxjs/toolkit';

import bySearchReducer from './bySearch/reducer';
import detailReducer from './detail/reducer';
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
    detail: detailReducer,
    bySearch: bySearchReducer,
  },
});

export default store;
