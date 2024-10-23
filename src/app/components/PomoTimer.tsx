"use client";

import { useState, useEffect, useRef } from "react";
import Button from "./PomoTimerButton";

const WORK_TIME = 240 * 60; // 240 minutes in seconds
const BREAK_TIME = 55 * 60; // 55 minutes in seconds

export default function PomodoroTimer() {
    const [timeLeft, setTimeLeft] = useState(WORK_TIME);
    const [isBreak, setIsBreak] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isReset, setIsReset] = useState(false);

    const holdTimer = useRef<NodeJS.Timeout | null>(null); // Ref to manage hold timeout

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (isActive && timeLeft > 0) {
            timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
        } else if (isActive && timeLeft === 0) {
            setIsBreak((prev) => !prev); // Toggle between work and break sessions
            setTimeLeft(isBreak ? WORK_TIME : BREAK_TIME);
        }
        return () => clearInterval(timer); // Cleanup on unmount
    }, [isActive, timeLeft, isBreak]);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    };

    const toggleTimer = () => {
        setIsActive((prev) => !prev);
    };

    const startResetTimer = () => {
        holdTimer.current = setTimeout(() => {
            resetTimer();
            setIsReset(true);
        }, 4000);  
    }

    const cancelResetTimer = () => {
        if (holdTimer.current) {
            clearTimeout(holdTimer.current);
            holdTimer.current = null;
        }
    };

    const resetTimer = () => {
        setIsActive(false);
        setTimeLeft(WORK_TIME);
        setIsBreak(false);
    };

    return (
        <div 
            className="flex flex-col items-center gap-2">
            <h2 className="text-1xl">{isBreak ? "take a break." : "you've got this."}</h2>
            <p className="text-3xl font-mono">{formatTime(timeLeft)}</p>
            <Button
                isActive={isActive}
                toggleTimer={toggleTimer}
                resetTimer={resetTimer}
            />
        </div>
    );
}