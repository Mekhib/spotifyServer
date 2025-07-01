var spotifyAuth = require("../api/global");
var express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");
const { sessionChecker } = require("../utils");
const {topArtist, topTracks, userPlaylist, userRecentTracks, userTracks } = require("../api/user")
const {
  globalPlaylist,
  globalAlbumPlaylist,
  globalNewReleases,
} = require("../api/global");
var router = express.Router();
const spotify = spotifyAuth.spotifyApi;


router.post("/artists", sessionChecker, async (req, res) => {
  const token = req.session?.token;
  try {
    const artists = await topArtist(token);
    res.json({ artists });
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
});

router.post("/tracks", sessionChecker, async (req, res) => {
  const token = req.session?.token;
  try {
    const tracks = await topTracks(token);
    res.json({ tracks });
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
});

router.post("/playlist", sessionChecker, async (req, res) => {
  const token = req.session?.token;
  try {
    const playlist = await userPlaylist(token);
    res.json({ playlist });
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
});

router.post("/top-songs", sessionChecker, async (req, res) => {
  const token = req.session?.token;
  try {
    const topSongs = await globalPlaylist(token);
    res.json({ topSongs });
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
});

router.post("/top-albums", sessionChecker, async (req, res) => {
  const token = req.session?.token;
  try {
    const topAlbums = await globalAlbumPlaylist(token);
    console.log("TOP ALBUMS", topAlbums)
    res.json({ topAlbums });
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
});

router.post("/new-releases", sessionChecker, async (req, res) => {
  const token = req.session?.token;
  try {
    const newReleases = await globalNewReleases(token);
    res.json({ newReleases });
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
});

router.post("/getTracks", sessionChecker, async function (req, res, next) {
  const { offset = 0, limit = 50 } = req.body;
  try {
    // Pass offset and limit to userTracks
    const tracksData = await userTracks(req.session.token, offset, limit);
    const recentTracks = await userRecentTracks(req.session.token);

    res.json({
      tracks: tracksData.items,
      recentTracks: recentTracks.body.items,
      total: tracksData.total,
    });
  } catch (ex) {
    res.status(500).json({ error: ex.message });
  }
});

router.post("/saved-albums", sessionChecker, async (req, res) => {
  try {
    const data = await spotify.getMySavedAlbums();
    res.json({ items: data.body.items });
  } catch (err) {
    console.log("Something went wrong!", err);
    res.status(500).json({ error: "Something went wrong!" });
  }
});

module.exports = router
