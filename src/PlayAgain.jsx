import React from "react";
import { useGameData } from "./GameProvider";

export default function PlayAgain() {
    const { onPlayAgain } = useGameData()
    return (
    <div className="play-again">
        <button onClick={() => onPlayAgain()}>Play Again?</button>
    </div>
    )
}

// ♠♣♥♦