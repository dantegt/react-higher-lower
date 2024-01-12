import React from "react";
import { useGameData } from "./GameProvider";

export default function Actions() {
    const { onGuess, checking, turn } = useGameData()
    return (
    <div className="buttons">
        { turn < 3 &&
        <em className="guide">Will next card be...?</em>
        }
        <button disabled={checking} onClick={() => onGuess('Higher')}>▲ Higher</button>
        <button disabled={checking} onClick={() => onGuess('Lower')}>▼ Lower</button>
    </div>
    )
}

// ♠♣♥♦