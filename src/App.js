import React from 'react';
import './App.css';

import MenuContainer from './containers/MenuContainer';

function App() {
  return (
    <div className="App">
      <div className="app--content">
        <MenuContainer />
      </div>
      <div className="app--sidebar">

      </div>
    </div>
  );
}

export default App;
