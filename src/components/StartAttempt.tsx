import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setatt] = useState<number>(4);

    const [inprog, setprog] = useState<boolean>(false);

    function la(): void {
        setatt(attempts - 1);
        setprog(true);
    }
    return (
        <div>
            <span>{attempts}</span>
            <div>
                <Button disabled={inprog || attempts === 0} onClick={la}>
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button disabled={inprog} onClick={() => setatt(attempts + 1)}>
                    Mulligan
                </Button>
            </div>
            <div>
                <Button disabled={!inprog} onClick={() => setprog(false)}>
                    Stop Quiz
                </Button>
            </div>
        </div>
    );
}
