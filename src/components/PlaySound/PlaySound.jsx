import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import okean from '../../okean.mp3';
import { VscMute, VscUnmute } from 'react-icons/vsc';
import css from './PlaySound.module.css';

export const Sound = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [play, { pause }] = useSound(okean, { volume: 0.25, loop: true });

  useEffect(() => {
    if (isPlaying) {
      play();

      return () => {
        pause();
      };
    }
  }, [isPlaying, play, pause]);

  const handleButtonClick = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    setIsPlaying(true);
  }, []);

  return (
    <div>
      <button className={css.button} onClick={handleButtonClick}>
        {isPlaying ? <VscMute /> : <VscUnmute />}
      </button>
    </div>
  );
};
