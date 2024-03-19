import Guesses from '../Guesses';
import Notification from '../Notification';
import Actions from '../Actions';
import PlayAgain from '../PlayAgain';
import PropTypes from 'prop-types';

export default function GameActions({ turn, checking, gameOver, hasWon }) {
  return (
    <>
      <div className="actions">
        <h2 className="turn">Turn {turn}</h2>
        {checking ? <Notification gameOver={gameOver} hasWon={hasWon} /> : <Actions />}

        <Guesses />
        {gameOver && <PlayAgain />}
      </div>
    </>
  );
}

GameActions.propTypes = {
  turn: PropTypes.number,
  checking: PropTypes.bool,
  gameOver: PropTypes.bool,
  hasWon: PropTypes.bool
};
