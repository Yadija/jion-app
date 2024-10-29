import { ActionType } from "./action";

function topMangaReducer(topManga = {}, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_TOP_MANGA:
      return action.payload.topManga;
    case ActionType.CLEAR_TOP_MANGA:
      return {};
    default:
      return topManga;
  }
}

export default topMangaReducer;
