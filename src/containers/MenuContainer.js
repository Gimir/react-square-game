import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { getGameModes } from '../action_creators/asyncActions';
import { setCurrentMode, setUsername, setGameStatus } from '../action_creators/syncActions';

import Menu from '../components/Menu';
import DropdownMenu from '../components/DropdownMenu';
import TextInput from '../components/TextInput';
import DefaultButton from '../components/DefaultButton';

const MenuContainer = ({
    gameModes,
    currentMode,
    gameStatus,
    getGameModes,
    setCurrentMode,
    setUsername,
    setGameStatus
}) => {
    const [nameInputValue, setNameInputValue] = useState('');
    const [nameInputError, setNameInputError] = useState(false);
    const [selectedMode, setSelectedMode] = useState(null);

    useEffect(() => {
        getGameModes();
    }, []);

    return (
        <Menu>
            <DropdownMenu 
                title={currentMode.mode}
                items={gameModes}
                onItemClick={onModeClickHandler}
            />
            <TextInput 
                value={nameInputValue}
                onChange={onNameInputChange}
                placeholder="Enter your name"
                error={nameInputError}
            />
            <DefaultButton 
                onClick={onPlayButtonClick}
                disabled={gameStatus === 'START' ? true : false}
            >
                {gameStatus !== 'FIRST_GAME' ? 'Play again' : 'Play'}
            </DefaultButton>
        </Menu>
    )

    function onModeClickHandler(modeTitle) {
        const chosenMode = gameModes.filter(mode => mode.mode === modeTitle)[0];
        setSelectedMode(chosenMode);
    };
    function onNameInputChange(e) {
        setNameInputValue(e.target.value);
    };
    function onPlayButtonClick() {
        if (nameInputValue.length < 1) {
            setNameInputError(true);
            return;
        }
        if (!selectedMode) setCurrentMode(gameModes[0]);
        else setCurrentMode(selectedMode);
        setNameInputError(false);
        setUsername(nameInputValue);
        setGameStatus('START');
    };
};

// REDUX STATE, DISPATCH PROPS
const mapStateToProps = state => ({
    gameModes: state.gameModes,
    gameStatus: state.gameStatus,
    currentMode: state.currentMode
});
const mapDispatchToProps = dispatch => ({
    getGameModes: () => dispatch(getGameModes()),
    setCurrentMode: mode => dispatch(setCurrentMode(mode)),
    setUsername: name => dispatch(setUsername(name)),
    setGameStatus: status => dispatch(setGameStatus(status))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuContainer);