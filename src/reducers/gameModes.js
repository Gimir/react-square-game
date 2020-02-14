import { SET_GAME_MODES } from '../constants/actions';

export default (state=[], action) => {
    switch (action.type) {
        case SET_GAME_MODES:
            return action.payload;
        default:
            return state;
    };
};