import React from 'react';
import './App.css';

import Game from './components/game/Game';

function App() {
  return (
    <div className="container">
      <Game rows={5} columns={6} activeCellsCount={5} />
    </div>
  );
}

export default App;
