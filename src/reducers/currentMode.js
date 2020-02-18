import { SET_CURRENT_MODE } from '../constants/actions';

const initialState = {
  mode: '',
  delay: 0,
  field: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_MODE:
      return action.payload;
    default:
      return state;
  }
};
