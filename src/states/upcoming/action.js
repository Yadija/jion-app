import api from '../../utils/api';

const ActionType = {
  RECEIVE_UPCOMING: 'RECEIVE_UPCOMING',
  CLEAR_UPCOMING: 'CLEAR_UPCOMING',
};

function receiveUpcomingActionCreator(upcoming) {
  return {
    type: ActionType.RECEIVE_UPCOMING,
    payload: {
      upcoming,
    },
  };
}

function clearUpcomingActionCreator() {
  return {
    type: ActionType.CLEAR_UPCOMING,
  };
}

function asyncReceiveUpcoming(page) {
  return async (dispatch) => {
    dispatch(clearUpcomingActionCreator());

    try {
      const upcoming = await api.getSeasonUpcoming(page);
      dispatch(receiveUpcomingActionCreator(upcoming));
    } catch (error) {
      dispatch(receiveUpcomingActionCreator({ error: error.message }));
    }
  };
}

export { ActionType, asyncReceiveUpcoming, receiveUpcomingActionCreator };
