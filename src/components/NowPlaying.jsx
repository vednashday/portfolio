import { useEffect, useState, useRef } from 'react';

const NowPlaying = ({ isCollapsed }) => {
  const [song, setSong] = useState(null);
  const [lastOnline, setLastOnline] = useState(null);
  const intervalRef = useRef();

  // 🧠 Fetch now playing
  const fetchNowPlaying = () => {
    fetch('/api/now-playing')
      .then((res) => res.ok ? res.json() : Promise.reject())
      .then((data) => {
        setSong(data);
        if (!data.isPlaying) setLastOnline(new Date()); // Save timestamp
      })
      .catch(() => setSong(null));
  };

  useEffect(() => {
    fetchNowPlaying(); // Initial fetch

    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        fetchNowPlaying();
        intervalRef.current = setInterval(fetchNowPlaying, 30000);
      } else {
        clearInterval(intervalRef.current);
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    handleVisibility(); // Initial check

    return () => {
      clearInterval(intervalRef.current);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  // 🕒 Format time difference
  const formatTimeAgo = (date) => {
    if (!date) return '';
    const diff = Math.floor((Date.now() - date.getTime()) / 1000);
    if (diff < 60) return `${diff} sec ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
    return `${Math.floor(diff / 3600)} hr ago`;
  };

  if (!song) {
    return (
      <div className="mb-4 flex justify-center">
        <div className="w-10 h-10 rounded-md bg-zinc-700 animate-pulse" />
      </div>
    );
  }

  const albumArt = song.albumImageUrl || "/fallback-art.png"; // Optional fallback art

  return (
    <div className="mb-4 mx-2 flex items-center justify-center bg-[#2a2a2a] rounded-md p-2">
      <img
        src={albumArt}
        alt="Album"
        className={` ${isCollapsed ? `w-12 h-10` : `w-10 h-10` } rounded-md`}
        title={song.title || "Not listening"}
      />
      {!isCollapsed && (
        <div className="flex-1 max-w-48 p-2">
          <p className="text-[10px] text-zinc-400">
            {song.isPlaying ? 'Now Playing' : 'Last online'}
          </p>
          <p className="text-[13px] truncate text-white">
            {song.title || 'None'}
          </p>
          <p className="text-[11px] truncate text-zinc-400">
            {song.artist || formatTimeAgo(lastOnline)}
          </p>
          {song.songUrl && song.isPlaying && (
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
