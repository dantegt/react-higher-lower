import React from "react";
import { useGameData } from "./GameProvider";

export default function Count() {
    const { deck } = useGameData()
    return (
        <div className="deckCount">{deck.length} cards left</div>
    )
}