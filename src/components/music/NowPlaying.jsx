import React, { useEffect, useState } from 'react';
import { getRecentTrack } from '../../utils/lastfmApi';
import styles from '../../styles/NowPlaying.module.css';

const NowPlaying = () => {
  const [initialAnimationDone, setInitialAnimationDone] = useState(false);
  const [trackName, setTrackName] = useState('');
  const [artistName, setArtistName] = useState('');
  const [albumArtUrl, setAlbumArtUrl] = useState('');
  const [trackUrl, setTrackUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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

  useEffect(() => {
    // Example: Fetch the most recent track from your utility file or API
    const fetchRecentTrack = async () => {
      try {
        const trackData = await getRecentTrack(); // Assuming getRecentTrack is a utility function
        if (trackData) {
          setTrackName(trackData.name);
          setArtistName(trackData.artist['#text']);
          setAlbumArtUrl(trackData.image[2]['#text']); // Example: Medium-sized album art
          setTrackUrl(trackData.url);
          setError(false);
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

    // Set up the interval to refresh the track info every 60 seconds (adjust as needed)
    const interval = setInterval(fetchRecentTrack, 10000); // 60000 ms = 1 minute

    // Cleanup interval on component unmount
    return () => clearInterval(interval)
  }, []);


  if (error) {
    return null;
  }

  return (
    <a href={trackUrl} target="_blank" rel="noopener noreferrer" className={`${styles.nowPlayingWrapper} ${!initialAnimationDone ? styles.initialAnimation : ''}`}>
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

