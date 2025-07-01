var express = require("express");
const { sessionChecker } = require("../utils");
const {
  getPlaylist,
  getArtist,
  getArtistSongs,
  getArtistAlbums,
  getArtistArtist,
  getAlbums,
  loggedIn
} = require("../api/global");
const { getTracks, getArtistResults, searchAlbums } = require("../api/search");
var router = express.Router();

router.post("/getPlayList", sessionChecker, async function (req, res, next) {
  const playlistID = req.body?.id;
  try {
    const playlist = await getPlaylist(playlistID);
    res.json(playlist);
  } catch (ex) {
    res.json(ex);
  }
});

router.post("/getArtist", sessionChecker, async function (req, res, next) {
  const artistID = req.body?.id;

  let artist = undefined;
  let artistSongs = undefined;
  let artistAlbums = undefined;
  let artistArtist = undefined;

  try {
    artist = await getArtist(artistID);
  } catch (ex) {
    console.log("Error retrieving artist:", ex);
    artist = undefined;
  }

  try {
    artistSongs = await getArtistSongs(artistID);
  } catch (ex) {
    console.log("Error retrieving artist songs:", ex);
    artistSongs = undefined;
  }

  try {
    artistAlbums = await getArtistAlbums(artistID);
  } catch (ex) {
    console.log("Error retrieving artist albums:", ex);
    artistAlbums = undefined;
  }

  try {
    artistArtist = await getArtistArtist(artistID);
  } catch (ex) {
    console.log("Error retrieving related artists:", ex);
    artistArtist = undefined;
  }

  res.json({
    artist: artist,
    artistSongs: artistSongs,
    artistAlbums: artistAlbums,
    artistArtist: artistArtist,
  });
});

router.post("/search", sessionChecker, async function (req, res, next) {
  const keyword = req.body?.keyword;
  try {
    const trackResults = await getTracks(keyword);
    const artistResults = await getArtistResults(keyword);
    const albumResults = await searchAlbums(keyword);
    res.json({
      trackResults: trackResults,
      artistResults: artistResults,
      albumResults: albumResults,
    });
  } catch (ex) {
    res.json(ex);
  }
});

router.post("/isLoggedIn", sessionChecker, async function (req, res, next) {
  try {
    const isLoggedIn = await loggedIn();
    return isLoggedIn;
  } catch (ex) {
    return false;
  }
});

router.post("/getAlbum", sessionChecker, async function (req, res, next) {
  const { album } = req.body
  try {
    const albumResults = await getAlbums(album);
    res.json({
    albumResults: albumResults
    });
  } catch (ex) {
    res.json(ex);
  }
});
module.exports = router;
