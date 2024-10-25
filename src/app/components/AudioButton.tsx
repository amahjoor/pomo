"use client";

// components/AudioButton.tsx
import React, { useRef, useState } from 'react';

interface AudioButtonProps {
  src: string;
}

const AudioButton: React.FC<AudioButtonProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const togglePlayPause = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        await audioRef.current.play(); // Ensure play is awaited
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error("Audio playback failed:", error);
    }
  };

  return (
    <div className='absolute top-5 right-7'>
      <audio ref={audioRef} src={src} />
      <button onClick={togglePlayPause}>
        {isPlaying ? 'pause' : 'play'}
      </button>
    </div>
  );
};

export default AudioButton;
