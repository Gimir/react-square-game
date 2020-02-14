import { SET_GAME_STATUS } from '../constants/actions';

export default (state='', action) => {
    switch (action.type) {
        case SET_GAME_STATUS:
            return action.payload;
        default:
            return state;
    };
};