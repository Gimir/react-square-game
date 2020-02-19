import { SET_USERNAME } from '../constants/actionTypes';

export const setUsername = name => ({
  type: SET_USERNAME,
  payload: name,
});
