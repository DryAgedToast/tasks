/* eslint-disable indent */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday = "🎄" | "🎊" | "🎂" | "🦃" | "🎃";
    const [hd, sethd] = useState<Holiday>("🎄");
    function ah(): void {
        hd === "🎂"
            ? sethd("🎄")
            : hd === "🎄"
            ? sethd("🎃")
            : hd === "🎃"
            ? sethd("🎊")
            : hd === "🎊"
            ? sethd("🦃")
            : sethd("🎂");
    }
    function yh(): void {
        hd === "🎊"
            ? sethd("🎂")
            : hd === "🎂"
            ? sethd("🎃")
            : hd === "🎃"
            ? sethd("🦃")
            : hd === "🦃"
            ? sethd("🎄")
            : sethd("🎊");
    }
    return (
        <div>
            Holiday: {hd}
            <Button onClick={ah}>Advance by Alphabet</Button>
            <Button onClick={yh}>Advance by Year</Button>
        </div>
    );
}
