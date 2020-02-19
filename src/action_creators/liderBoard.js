import axios from 'axios';
import { SET_LIDER_BOARD } from '../constants/actionTypes';
import api from '../constants/api';
import { getDate } from '../helpers/';

export const setLiderBoard = board => ({
  type: SET_LIDER_BOARD,
  payload: board,
});

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
