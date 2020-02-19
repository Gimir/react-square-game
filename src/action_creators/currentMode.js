import { SET_CURRENT_MODE } from '../constants/actionTypes';

export const setCurrentMode = mode => ({
  type: SET_CURRENT_MODE,
  payload: mode,
});
