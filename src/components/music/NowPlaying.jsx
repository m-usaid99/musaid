import React, { useEffect, useState } from 'react';
import styles from '../../styles/NowPlaying.module.css';

const NowPlaying = ({ albumArtUrl, trackName, artistName }) => {
  const [initialAnimation, setInitialAnimation] = useState(true);

  useEffect(() => {
    const str = "now playing  .  now playing  .  ";
    const text = document.getElementById("text");
    for (let i = 0; i < str.length; i++) {
      let span = document.createElement('span');
      span.innerHTML = str[i];
      text.appendChild(span);
      span.style.transform = `rotate(${11 * i}deg)`;
    }

    // Trigger the initial animation
    const timeout = setTimeout(() => {
      setInitialAnimation(false);
    }, 3000); // Adjust this duration based on your preference

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={styles.nowPlayingWrapper}>
      <div className={`${styles.nowPlayingContainer} ${initialAnimation ? styles.initial : ''}`}>
        <p id="text"></p>
        <img src={albumArtUrl} alt="Album Art" />
      </div>
      <div
        className={`${styles.trackInfo} ${initialAnimation ? styles.initialAnimation : styles.normalState}`}
      >
        <span className={styles.trackName}>{trackName}</span>
        <span className={styles.artistName}>{artistName}</span>
      </div>
    </div>
  );
};

export default NowPlaying;

