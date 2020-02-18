import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import colors from '../constants/colors';
import { updateLiderBoard } from '../action_creators/asyncActions';
import { setGameStatus } from '../action_creators/syncActions';
import { getRandomInt, createGameTable } from '../helpers/';

import GameArea from '../components/GameArea';
import Title from '../components/Title';
import GameBoard from '../components/GameBoard';
import GameRow from '../components/GameRow';
import GameBox from '../components/GameBox';

const GameContainer = ({
    gameStatus,
    setGameStatus,
    currentMode,
    userName,
    updateLiderBoard
}) => {
    const [gameRows, setGameRows] = useState([]);
    const [winner, setWinner] = useState('');

    useEffect(() => {
        if (gameStatus === 'START') {
            setGameRows(createGameTable(currentMode.field, GameBox, GameRow));
        }
    }, [gameStatus])

    useEffect(() => {
        if (gameStatus === 'START') {
            const gameBoxes = Array.prototype.slice.call(document.querySelectorAll('.game-box'));
            gameBoxes.forEach(element => {
                element.addEventListener('click', onGameBoxClick);
            });
            startGame(gameBoxes, 0, 0);
            return () => {
                gameBoxes.forEach(element => {
                    element.removeEventListener('click', onGameBoxClick);
                });
                gameBoxes.forEach(element => element.style.backgroundColor = colors.buttonTextColor);
            };
        }
    }, [gameRows]);

    return (
        <GameArea>
            <Title>{winner}</Title>
            <GameBoard height={currentMode.field * 50}>
                {
                    gameRows
                }
            </GameBoard>
        </GameArea>
    );

    //CONTAINER FUNCTIONS
    function startGame(array, userCount, AICount) {
        if (AICount > (currentMode.field * currentMode.field / 2)) {
            setWinner('Computer won')
            setGameStatus('STOP');
            updateLiderBoard('AI computer');
            return;
        }
        else if (userCount > (currentMode.field * currentMode.field / 2)) {
            setWinner(`${userName} won`);
            setGameStatus('STOP');
            updateLiderBoard(userName);
            return;
        }
        setTimeout(() => {
            const randomIndex = getRandomInt(0, array.length);
            array[randomIndex].style.backgroundColor = colors.blue;
            setTimeout(() => {
                if (array[randomIndex].style.backgroundColor === colors.green) {
                    userCount++;
                }
                else {
                    AICount++;
                    array[randomIndex].style.backgroundColor = colors.red;
                }
                const newArray = array.filter((elem, index) => index !== randomIndex);
                startGame(newArray, userCount, AICount);
            }, currentMode.delay)
        }, 500)
    }

    function onGameBoxClick(e) {
        if (e.target.style.backgroundColor === colors.blue) {
            e.target.style.backgroundColor = colors.green;
        }
        return;
    }

};


// REDUX STATE, DISPATCH PROPS
const mapStateToProps = state => ({
    gameStatus: state.gameStatus,
    currentMode: state.currentMode,
    userName: state.userName
});

const mapDispatchToProps = dispatch => ({
    setGameStatus: status => dispatch(setGameStatus(status)),
    updateLiderBoard: winner => dispatch(updateLiderBoard(winner))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);