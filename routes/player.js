var express = require('express');
var router = express.Router();

const SPOTIFY_PLAYER_URL = "https://api.spotify.com/v1/me/player";

// --- DEMO MOCK DATA ---
const MOCK_TRACK_CURRENT = {
  id: "demo-track-mj",
  name: "Human Nature",
  uri: "spotify:track:mj1",
  duration_ms: 246000,
  artists: [{ id: "artist-mj", name: "Michael Jackson" }],
  album: {
    id: "album-thriller",
    name: "Thriller",
    images: [{ url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop" }]
  }
};

const MOCK_QUEUE = [
  {
    id: "demo-track-kygo",
    name: "Save My Love",
    uri: "spotify:track:kygo1",
    duration_ms: 202000,
    artists: [{ id: "artist-kygo", name: "Kygo" }],
    album: {
      name: "Golden Hour",
      images: [{ url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop" }]
    }
  },
  {
    id: "demo-track-genesis",
    name: "That's All",
    uri: "spotify:track:genesis1",
    duration_ms: 265000,
    artists: [{ id: "artist-genesis", name: "Genesis" }],
    album: {
      name: "Genesis",
      images: [{ url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop" }]
    }
  }
];

const MOCK_PLAYER_STATE = {
  is_playing: true,
  progress_ms: 65000,
  item: MOCK_TRACK_CURRENT,
  device: { id: "demo_device", name: "Demo Web Player", is_active: true, volume_percent: 80 }
};

const MOCK_LYRICS = {
  lyrics: "Looking out\nAcross the night-time\nThe city winks a sleepless eye\nHear her voice\nShake my window\nSweet seducing sighs"
};

// Middleware updated to permit demo sessions
router.use((req, res, next) => {
  if (!req.session?.token && !req.session?.isDemo) {
    return res.status(401).json({ error: "Unauthorized: No active session token" });
  }
  next();
});

// Helper function for Spotify API calls
const fetchSpotifyPlayer = async (endpoint, method, token, body = null) => {
  const options = {
    method: method,
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  };
  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${SPOTIFY_PLAYER_URL}${endpoint}`, options);
  
  if (response.status === 204) return { success: true };
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error?.message || "Spotify API Error");
  }
  
  return response.json();
};

// GET /player/state
router.get('/state', async (req, res) => {
  if (req.session?.isDemo) {
    return res.status(200).json(MOCK_PLAYER_STATE);
  }

  try {
    const response = await fetch("https://api.spotify.com/v1/me/player", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${req.session.token}`,
        "Content-Type": "application/json"
      }
    });

    if (response.status === 204) {
      return res.status(200).json({ 
        is_playing: false, 
        message: "No active playback session found." 
      });
    }

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "Failed to fetch player state");
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Player state error:", error);
    res.status(500).json({ error: error.message });
  }
});

// GET /player/queue (New endpoint for the queue)
router.get('/queue', async (req, res) => {
  if (req.session?.isDemo) {
    return res.status(200).json({ currently_playing: MOCK_TRACK_CURRENT, queue: MOCK_QUEUE });
  }

  try {
    const data = await fetchSpotifyPlayer('/queue', 'GET', req.session.token);
    res.status(200).json(data);
  } catch (error) {
    console.error("Queue fetch error:", error);
    res.status(500).json({ error: error.message });
  }
});

// GET /player/lyrics
router.get('/lyrics', async (req, res) => {
  if (req.session?.isDemo) {
    return res.status(200).json(MOCK_LYRICS);
  }

  try {
    const { artist, track } = req.query;
    if (!artist || !track) {
      return res.status(400).json({ error: "Missing artist or track parameter" });
    }

    const apiUrl = `https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(track)}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      if (response.status === 404) {
        return res.status(404).json({ error: "Lyrics not found for this track" });
      }
      throw new Error(`External API Error: ${response.statusText}`);
    }

    const data = await response.json();
    res.status(200).json({ lyrics: data.lyrics });
  } catch (error) {
    console.error("Lyrics fetch error:", error);
    res.status(500).json({ error: error.message });
  }
});

// GET /player/devices
router.get('/devices', async (req, res) => {
  if (req.session?.isDemo) {
    return res.status(200).json({ devices: [MOCK_PLAYER_STATE.device] });
  }

  try {
    const response = await fetch("https://api.spotify.com/v1/me/player/devices", {
      method: "GET",
      headers: { "Authorization": `Bearer ${req.session.token}` }
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "Failed to fetch devices");
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Device fetch error:", error);
    res.status(500).json({ error: error.message });
  }
});

// PUT /player/play
router.put('/play', async (req, res) => {
  if (req.session?.isDemo) return res.status(204).send();

  try {
    const deviceId = req.query.device_id;
    const endpoint = deviceId ? `/play?device_id=${deviceId}` : '/play';
    await fetchSpotifyPlayer(endpoint, 'PUT', req.session.token, req.body);
    res.status(204).send();
  } catch (error) {
    console.error("Play error:", error);
    res.status(500).json({ error: error.message });
  }
});

// PUT /player/pause
router.put('/pause', async (req, res) => {
  if (req.session?.isDemo) return res.status(204).send();

  try {
    await fetchSpotifyPlayer('/pause', 'PUT', req.session.token);
    res.status(204).send();
  } catch (error) {
    console.error("Pause error:", error);
    res.status(500).json({ error: error.message });
  }
});

// POST /player/next
router.post('/next', async (req, res) => {
  if (req.session?.isDemo) return res.status(204).send();

  try {
    await fetchSpotifyPlayer('/next', 'POST', req.session.token);
    res.status(204).send();
  } catch (error) {
    console.error("Next error:", error);
    res.status(500).json({ error: error.message });
  }
});

// POST /player/previous
router.post('/previous', async (req, res) => {
  if (req.session?.isDemo) return res.status(204).send();

  try {
    await fetchSpotifyPlayer('/previous', 'POST', req.session.token);
    res.status(204).send();
  } catch (error) {
    console.error("Previous error:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;