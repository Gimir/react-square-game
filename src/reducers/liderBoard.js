import { SET_LIDER_BOARD } from '../constants/actions';

export default (state = [], action) => {
  switch (action.type) {
    case SET_LIDER_BOARD:
      return action.payload;
    default:
      return state;
  }
};
