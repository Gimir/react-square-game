import { SET_CURRENT_MODE } from '../constants/actions';

export default (state={}, action) => {
    switch (action.type) {
        case SET_CURRENT_MODE:
            return action.payload;
        default:
            return state;
    };
};