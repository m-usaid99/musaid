import React, { useEffect, useState } from 'react';
import { getRecentTrack } from '../../utils/lastfmApi';
import styles from '../../styles/NowPlayingMobile.module.css';

const NowPlayingMobile = () => {
  const [trackName, setTrackName] = useState('');
  const [artistName, setArtistName] = useState('');
  const [albumArtUrl, setAlbumArtUrl] = useState('');
  const [trackUrl, setTrackUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [expanded, setExpanded] = useState(false);


  useEffect(() => {
    const fetchRecentTrack = async () => {
      try {
        const trackData = await getRecentTrack();
        if (trackData) {
          setTrackName(trackData.name);
          setArtistName(trackData.artist['#text']);
          setAlbumArtUrl(trackData.image[2]['#text']);
          setTrackUrl(trackData.url);
        }
      } catch (error) {
        // handle error
      } finally {
        setLoading(false);
      }
    };

    fetchRecentTrack();
    const interval = setInterval(fetchRecentTrack, 10000);

    return () => clearInterval(interval);
  }, [trackName]);

  useEffect(() => {
    const str = " . listening now . ";
    const text = document.getElementById('text');
    text.innerHTML = '';
    if (text) {
      for (let i = 0; i < str.length; i++) {
        let span = document.createElement('span');
        span.innerHTML = str[i];
        text.appendChild(span);
        span.style.transform = `rotate(${10 * i}deg)`;
      }
    }
  }, []);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`${styles.nowPlayingMobileContainer} ${expanded ? styles.expanded : ''}`}
    >
      <div
        className={`${styles.listeningNowWrapper} ${expanded ? styles.expanded : ''}`}
        onClick={handleToggleExpand}
      >
        {loading ? (
          <div className={styles.loadingSpinner}></div>
        ) : (
          <img
            src={albumArtUrl}
            alt={`${trackName} album art`}
            className={expanded ? styles.expanded : styles.collapsed}
          />
        )}
        <p id='text'></p>
      </div>
      <a href={trackUrl} target='_blank' className={styles.trackInfo}>
        <span className={styles.trackName}>{trackName}</span>
        <span className={styles.artistName}>{artistName}</span>
      </a>
    </div>
  );
};

export default NowPlayingMobile;

