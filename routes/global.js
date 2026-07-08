var express = require("express");
var spotifyAuth = require("../api/global");
const { sessionChecker } = require("../utils");
const { getTracks, getArtistResults, searchAlbums } = require("../api/search");

var router = express.Router();
const spotify = spotifyAuth.spotifyApi;

// ROUTER-LEVEL MIDDLEWARE: Validates session and pre-sets token for Spotify SDK
router.use(sessionChecker, (req, res, next) => {
  if (!req.session?.token) {
    return res.status(401).json({ error: "Unauthorized. No session token found." });
  }
  spotify.setAccessToken(req.session.token);
  next();
});

// GET /global/new-releases
router.get("/new-releases", async (req, res) => {
  try {
    const data = await spotify.getNewReleases();
    res.json(data.body);
  } catch (ex) {
    console.error("Error fetching new releases:", ex);
    res.status(ex.statusCode || 500).json({ error: ex.message });
  }
});

// GET /global/playlist/:id 
router.get("/playlist/:id", async (req, res) => {
  const playlistID = req.params.id;
  const limit = parseInt(req.query.limit) || undefined;
  const offset = parseInt(req.query.offset) || undefined;

  try {
  
    const options = {};
    if (limit !== undefined) options.limit = limit;
    if (offset !== undefined) options.offset = offset;

    const data = await spotify.getPlaylist(playlistID, options);
    res.json(data.body);
  } catch (ex) {
    console.error(`Error retrieving playlist ${playlistID}:`, ex);
    res.status(ex.statusCode || 500).json({ error: ex.message });
  }
});

// GET /global/album/:id
router.get("/album/:id", async (req, res) => {
  const albumID = req.params.id;
  try {
    const data = await spotify.getAlbum(albumID);
    res.json(data.body);
  } catch (ex) {
    console.error(`Error retrieving album ${albumID}:`, ex);
    res.status(ex.statusCode || 500).json({ error: ex.message });
  }
});


router.get("/search", async (req, res) => {
  const { keyword } = req.query;
  if (!keyword) {
    return res.status(400).json({ error: "Search keyword parameter required" });
  }

  try {
    const [trackResults, artistResults, albumResults] = await Promise.all([
      spotify.searchTracks(keyword),
      spotify.searchArtists(keyword),
      spotify.searchAlbums(keyword)
    ]);

    res.json({
      trackResults: trackResults.body,
      artistResults: artistResults.body,
      albumResults: albumResults.body,
    });
  } catch (ex) {
    console.error("Global search error:", ex);
    res.status(ex.statusCode || 500).json({ error: ex.message });
  }
});

router.get("/artist/:id", async (req, res) => {
  const artistID = req.params.id;

  let artist = null;
  let artistSongs = null;
  let artistAlbums = null;
  let artistArtist = null;

  try {
    const data = await spotify.getArtist(artistID);
    artist = data.body;
  } catch (ex) {
    console.error("Error retrieving artist details:", ex.message);
  }

  try {
    const data = await spotify.getArtistTopTracks(artistID, "US");
    artistSongs = data.body;
  } catch (ex) {
    console.error("Error retrieving artist top tracks:", ex.message);
  }

  try {
    const data = await spotify.getArtistAlbums(artistID, { album_type: "album", country: "US" });
    artistAlbums = data.body;
  } catch (ex) {
    console.error("Error retrieving artist albums:", ex.message);
  }

  try {
    const data = await spotify.getArtistRelatedArtists(artistID);
    artistArtist = data.body;
  } catch (ex) {
    console.error("Error retrieving related artists:", ex.message);
  }

  res.json({
    artist,
    artistSongs,
    artistAlbums,
    artistArtist,
  });
});

module.exports = router;
