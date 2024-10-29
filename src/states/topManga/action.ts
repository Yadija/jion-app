import api from "../../utils/api";

const ActionType = {
  RECEIVE_TOP_MANGA: "RECEIVE_TOP_MANGA",
  CLEAR_TOP_MANGA: "CLEAR_TOP_MANGA",
};

function receiveTopMangaActionCreator(topManga) {
  return {
    type: ActionType.RECEIVE_TOP_MANGA,
    payload: {
      topManga,
    },
  };
}

function clearTopMangaActionCreator() {
  return {
    type: ActionType.CLEAR_TOP_MANGA,
  };
}

function asyncReceiveTopManga(page) {
  return async (dispatch) => {
    dispatch(clearTopMangaActionCreator());

    try {
      const topManga = await api.getTopManga(page);
      dispatch(receiveTopMangaActionCreator(topManga));
    } catch (error) {
      dispatch(receiveTopMangaActionCreator({ error: error.message }));
    }
  };
}

export { ActionType, asyncReceiveTopManga, receiveTopMangaActionCreator };
