import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getLiderBoard } from '../action_creators/asyncActions';

const RaitingContainer = ({
    liderBoard,
    getLiderBoard
}) => {

    useEffect(() => {
        getLiderBoard();
    }, []);

    return (
        <div>

        </div>
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