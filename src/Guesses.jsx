import React from 'react';
import { GiCardRandom } from 'react-icons/gi';
import { useGameData } from './GameProvider';

export default function Guesses() {
  const { deck, guesses } = useGameData();
  return (
    <>
      <div className="guesses">
        {[...Array(guesses)].map((n, i) => (
          <GiCardRandom key={i.toString()} className="guess" color={GetIconColor(i)} />
        ))}
      </div>
      <div className="deckCount">{deck.length} cards left</div>
    </>
  );
}

function GetIconColor(i) {
  const { score, gameOver, hasWon } = useGameData();
  if (gameOver & !hasWon) return 'red';
  if (score > i) return 'green';
  return 'lightgrey';
}
