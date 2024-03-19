import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Game from './Game';
import Gameboard from './components/Gameboard';
import GameProvider from './GameProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GameProvider>
      <Gameboard>
        <Game />
      </Gameboard>
    </GameProvider>
  </React.StrictMode>
);
