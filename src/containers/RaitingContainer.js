import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getLiderBoard } from '../action_creators/asyncActions';

import Sidebar from '../components/Sidebar';
import Title from '../components/Title';
import WinnersList from '../components/WinnersList';

const RaitingContainer = ({
    liderBoard,
    getLiderBoard
}) => {

    useEffect(() => {
        getLiderBoard();
    }, []);

    return (
        <Sidebar>
            <Title>Leader Board</Title>
            <WinnersList winners={liderBoard} />
        </Sidebar>
    );
};

const mapStateToProps = state => ({
    liderBoard: state.liderBoard
});

const mapDispatchToProps = dispatch => ({
    getLiderBoard: () => dispatch(getLiderBoard())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RaitingContainer);