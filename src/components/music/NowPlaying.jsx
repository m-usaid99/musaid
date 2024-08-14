import React, { useEffect } from 'react';
import styles from '../../styles/NowPlaying.module.css';

const NowPlaying = ({ albumArtUrl }) => {
  useEffect(() => {
    const str = "now playing  .  now playing  .  ";
    const text = document.getElementById("text");
    for (let i = 0; i < str.length; i++) {
      let span = document.createElement('span');
      span.innerHTML = str[i];
      text.appendChild(span);
      span.style.transform = `rotate(${11 * i}deg)`;
    }
  }, []);

  return (
    <div className={styles.nowPlayingContainer}>
      <p id="text"></p>
      <img src={albumArtUrl} />
    </div>
  );
};

export default NowPlaying;

