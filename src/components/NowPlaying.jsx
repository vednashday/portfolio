import { useEffect, useState } from 'react';

const NowPlaying = ({ isCollapsed }) => {
  const [song, setSong] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/now-playing')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then((data) => setSong(data))
      .catch(() => setError(true));
  }, []);

  if (error || !song) {
    return (
      <div className="mb-4 flex justify-center">
        <div className="w-10 h-10 rounded-md bg-zinc-700 animate-pulse" />
      </div>
    );
  }

  if (!song.isPlaying) {
    return (
      <div className="mb-4 flex justify-center">
        <img
          src={song.albumImageUrl}
          alt="Album"
          className="w-10 h-10 rounded-md"
          title="Not listening to anything"
        />
      </div>
    );
  }

  return (
    <div
      className={`mb-4 mx-2 flex items-center justify-center bg-[#2a2a2a] rounded-md p-2`}
    >
      <img
        src={song.albumImageUrl}
        alt="Album Cover"
        className="w-10 h-10 rounded-md"
        title={isCollapsed ? song.title : ''}
      />
      {!isCollapsed && (
        <div className="flex-1 max-w-48 p-2">
          <p className="text-[10px] text-zinc-400">Now Playing</p>
          <p className="text-[13px] truncate text-white">{song.title}</p>
          <p className="text-[11px] truncate text-zinc-400">{song.artist}</p>
          <a
            href={song.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline text-[10px]"
          >
            Open on Spotify
          </a>
        </div>
      )}
    </div>
  );
};

export default NowPlaying;
