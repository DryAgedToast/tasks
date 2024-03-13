//import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Button, FormControl, FormGroup, FormLabel } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setattempts] = useState<number>(3);
    const [ratt, setratt] = useState<string>("");
    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Number of attempts left: {attempts}</div>
            <FormGroup>
                <FormLabel>Requested number of additional attempts:</FormLabel>
                <FormControl
                    type="number"
                    value={ratt}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setratt(event.target.value)
                    }
                ></FormControl>
            </FormGroup>
            <Button
                onClick={() => setattempts(attempts - 1)}
                disabled={attempts === 0}
            >
                use
            </Button>
            <Button
                onClick={() => setattempts(attempts + parseInt(ratt))}
                disabled={ratt === ""}
            >
                gain
            </Button>
        </div>
    );
}
