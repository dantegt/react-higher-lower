import React from "react";

export default function Card({ card, type }) {
    const CardIcon = card.icon
    return (
        <div className={`card-wrapper ${type}`}>
            <CardIcon card={card} color={card.color} className={`card-icon `} />
        </div>
    )
}