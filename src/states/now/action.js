import api from '../../utils/api';

const ActionType = {
  RECEIVE_NOW: 'RECEIVE_NOW',
  CLEAR_NOW: 'CLEAR_NOW',
};

function receiveNowActionCreator(now) {
  return {
    type: ActionType.RECEIVE_NOW,
    payload: {
      now,
    },
  };
}

function clearNowActionCreator() {
  return {
    type: ActionType.CLEAR_NOW,
  };
}

function asyncReceiveNow(page) {
  return async (dispatch) => {
    dispatch(clearNowActionCreator());

    try {
      const now = await api.getSeasonNow(page);
      dispatch(receiveNowActionCreator(now));
    } catch (error) {
      alert(error.message);
    }
  };
}

export { ActionType, receiveNowActionCreator, asyncReceiveNow };
