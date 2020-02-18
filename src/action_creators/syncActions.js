import {
  SET_GAME_STATUS,
  SET_GAME_MODES,
  SET_CURRENT_MODE,
  SET_USERNAME,
  SET_LIDER_BOARD,
  RESET_GAME,
} from '../constants/actions';

export const setGameStatus = status => ({
  type: SET_GAME_STATUS,
  payload: status,
});

export const setGameModes = modes => ({
  type: SET_GAME_MODES,
  payload: modes,
});

export const setCurrentMode = mode => ({
  type: SET_CURRENT_MODE,
  payload: mode,
});

export const setUsername = name => ({
  type: SET_USERNAME,
  payload: name,
});

export const setLiderBoard = board => ({
  type: SET_LIDER_BOARD,
  payload: board,
});

export const resetGame = () => ({
  type: RESET_GAME,
});
