const API_KEY = import.meta.env.VITE_LASTFM_API_KEY;
const USERNAME = import.meta.env.VITE_LASTFM_USERNAME;

export const getRecentTrack = async () => {
  const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json&limit=1`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch recent track');
    }
    const data = await response.json();
    return data.recenttracks.track[0]; // Assuming you want the most recent track
  } catch (error) {
    console.error('Error fetching recent track:', error);
    return null;
  }
};

