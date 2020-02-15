import axios from 'axios';
import api from '../constants/api'
import { setGameModes, setLiderBoard } from './syncActions';

export const getGameModes = () => {
    return dispatch => {
        axios
            .get(api.modes)
            .then(responce => {
                const objectKeys = Object.keys(responce.data)
                const modes = [];
                for (let key of objectKeys) {
                    modes.push({
                        mode: key,
                        delay: responce.data[key].delay,
                        field: responce.data[key].field
                    });
                };
                dispatch(setGameModes(modes));    
            })
            .catch(err => console.error(err));
    };
};