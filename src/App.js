import React from 'react';
import './App.css';

import MenuContainer from './containers/MenuContainer';
import RaitingContainer from './containers/RaitingContainer';
import GameContainer from './containers/GameContainer';

function App() {
  return (
    <div className="App">
      <div className="app--content">
        <MenuContainer />
        <GameContainer />
      </div>
      <div className="app--sidebar">
        <RaitingContainer />
      </div>
    </div>
  );
}

export default App;
