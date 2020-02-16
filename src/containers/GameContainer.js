import React from 'react';
import { connect } from 'react-redux';

import GameArea from '../components/GameArea';

const GameContainer = ({

}) => {
    return (
        <GameArea>

        </GameArea>
    );
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);