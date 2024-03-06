import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [d1, setd1] = useState<number>(1);
    const [d2, setd2] = useState<number>(6);
    return (
        <div>
            <span datatest-id="left-die">{d1}</span>
            <span datatest-id="right-die">{d2}</span>
            <Button onClick={() => setd1(d6())}>Roll Left</Button>
            <Button onClick={() => setd2(d6())}>Roll Right</Button>
            {d1 === 1 && d2 === 1 ? (
                <div>Lose</div>
            ) : (
                d1 === d2 && <div>Win</div>
            )}
        </div>
    );
}
