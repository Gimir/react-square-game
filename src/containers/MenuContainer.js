import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import api from '../constants/api';
import { getGameModes } from '../action_creators/asyncActions';
import { setCurrentMode } from '../action_creators/syncActions';

const MenuContainer = ({
    gameModes,
    gameStatus,
    getGameModes,
    setCurrentMode
}) => {
    return (
        <div>
            
        </div>
    )
};

const mapStateToProps = state => ({
    gameModes: state.gameModes,
    gameStatus: state.gameStatus,
});
const mapDispatchToProps = dispatch => ({
    getGameModes: () => dispatch(getGameModes),
    setCurrentMode: mode => dispatch(setCurrentMode(mode))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuContainer);