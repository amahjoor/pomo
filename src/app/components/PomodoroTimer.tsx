"use client";

import { useState, useEffect } from "react";

const WORK_TIME = 240 * 60; // 25 minutes in seconds
const BREAK_TIME = 5 * 60; // 5 minutes in seconds

export default function PomodoroTimer() {
const [timeLeft, setTimeLeft] = useState(WORK_TIME);
const [isBreak, setIsBreak] = useState(false);
const [isActive, setIsActive] = useState(false);

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

/*
            <button
                className="bg-green-500 text-white px-4 py-2 rounded-md"
                onClick={() => setIsActive(true)}
            >Start</button>
            <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={() => setIsActive(false)}
            >Pause</button>
            <button
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
            onClick={() => {
            setIsActive(false);
            setTimeLeft(WORK_TIME);
            setIsBreak(false);
            }}
            >Reset</button>
*/


return (
    <div className="flex flex-col items-center gap-2">
        <h2 className="text-1xl">{isBreak ? "take a break." : "you've got this."}</h2>
        <p className="text-3xl font-mono">{formatTime(timeLeft)}</p>
        <div className="flex gap-3">
            <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                onClick={toggleTimer}
            >
            {isActive ? "pause" : "start"}
          </a>
        </div>
        </div>
    </div>
);
}