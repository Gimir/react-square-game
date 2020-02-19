import { SET_GAME_STATUS } from '../constants/actionTypes';

export const setGameStatus = status => ({
  type: SET_GAME_STATUS,
  payload: status,
});
