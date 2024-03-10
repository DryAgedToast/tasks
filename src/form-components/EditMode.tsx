/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { FormCheck, FormControl, FormGroup } from "react-bootstrap";

export function EditMode(): JSX.Element {
    interface idk {
        name: string;
        isStudent: boolean;
    }
    const [name, setName] = useState<idk>({
        name: "Your Name",
        isStudent: false
    });
    const [editmode, setEdit] = useState<boolean>(false);

    function UpdateStudent() {
        setName({ ...name, isStudent: !name.isStudent });
    }
    function updateEdit() {
        setEdit(!editmode);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <FormGroup>
                <FormCheck
                    type="switch"
                    label="Edit Mode"
                    checked={editmode}
                    onChange={updateEdit}
                ></FormCheck>
                <FormControl
                    type="string"
                    disabled={!editmode}
                    value={name.name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setName({ ...name, name: event.target.value })
                    }
                ></FormControl>
                <FormCheck
                    disabled={!editmode}
                    type="checkbox"
                    label="Are you a student?"
                    checked={name.isStudent}
                    onChange={UpdateStudent}
                ></FormCheck>
            </FormGroup>
            {name.name} is {!name.isStudent && <span>not </span>}a student
        </div>
    );
}
