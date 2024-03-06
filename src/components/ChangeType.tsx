import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [qt, setqt] = useState<QuestionType>("short_answer_question");

    function changeq(): void {
        qt === "multiple_choice_question"
            ? setqt("short_answer_question")
            : setqt("multiple_choice_question");
    }

    return (
        <div>
            <Button onClick={changeq}>Change Type</Button>
            {qt === "multiple_choice_question" ? (
                <div>Multiple Choice</div>
            ) : (
                <div>Short Answer</div>
            )}
        </div>
    );
}
