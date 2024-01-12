import React from "react";
import Card from "./Card";
import Count from "./Count";
import Guesses from "./Guesses";
import Actions from "./Actions";
import Notification from "./Notification";
import PlayAgain from "./PlayAgain";
import Rules from "./Rules";
import { GiPlayButton } from "react-icons/gi"
import { useGameData } from "./GameProvider";

export default function Game() {
    const { play, checking, currentCard, nextCard } = useGameData()
    return (
        <div className="game">
            <h1>▲ Higher / Lower ▼</h1>
            <div className="cards">
                <Card type={"current"} card={currentCard}/>
                { nextCard && checking &&
                <Card type={"next"} card={nextCard}/>
                }
            </div>
            <div className="actions">
                { !play && <PlayNow /> }
                {  play && <Cards /> }
            </div>
            <Rules />
        </div>
    )
}

function Cards() {
    const { turn, checking, gameOver } = useGameData()
    return (
        <>
        <h2 className="turn">Turn {turn}</h2>
        { checking && <Notification />}
        { !checking &&
        <>
        <Actions />
        <Count />
        </>
        }
        <Guesses />
        { gameOver && <PlayAgain />}
        </>
    )
}

function PlayNow() {
    const { onStartPlaying } = useGameData()
    return (
        <button onClick={() => onStartPlaying()}>
            <GiPlayButton className="play-button-icon" /> Play Now
        </button>
    )
}

// ♠♣♥♦