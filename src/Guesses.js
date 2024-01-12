import React from "react";
import { GiCardRandom } from "react-icons/gi"
import { useGameData } from "./GameProvider";


export default function Guesses() {
    const { guesses } = useGameData()
    const createArray = length => [...Array(length)]
    
    
    return (
        <>
        <div className="guesses">
        {createArray(guesses).map((n, i) => (
            <GiCardRandom
            key={i.toString()}
            className="guess"
            color={GetIconColor(i)} />
        ))}
        </div>
        </>
    )
}

function GetIconColor(i) {
    const { score, gameOver } = useGameData()
    if (gameOver) return "red"
    if (score > i) return "green"
    return "lightgrey"
}