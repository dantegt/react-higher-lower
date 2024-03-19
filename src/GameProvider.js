import React, { createContext, useContext, useState } from 'react';
import { deck as sourceDeck } from './Deck';
import PropTypes from 'prop-types';

const GameDataContext = createContext();

export const useGameData = () => useContext(GameDataContext);

export default function GameProvider({ children }) {
  const initialCard = [...sourceDeck].reverse()[1];
  const initialDeck = shuffleDeck([...sourceDeck]);

  const [currentCard, setCurrentCard] = useState(initialCard);
  const [nextCard, setNextCard] = useState();
  const [deck, setDeck] = useState(initialDeck);
  const [play, setPlay] = useState(false);
  const [checking, setChecking] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [guesses, setGuesses] = useState(5);
  const [score, setScore] = useState(0);
  const [turn, setTurn] = useState(1);

  const onStartPlaying = () => {
    const card = onDrawCard();
    setGuesses(5);
    setCurrentCard(() => card);
    setPlay(true);
  };

  const onPlayAgain = () => {
    const newDeck = shuffleDeck([...sourceDeck.map((card) => ({ ...card }))]);
    console.log('newDeck', newDeck);
    setHasWon(false);
    setChecking(false);
    setDeck(() => newDeck);
    setScore(0);
    setTurn(1);
    const initial = onDrawCard();
    setCurrentCard(initial);
    setGameOver(false);
    setPlay(true);
  };

  const onDrawCard = () => {
    const [card, ...rest] = deck;
    setDeck(rest);
    return card;
  };

  const onGuess = (guess) => {
    console.log(`Turn ${turn}: Next card is ${guess} than ${currentCard.number}`);
    const newCard = onDrawCard();

    setNextCard(newCard);
    setChecking(true);
    console.log(newCard);
    console.log(`🃏 Next card is ${newCard.number}${newCard.suit}`);

    const isJoker = currentCard.number === 'JOKER' || newCard.number === 'JOKER';
    const isEqual = currentCard.value === newCard.value;
    const isLower = guess === 'Lower' && currentCard.value > newCard.value;
    const isHigher = guess === 'Higher' && currentCard.value < newCard.value;

    console.log('currentCard', currentCard);
    console.log('guess', guess);
    console.log('newCard', newCard);

    if (isJoker || isEqual || isLower || isHigher) {
      showResult(newCard);
    } else {
      showGameOver();
    }
  };

  const showResult = (newCard) => {
    setScore(score + 1);
    setTimeout(() => {
      if (score < guesses) {
        newTurn(newCard);
      } else {
        setHasWon(true);
        showGameOver();
      }
    }, 2000);
  };

  const newTurn = (newCard) => {
    setTurn(turn + 1);
    setCurrentCard(newCard);
    setChecking(false);
  };

  const showGameOver = () => {
    setGameOver(true);
  };

  return (
    <GameDataContext.Provider
      value={{
        play,
        deck,
        score,
        guesses,
        turn,
        checking,
        gameOver,
        hasWon,
        currentCard,
        nextCard,
        onDrawCard,
        onStartPlaying,
        onGuess,
        onPlayAgain
      }}>
      {children}
    </GameDataContext.Provider>
  );
}

function shuffleDeck(deck) {
  return deck
    .map((card) => ({ sort: Math.random(), value: card }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
}

GameProvider.propTypes = {
  children: PropTypes.node
};
