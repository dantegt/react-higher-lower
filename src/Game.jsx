import React from 'react';
import Cards from './Cards';
import { useGameData } from './GameProvider';
import { PlayNow } from './PlayNow';
import GameActions from './components/GameActions';

export default function Game() {
  const { play, turn, checking, gameOver, hasWon } = useGameData();
  return (
    <>
      <Cards />
      {!play ? <PlayNow /> : null}
      {play ? (
        <GameActions turn={turn} checking={checking} gameOver={gameOver} hasWon={hasWon} />
      ) : null}
    </>
  );
}
