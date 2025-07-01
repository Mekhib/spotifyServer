var spotifyAuth = require("../api/global");
const spotifyApi = spotifyAuth.spotifyApi

  const topTracks = (accessToken) =>  new Promise((resolve, err) => {
   spotifyApi.setAccessToken(accessToken);  
   spotifyApi.getMyRecentlyPlayedTracks().then(
     function (data) {
       console.log("TOP_TRACKS", data);
       resolve(data);
     },
     function (err) {
       console.log("Something went wrong!", err);
     }
   );
   });

    const topArtist = async (accessToken) => {
    try {  
    spotifyApi.setAccessToken(accessToken); 
     return await spotifyApi.getMyTopArtists();
   } catch (ex)
    {
     console.error(("%o", e.WebapiError));
     return ex;
   }
     };

 const userPlaylist = (accessToken) =>
   new Promise((resolve, err) => {
     spotifyApi.setAccessToken(accessToken);
     spotifyApi.getUserPlaylists().then(
       function (data) {
       
         resolve(data);
       },
       function (err) {
         console.log(
           "Something went wrong with playlists!",
           JSON.stringify(err)
         );
       }
     );
   });

   const userRecentTracks = (accessToken) =>
     new Promise((resolve, err) => {
       spotifyApi.setAccessToken(accessToken);
       spotifyApi
         .getMyRecentlyPlayedTracks({
           limit: 10,
         })
         .then(
           function (data) {

             resolve(data);
           },
           function (error) {
             err(error);
             console.log(
               "Something went wrong with recent tracks!",
               JSON.stringify(error)
             );
           }
         );
     });

  const userTracks = (accessToken, offset = 0, limit = 50) =>
  new Promise((resolve, err) => {
    spotifyApi.setAccessToken(accessToken);
    spotifyApi.getMySavedTracks({ limit, offset }).then(
      function (data) {
        // Return only the relevant data for pagination
        resolve({
          items: data.body.items,
          total: data.body.total,
        });
      },
      function (error) {
        err(error);
        console.log("Something went wrong!", JSON.stringify(error));
      }
    );
  });



module.exports = {
  userTracks,
  userRecentTracks,
  userPlaylist,
  topArtist,
  topTracks,

};