import { combineReducers } from 'redux';
import gameStatus from './gameStatus';
import gameModes from './gameModes';
import currentMode from './currentMode';
import userName from './userName';
import AICount from './AICount';
import userCount from './userCount';
import liderBoard from './liderBoard';


export default () => combineReducers({
    gameStatus,
    gameModes,
    currentMode,
    userName,
    AICount,
    userCount,
    liderBoard
});