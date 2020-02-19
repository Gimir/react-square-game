import { SET_GAME_MODES } from '../constants/actionTypes';
import axios from 'axios';
import api from '../constants/api';

export const setGameModes = modes => ({
  type: SET_GAME_MODES,
  payload: modes,
});

export const getGameModes = () => {
  return dispatch => {
    axios
      .get(api.modes)
      .then(response => {
        const objectKeys = Object.keys(response.data);
        const modes = [];
        for (let key of objectKeys) {
          modes.push({
            mode: key,
            delay: response.data[key].delay,
            field: response.data[key].field,
          });
        }
        dispatch(setGameModes(modes));
      })
      .catch(err => console.error(err));
  };
};
