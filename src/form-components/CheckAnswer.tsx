import React, { useState } from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setanswer] = useState<string>("");

    function UpdateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setanswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <FormGroup controlId="InputAnswer">
                <FormLabel>Input Answer:</FormLabel>
                <FormControl
                    value={answer}
                    onChange={UpdateAnswer}
                ></FormControl>
            </FormGroup>
            {answer === expectedAnswer ? <div>✔️</div> : <div>❌</div>}
        </div>
    );
}
