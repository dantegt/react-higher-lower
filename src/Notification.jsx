import React from 'react';
import PropTypes from 'prop-types';

export default function Notification({ gameOver, hasWon }) {
  let colorStyle = hasWon ? 'game-over' : 'correct';
  let label = 'CORRECT!';
  if (gameOver) {
    label = hasWon ? 'WINNER!' : 'GAME OVER';
  }
  return <div className={`notification ${colorStyle}`}>{label}</div>;
}

Notification.propTypes = {
  gameOver: PropTypes.bool,
  hasWon: PropTypes.bool
};
