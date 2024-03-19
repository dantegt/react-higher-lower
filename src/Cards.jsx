import React from 'react';
import Card from './Card';
import { useGameData } from './GameProvider';

export default function Cards() {
  const { checking, currentCard, nextCard } = useGameData();
  return (
    <div className="cards">
      <Card type={'current'} card={currentCard} />
      {nextCard && checking && <Card type={'next'} card={nextCard} />}
    </div>
  );
}
