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
  const [expanded, setExpanded] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });


  useEffect(() => {
    if (!isMobile) { // Only run this effect if not on mobile
      const str = "listening now .  listening now  .  ";

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
    }
  }, [isMobile]);

  useEffect(() => {
    const fetchRecentTrack = async () => {
      try {
        const trackData = await getRecentTrack(); // Assuming getRecentTrack is a utility function
        if (trackData) {
          const newTrackName = trackData.name;
          if (newTrackName !== trackName) {
            setTrackName(newTrackName);
            setArtistName(trackData.artist['#text']);
            setAlbumArtUrl(trackData.image[2]['#text']); // Example: Medium-sized album art
            setTrackUrl(trackData.url);
            setError(false);

            // Trigger the track update animation
            setTrackUpdated(true);
            setTimeout(() => setTrackUpdated(false), 3000); // Adjust duration as needed
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

    // Set up the interval to refresh the track info every 60 seconds (adjust as needed)
    const interval = setInterval(fetchRecentTrack, 10000); // 60000 ms = 1 minute

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [trackName]);


  if (error) {
    return null;
  }

  if (isMobile) {
    return (
      <div
        className={`${styles.nowPlayingMobile} ${expanded ? styles.expanded : styles.collapsed}`}
        onClick={() => setExpanded(!expanded)} // Toggle expansion on click
      >
        <div className={styles.albumArtMobile}>
          <img src={albumArtUrl} alt="Album Art" className={styles.halfCircle} />
        </div>
        <div className={`${styles.trackInfoMobile} ${expanded ? styles.show : styles.hide}`}>
          <span className={styles.trackNameMobile}>{trackName}</span>
          <span className={styles.artistNameMobile}>{artistName}</span>
        </div>
      </div>
    );
  }


  else {
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
  }
};

export default NowPlaying;

