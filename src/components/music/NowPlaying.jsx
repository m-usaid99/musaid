import React, { useEffect, useState } from 'react';
import { getRecentTrack } from '../../utils/lastfmApi';
import styles from '../../styles/NowPlaying.module.css';
import { useMediaQuery } from 'react-responsive';

const NowPlaying = () => {
  const [initialAnimationDone, setInitialAnimationDone] = useState(false);
  const [trackName, setTrackName] = useState('');
  const [artistName, setArtistName] = useState('');
  const [albumArtUrl, setAlbumArtUrl] = useState('');
  const [trackUrl, setTrackUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [trackUpdated, setTrackUpdated] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    const fetchRecentTrack = async () => {
      try {
        const trackData = await getRecentTrack();
        if (trackData) {
          const newTrackName = trackData.name;
          if (newTrackName !== trackName) {
            setTrackName(newTrackName);
            setArtistName(trackData.artist['#text']);
            setAlbumArtUrl(trackData.image[2]['#text']);
            setTrackUrl(trackData.url);
            setError(false);
            setTrackUpdated(true);
            setTimeout(() => setTrackUpdated(false), 3000);
          }
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentTrack();
    const interval = setInterval(fetchRecentTrack, 10000);

    return () => clearInterval(interval);
  }, [trackName]);

  useEffect(() => {
    const str = "listening now .  listening now  .  ";
    const text = document.getElementById("text");
    if (text) {
      for (let i = 0; i < str.length; i++) {
        let span = document.createElement('span');
        span.innerHTML = str[i];
        text.appendChild(span);
        span.style.transform = `rotate(${11 * i}deg)`;
      }
      const timeout = setTimeout(() => {
        setInitialAnimationDone(true);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, []);

  if (error) return null;

  if (isMobile) return null;

  return (
    <a href={trackUrl} target="_blank" rel="noopener noreferrer"
      className={`${styles.nowPlayingWrapper} ${trackUpdated ? styles.initialAnimation : ''} ${!initialAnimationDone ? styles.initialAnimation : ''}`} >
      <div className={styles.trackInfo}>
        <span className={styles.trackName}>{trackName}</span>
        <span className={styles.artistName}>{artistName}</span>
      </div>
      <div className={styles.nowPlayingContainer}>
        <p id="text"></p>
        {loading ? (
          <div className={styles.loadingSpinner}>
            {/* Your loading animation here */}
          </div>
        ) : (
          <img src={albumArtUrl} alt="Album Art" />
        )}
      </div>
    </a>
  );
};

export default NowPlaying;

