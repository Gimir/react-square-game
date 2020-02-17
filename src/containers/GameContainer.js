import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import colors from '../constants/colors';
import { setGameStatus } from '../action_creators/syncActions';

import GameArea from '../components/GameArea';
import Title from '../components/Title';
import GameBoard from '../components/GameBoard';
import GameRow from '../components/GameRow';
import GameBox from '../components/GameBox';

const GameContainer = ({
    gameStatus,
    setGameStatus,
    currentMode,
    userName
}) => {
    const [gameRows, setGameRows] = useState([]);
    const [winner, setWinner] = useState('');
    useEffect(() => {
        if (gameStatus === 'START') setGameRows(createGameRows(currentMode.field))
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

    function createGameRows(amount) {
        const rows =[];
        const cols = [];
        for (let i = 0; i < amount; i++) {
            cols.push(<GameBox width={100/amount} key={i}></GameBox>)
        };
        for (let i = 0; i < amount; i++) {
            let row = <GameRow height={100/amount} key={i}>
                {cols}
            </GameRow>;
            rows.push(row);
        };
        return rows;
    };

    function startGame(array, userCount, AICount) {
        if (AICount > (currentMode.field * currentMode.field / 2)) {
            setWinner('Computer won')
            setGameStatus('STOP');
            return;
        }
        else if (userCount > (currentMode.field * currentMode.field / 2)) {
            setWinner(`${userName} won`);
            setGameStatus('STOP');
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

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function onGameBoxClick(e) {
        if (e.target.style.backgroundColor === colors.blue) {
            e.target.style.backgroundColor = colors.green;
        }
        return;
    }

};

const mapStateToProps = state => ({
    gameStatus: state.gameStatus,
    currentMode: state.currentMode,
    userName: state.userName
});

const mapDispatchToProps = dispatch => ({
    setGameStatus: status => dispatch(setGameStatus(status))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);