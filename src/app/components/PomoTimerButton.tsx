"use client";

import { useState, useRef } from "react";

interface ButtonProps {
    isActive: boolean;
    toggleTimer: () => void;
    resetTimer: () => void;
}

/* Button Component */
export default function Button({
    isActive,
    toggleTimer,
    resetTimer,
}: ButtonProps) {
    const holdTimer = useRef<NodeJS.Timeout | null>(null);
    const [progress, setProgress] = useState(0);
    const [isFilling, setIsFilling] = useState(false);

    /* Timer reset functionality */
    const startResetTimer = () => {
        setIsFilling(true);

        let step = 0;
        holdTimer.current = setInterval(() => {
            step += 2.5; /* Increase progress percentage (2.5 * 40 = 100) */
            setProgress(step);
            if (step >= 100) {
                clearInterval(holdTimer.current!); 
                resetTimer();
                setIsFilling(false);
                setProgress(0);
            }
        }, 100); /* Update progress every 100ms */
    };

    const cancelResetTimer = () => {
        if (holdTimer.current) {
            clearInterval(holdTimer.current);
            holdTimer.current = null;
        }
        setIsFilling(false);
        setProgress(0);
    };

    return (
        <a
        className="relative overflow-hidden rounded-full border border-black/[.08] dark:border-white/[.145] 
        transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] 
        hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 min-w-40 transition-all duration-500 ease-in-out"
        onClick={toggleTimer}
        onMouseDown={startResetTimer}
        onMouseUp={cancelResetTimer}
        onMouseLeave={cancelResetTimer}
        >
        {/* Progress Overlay */}
        <div
            className="absolute inset-0 bg-white transition-all duration-100 ease-linear"
            style={{
                width: `${progress}%`,
                opacity: isFilling ? 0.5 : 0,
            }}
        ></div>
            {/* Button Text */}
        <span className="relative z-10">{isActive ? "pause" : "start"}</span>
        </a>
    );
}
