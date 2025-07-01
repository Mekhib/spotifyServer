const { spotifyApi } = require( "./global");

let getTracks = async (track) =>
  new Promise((resolve, err) => {
    spotifyApi.searchTracks(track).then(
      function (data) {
        console.log('Search by "track"', data.body);
        resolve(data.body);
      },
      function (err) {
        console.error(err);
      }
    );
  });

let getArtistResults = async (artist) =>
  new Promise((resolve, err) => {
    spotifyApi.searchArtists(artist).then(
      function (data) {
       
        resolve(data.body);
      },
      function (err) {
        console.error(err);
      }
    );
  });

let searchAlbums = async (albums) =>
  new Promise((resolve, err) => {
    spotifyApi.searchAlbums(albums).then(
      function (data) {
        console.log('Search by "album"', data.body);
        resolve(data.body);
      },
      function (err) {
        console.error(err);
      }
    );
  });

module.exports = { getTracks, getArtistResults, searchAlbums };
