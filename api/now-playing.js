import dotenv from 'dotenv';
dotenv.config();

export default async function handler(req, res) {
  const {
    SPOTIFY_CLIENT_ID: client_id,
    SPOTIFY_CLIENT_SECRET: client_secret,
    SPOTIFY_REFRESH_TOKEN: refresh_token,
  } = process.env;

  if (!client_id || !client_secret || !refresh_token) {
    return res.status(500).json({ error: 'Missing Spotify ENV variables' });
  }

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

  const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token,
    }),
  });

  const { access_token } = await tokenResponse.json();

  // ✅ Step 1: Try currently playing
  const nowPlayingResponse = await fetch(
    'https://api.spotify.com/v1/me/player/currently-playing',
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  // ✅ Step 2: If nothing is playing, show last played track
  if (nowPlayingResponse.status === 204 || nowPlayingResponse.status > 400) {
    const recentResponse = await fetch(
      'https://api.spotify.com/v1/me/player/recently-played?limit=1',
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    if (recentResponse.ok) {
      const recentData = await recentResponse.json();
      const lastPlayed = recentData.items?.[0];

      if (lastPlayed) {
        const {
          track: { name, artists, album, external_urls },
          played_at,
        } = lastPlayed;

        return res.status(200).json({
          isPlaying: false,
          lastPlayedAt: played_at,
          title: name,
          artist: artists.map((a) => a.name).join(', '),
          album: album.name,
          albumImageUrl: album.images?.[0]?.url,
          songUrl: external_urls.spotify,
        });
      }
    }

    // 👇 If no recent track found
    return res.status(200).json({
      isPlaying: false,
      lastPlayedAt: null,
      title: null,
      artist: null,
      album: null,
      albumImageUrl: null,
      songUrl: null,
    });
  }

  // ✅ Step 3: If something is playing
  const song = await nowPlayingResponse.json();

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((a) => a.name).join(', ');
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  res.status(200).json({
    isPlaying,
    title,
    artist,
    album,
    albumImageUrl,
    songUrl,
  });
}
