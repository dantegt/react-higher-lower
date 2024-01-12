import React, { useState } from "react";

export default function Rules() {
    const [open, setOpen] = useState(false);

    return (
        <div className="rules">
            <button type="button" onClick={() => setOpen(true)}>Rules</button>
            <dialog className="rules-dialog" open={open}>
                <h3>Rules</h3>
                <p>Guess whether next card on the deck will be ▲ Higher or Lower ▼</p>
                <p>5 correct guesses and you are the winner! 🏆</p>
                <p>Scale: ▼  A 2 3 4 5 6 7 8 9 10 J Q K  ▲</p>
                <p>Pulling out a Joker is a free win! Best of Lucks! 🍀</p>
                <button type="button" onClick={() => setOpen(false)}>Close</button>
            </dialog>
        </div>
    )
}