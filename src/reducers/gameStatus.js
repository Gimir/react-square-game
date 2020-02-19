import { SET_GAME_STATUS } from '../constants/actionTypes';

export default (state = 'FIRST_GAME', action) => {
  switch (action.type) {
    case SET_GAME_STATUS:
      return action.payload;
    default:
      return state;
  }
};
