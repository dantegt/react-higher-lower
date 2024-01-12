import React from "react";
import { useGameData } from "./GameProvider";

export default function Notification() {
    const { gameOver } = useGameData()
    const colorStyle = gameOver ? 'game-over' : 'correct'
    const label = gameOver ? 'GAME OVER' : 'CORRECT!'
    return (
        <div className={`notification ${colorStyle}`}>
        { label }
        </div>
    )
}