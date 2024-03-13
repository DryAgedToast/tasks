import React, { useState } from "react";
import { FormGroup, FormLabel, FormSelect } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);
    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <FormGroup controlId="answers">
                <FormLabel>Choose your answer</FormLabel>
                <FormSelect value={choice} onChange={updateChoice}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </FormSelect>
            </FormGroup>
            {choice === expectedAnswer ? <div>✔️</div> : <div>❌</div>}
        </div>
    );
}
