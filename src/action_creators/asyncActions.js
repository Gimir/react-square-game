import axios from 'axios';
import api from '../constants/api';
import { setGameModes, setLiderBoard } from './syncActions';
import { getDate } from '../helpers/';

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

export const getLiderBoard = () => {
  return dispatch => {
    axios
      .get(api.liderBoard)
      .then(response => {
        dispatch(setLiderBoard(response.data));
      })
      .catch(err => console.error(err));
  };
};

export const updateLiderBoard = winner => {
  return dispatch => {
    const now = getDate();

    axios({
      method: 'post',
      url: api.liderBoard,
      data: {
        winner: winner,
        date: now,
      },
      contentType: 'application/json',
      dataType: 'json',
    })
      .then(response => {
        dispatch(setLiderBoard(response.data));
      })
      .catch(err => console.error(err));
  };
};
