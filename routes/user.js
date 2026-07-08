var express = require("express");
var spotifyAuth = require("../api/global");
const { sessionChecker } = require("../utils");

var router = express.Router();
const spotify = spotifyAuth.spotifyApi;


router.use(sessionChecker, (req, res, next) => {
  if (!req.session?.token) {
    return res.status(401).json({ error: "Unauthorized. No session token found." });
  }
  // Inject the user's secure session token directly into the Spotify API client
  spotify.setAccessToken(req.session.token);
  next();
});

// GET /user/me
router.get("/me", async (req, res) => {
  try {
    const data = await spotify.getMe();
    res.json(data.body);
  } catch (ex) {
    console.error("Error fetching user profile:", ex);
    res.status(ex.statusCode || 500).json({ error: ex.message });
  }
});

// GET /user/top-artists
router.get("/top-artists", async (req, res) => {
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
  try {
    const data = await spotify.getMySavedAlbums();
    res.json(data.body);
  } catch (ex) {
    console.error("Error fetching saved albums:", ex);
    res.status(ex.statusCode || 500).json({ error: ex.message });
  }
});

module.exports = router;
