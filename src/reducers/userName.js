import { SET_USERNAME } from '../constants/actionTypes';

export default (state = 'USER', action) => {
  switch (action.type) {
    case SET_USERNAME:
      return action.payload;
    default:
      return state;
  }
};
