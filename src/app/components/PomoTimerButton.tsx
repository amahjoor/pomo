"use client";

import { useState, useRef } from "react";

interface ButtonProps {
    isActive: boolean;
    toggleTimer: () => void;
    resetTimer: () => void;
}

export default function Button({
    isActive,
    toggleTimer,
    resetTimer,
}: ButtonProps) {
    const holdTimer = useRef<NodeJS.Timeout | null>(null);

    const startResetTimer = () => {
        // Start a timeout to trigger the reset after 4 seconds
        holdTimer.current = setTimeout(() => {
            resetTimer(); // Call the reset function passed via props
        }, 4000);
    };
  
    const cancelResetTimer = () => {
        // Clear the timer if the user releases the button before 4 seconds
        if (holdTimer.current) {
            clearTimeout(holdTimer.current);
            holdTimer.current = null;
        }
    };
  
    return (
        <a
            className="rounded-full border border-black/[.08] dark:border-white/[.145] 
            transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] 
            hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 min-w-40 transition-all duration-500 ease-in-out"
            onClick={toggleTimer} // Toggle start/pause on click
            onMouseDown={startResetTimer} // Start the reset timer on hold
            onMouseUp={cancelResetTimer} // Cancel reset on release
            onMouseLeave={cancelResetTimer} // Cancel reset if dragged away
        >
            {isActive ? "pause" : "start"}
        </a>
    );
}