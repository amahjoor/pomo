"use client";

// components/AudioButton.tsx
import React, { useRef, useState } from 'react';

interface AudioButtonProps {
  src: string;
}

const AudioButton: React.FC<AudioButtonProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
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
