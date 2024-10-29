import api from "../../utils/api";

const ActionType = {
  RECEIVE_DETAIL: "RECEIVE_DETAIL",
  CLEAR_DETAIL: "CLEAR_DETAIL",
};

function receiveDetailActionCreator(detail) {
  return {
    type: ActionType.RECEIVE_DETAIL,
    payload: {
      detail,
    },
  };
}

function clearDetailActionCreator() {
  return {
    type: ActionType.CLEAR_DETAIL,
  };
}

function asyncReceiveDetail(type, id) {
  return async (dispatch) => {
    dispatch(clearDetailActionCreator());

    try {
      const detail = await api.getDetail(type, id);
      dispatch(receiveDetailActionCreator(detail));
    } catch (error) {
      dispatch(receiveDetailActionCreator({ error: error.message }));
    }
  };
}

export { ActionType, asyncReceiveDetail, receiveDetailActionCreator };
