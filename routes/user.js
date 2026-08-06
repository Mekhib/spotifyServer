var express = require("express");
var spotifyAuth = require("../api/global");
const { sessionChecker } = require("../utils");
const { mockUserData } = require("../api/mockData");

var router = express.Router();
const spotify = spotifyAuth.spotifyApi;

// Middleware updated to permit demo sessions
router.use(sessionChecker, (req, res, next) => {
  if (!req.session?.token && !req.session?.isDemo) {
    return res.status(401).json({ error: "Unauthorized. No session token found." });
  }

  // Only inject access token into Spotify client if NOT in demo mode
  if (!req.session?.isDemo) {
    spotify.setAccessToken(req.session.token);
  }
  next();
});

// GET /user/me
router.get('/me', async function(req, res, next) {
  if (req.session?.isDemo) {
    return res.json(mockUserData.me);
  }

  try {
    console.log("\n--- SPOTIFY API DEBUG ---");
    console.log("1. Token from Session:", req.session.token ? "PRESENT" : "MISSING");
    
    spotify.setAccessToken(req.session.token);
    
    console.log("2. Token in Wrapper:", spotify.getAccessToken() ? "PRESENT" : "MISSING");
    console.log("-------------------------\n");

    const response = await spotify.getMe();
    return res.json(response.body);

  } catch (error) {
    console.error("Spotify API Error Details:");
    console.error("Status:", error.statusCode);
    console.error("Message:", error.body?.error?.message || error.message);
    console.log(JSON.stringify(error));
    return res.status(error.statusCode || 500).json({ error: "Failed to fetch profile" });
  }
});

// GET /user/top-artists
router.get("/top-artists", async (req, res) => {
  if (req.session?.isDemo) {
    return res.json(mockUserData.topArtists);
  }

  try {
    const data = await spotify.getMyTopArtists();
    res.json(data.body);
  } catch (ex) {
    console.error("Error fetching top artists:", ex);
    res.status(ex.statusCode || 500).json({ error: ex.message });
  }
});

// GET /user/top-tracks
router.get("/top-tracks", async (req, res) => {
  if (req.session?.isDemo) {
    return res.json(mockUserData.topTracks);
  }

  try {
    const data = await spotify.getMyTopTracks();
    res.json(data.body);
  } catch (ex) {
    console.error("Error fetching top tracks:", ex);
    res.status(ex.statusCode || 500).json({ error: ex.message });
  }
});

// GET /user/playlists
router.get("/playlists", async (req, res) => {
  if (req.session?.isDemo) {
    return res.json(mockUserData.playlists);
  }

  try {
    const data = await spotify.getUserPlaylists();
    res.json(data.body);
  } catch (ex) {
    console.error("Error fetching user playlists:", ex);
    res.status(ex.statusCode || 500).json({ error: ex.message });
  }
});

// GET /user/recent-tracks
router.get("/recent-tracks", async (req, res) => {
  if (req.session?.isDemo) {
    return res.json(mockUserData.recentTracks);
  }

  const limit = parseInt(req.query.limit) || 10;
  try {
    const data = await spotify.getMyRecentlyPlayedTracks({ limit });
    res.json(data.body);
  } catch (ex) {
    console.error("Error fetching recent tracks:", ex);
    res.status(ex.statusCode || 500).json({ error: ex.message });
  }
});

// GET /user/saved-tracks
router.get("/saved-tracks", async (req, res) => {
  if (req.session?.isDemo) {
    return res.json(mockUserData.savedTracks);
  }

  const limit = parseInt(req.query.limit) || 50;
  const offset = parseInt(req.query.offset) || 0;
  try {
    const data = await spotify.getMySavedTracks({ limit, offset });
    res.json(data.body);
  } catch (ex) {
    console.error("Error fetching saved tracks:", ex);
    res.status(ex.statusCode || 500).json({ error: ex.message });
  }
});

// GET /user/saved-albums
router.get("/saved-albums", async (req, res) => {
  if (req.session?.isDemo) {
    return res.json(mockUserData.savedAlbums);
  }

  try {
    const data = await spotify.getMySavedAlbums();
    res.json(data.body);
  } catch (ex) {
    console.error("Error fetching saved albums:", ex);
    res.status(ex.statusCode || 500).json({ error: ex.message });
  }
});

module.exports = router;