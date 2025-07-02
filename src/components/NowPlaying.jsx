import { useEffect, useState } from 'react';

const NowPlaying = () => {
  const [song, setSong] = useState(null);

  useEffect(() => {
    fetch('/api/now-playing')
      .then((res) => res.json())
      .then((data) => setSong(data));
  }, []);

  if (!song) return <p>Loading...</p>;

  if (!song.isPlaying) {
    return <p>Not listening to anything right now.</p>;
  }

  return (
    <div className="now-playing flex items-center gap-4">
      <img
        src={song.albumImageUrl}
        alt="Album Cover"
        className="w-16 h-16 rounded-md"
      />
      <div>
        <p className="text-sm text-gray-500">Now Playing</p>
        <p className="font-semibold">{song.title}</p>
        <p className="text-gray-400">{song.artist}</p>
        <a
          href={song.songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline text-sm"
        >
          Open on Spotify
        </a>
      </div>
    </div>
  );
};

export default NowPlaying;
