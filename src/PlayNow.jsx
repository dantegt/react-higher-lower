import React from 'react';
import { GiPlayButton } from 'react-icons/gi';
import { useGameData } from './GameProvider';

export function PlayNow() {
  const { onStartPlaying } = useGameData();
  return (
    <button onClick={() => onStartPlaying()}>
      <GiPlayButton className="play-button-icon" /> Play Now
    </button>
  );
}
