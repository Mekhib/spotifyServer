
const SpotifyWebApi = require("spotify-web-api-node");
const CLIENT_ID = "e4fe20831fd44f7f9dca5cd597f58779";
const REDIRECT_URI = "http://localhost:3000/auth";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";
const SCOPE =
  ["user-top-read user-read-private user-read-playback-state user-modify-playback-state user-read-recently-played user-library-read user-read-email"];

  const spotifyApi = new SpotifyWebApi({
    clientId: "e4fe20831fd44f7f9dca5cd597f58779",
    clientSecret: "60cf28fc74a44dbba8b6d91a69e4701f",
    redirectUri: "https://super-spotify-backend.onrender.com/auth/authorize",
  });

     const createAuthURL = (scopes = SCOPE_LIST, state = "spotify-auth") => {
       const authUrl = spotifyApi.createAuthorizeURL(scopes, state);
       return {
         authUrl,
       };
     };


 const globalPlaylist = async() => {
  try {
    return await spotifyApi.getPlaylist("6UeSakyzhiEt4NB3UAd6NQ", {
      offset: 5,
      limit: 5,
    });
  }
  catch(error) {
    return error
  }
  };

   const loggedIn = async() => {
      try {
         await spotifyApi.getMe();
          return true;
      } catch (error) {
        return error;
      }
   };

const globalAlbumPlaylist = async() => {
   try {
     return await spotifyApi.getPlaylist("37i9dQZF1DX4JAvHpjipBk", {
       limit: 5,
     });
   } catch (error) {
     return error;
   }
};

 const globalNewReleases = async () => {

     try {
       return await spotifyApi.getPlaylist("3dEjWfgB5jC6zn6tLoy9yy", {
         limit: 5,
       });
     } catch (error) {
       return error;
     }

 };

const getPlaylist = async (id) => {
     try {
       return await spotifyApi.getPlaylist(id);
     } catch (error) {
       return error;
     }
}

 const getArtist = async (id) =>{
  try {
       return await spotifyApi.getArtist(id);
     } catch (error) {
      console.log("error in getArtistFunc", error )
       return error;
     }
 }
  

 const getArtistSongs = async (id) =>
   new Promise((resolve, err) => {
     spotifyApi.getArtistTopTracks(id, "US").then(
       function (data) {
         resolve(data);
       },
       function (err) {
         console.log("Something went wrong!", err);
       }
     );
   });

 const getArtistAlbums = async (id) =>
   new Promise((resolve, err) => {
     spotifyApi
       .getArtistAlbums(id, {
         album_type: "album",
         country: "US",
       })
       .then(
         function (data) {
           resolve(data);
         },
         function (err) {
           console.log("Something went wrong!", err);
         }
       );
   });

  const getArtistArtist = async (id) =>
    new Promise((resolve, error) => {
      console.log("getArtistArtist called with id:", id);
      if (!id) {
        console.error("No artist ID provided");
        error(new Error("No artist ID provided"));
        return;
      }
      spotifyApi.getMyTopArtists().then(
        function (data) {
          let topArtists = data.body.items;
          resolve(topArtists);
     
        },
        function (err) {
          console.log("Something went wrong!", err);
        }
      );
    });

 const getAlbums = async (id) =>
   new Promise((resolve, error) => {
     spotifyApi.getAlbum(id).then(
       function (data) {
         resolve(data);
       },
       function (err) {
         error(err);
       }
     );
   });

 const getSavedTracks = () =>
   spotifyApi
     .getMySavedTracks({
       limit: 2,
       offset: 1,
     })
     .then(
       function (data) {
         console.log("Done!");
       },
       function (err) {
         console.log("Something went wrong!", err);
       }
     );



module.exports = {
  globalPlaylist,
  globalAlbumPlaylist,
  getPlaylist,
  createAuthURL,
  getArtist,
  getArtistSongs,
  globalNewReleases,
  spotifyApi,
  getArtistAlbums,
  getArtistArtist,
  getAlbums,
  loggedIn,
  CLIENT_ID,
  REDIRECT_URI,
  AUTH_ENDPOINT,
  RESPONSE_TYPE,
  SCOPE,
};
