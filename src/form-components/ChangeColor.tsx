import React, { useState } from "react";
import { FormCheck } from "react-bootstrap";

const Colors = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "White",
    "Black",
    "Orange",
    "Cyan"
];

export function ChangeColor(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(0);
    return (
        <div>
            {Colors.map((color: string, index = 0) => (
                <FormCheck
                    inline
                    key={index}
                    label={color}
                    style={{ backgroundColor: Colors[index] }}
                    type="radio"
                    name="color"
                    onChange={() => setColorIndex(index)}
                    checked={colorIndex === index}
                ></FormCheck>
            ))}
            <h3>Change Color</h3>
            You have chosen
            {
                <span style={{ backgroundColor: Colors[colorIndex] }}>
                    {Colors[colorIndex]}
                </span>
            }
        </div>
    );
}
