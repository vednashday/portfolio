import React from 'react';

const formatTimeAgo = (timestamp) => {
  if (!timestamp) return '';
  const diff = Math.floor((Date.now() - new Date(timestamp).getTime()) / 1000);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
};

const NowPlaying = ({ song, lastSeenAt, isCollapsed }) => {
  if (!song) return null; // Parent handles loading

  const albumArt = song.albumImageUrl || '/fallback-art.png';

  return (
    <div className="flex items-center justify-center bg-[#2a2a2a] rounded-md p-2 mt-2">
      <img
        src={albumArt}
        alt="Album"
        className={`${isCollapsed ? 'w-12 h-12' : 'w-10 h-10'} rounded-md`}
        title={song.title || 'Not listening'}
      />
      {!isCollapsed && (
        <div className="flex-1 max-w-48 p-2">
          <p className="text-[10px] text-zinc-400">
            {song.isPlaying
              ? 'Now Playing'
              : lastSeenAt
              ? `Last online ${formatTimeAgo(lastSeenAt)}`
              : 'Not listening'}
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