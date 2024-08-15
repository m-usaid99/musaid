import React, { useEffect, useState } from 'react';
import styles from '../../styles/NowPlaying.module.css';

const NowPlaying = ({ albumArtUrl, trackName, artistName }) => {
  const [initialAnimationDone, setInitialAnimationDone] = useState(false);

  useEffect(() => {
    const str = "now playing  .  now playing  .  ";
    const text = document.getElementById("text");
    for (let i = 0; i < str.length; i++) {
      let span = document.createElement('span');
      span.innerHTML = str[i];
      text.appendChild(span);
      span.style.transform = `rotate(${11 * i}deg)`;
    }

    // Set a timeout to remove the initial animation class
    const timeout = setTimeout(() => {
      setInitialAnimationDone(true);
    }, 3000); // Duration matches the initial animation duration

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`${styles.nowPlayingWrapper} ${!initialAnimationDone ? styles.initialAnimation : ''}`}>
      <div className={styles.trackInfo}>
        <span className={styles.trackName}>{trackName}</span>
        <span className={styles.artistName}>{artistName}</span>
      </div>
      <div className={styles.nowPlayingContainer}>
        <p id="text"></p>
        <img src={albumArtUrl} alt="Album Art" />
      </div>
    </div>
  );
};

export default NowPlaying;

