import { ActionType } from "./action";

function topAnimeReducer(topAnime = {}, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_TOP_ANIME:
      return action.payload.topAnime;
    case ActionType.CLEAR_TOP_ANIME:
      return {};
    default:
      return topAnime;
  }
}

export default topAnimeReducer;
