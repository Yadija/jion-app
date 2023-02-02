import { configureStore } from '@reduxjs/toolkit';
import nowReducer from './now/reducer';
import upcomingReducer from './upcoming/reducer';

const store = configureStore({
  reducer: {
    now: nowReducer,
    upcoming: upcomingReducer,
  },
});

export default store;
