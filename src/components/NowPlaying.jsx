import { useEffect, useState, useRef } from 'react';

const NowPlaying = ({ isCollapsed }) => {
  const [song, setSong] = useState(null);
  const intervalRef = useRef();

  const fetchNowPlaying = () => {
    fetch('/api/now-playing')
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => {
        console.log('Fetched song data:', data);
        setSong(data);
      })
      .catch(() => setSong(null));
  };

  useEffect(() => {
    fetchNowPlaying();

    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        fetchNowPlaying();
        intervalRef.current = setInterval(fetchNowPlaying, 30000);
      } else {
        clearInterval(intervalRef.current);
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    handleVisibility();

    return () => {
      clearInterval(intervalRef.current);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  const formatTimeAgo = (timestamp) => {
    if (!timestamp) return '';
    const diff = Math.floor((Date.now() - new Date(timestamp).getTime()) / 1000);
    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
  };

  if (!song) {
    return (
      <div className="mb-4 flex justify-center">
        <div className="w-10 h-10 rounded-md bg-zinc-700 animate-pulse" />
      </div>
    );
  }

  const albumArt = song.albumImageUrl || '/fallback-art.png';
  const lastSeen = song.lastPlayedAt ? `Last online ${formatTimeAgo(song.lastPlayedAt)}` : 'Not listening';

  return (
    <div className="mb-4 mx-2 flex items-center justify-center bg-[#2a2a2a] rounded-md p-2">
      <img
        src={albumArt}
        alt="Album"
        className={` ${isCollapsed ? 'w-12 h-12' : 'w-10 h-10'} rounded-md`}
        title={song.title || 'Not listening'}
      />
      {!isCollapsed && (
        <div className="flex-1 max-w-48 p-2">
          <p className="text-[10px] text-zinc-400">
            {song.isPlaying ? 'Now Playing' : lastSeen}
          </p>
          <p className="text-[13px] truncate text-white">{song.title || 'None'}</p>
          <p className="text-[11px] truncate text-zinc-400">{song.artist || ''}</p>
          {song.songUrl && (
            <a
              href={song.songUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-[10px]"
            >
              Open on Spotify
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default NowPlaying;
