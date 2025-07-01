var spotifyAuth = require("../api/global");
var express = require('express');
const SpotifyWebApi = require("spotify-web-api-node");
var router = express.Router();
const spotify = spotifyAuth.spotifyApi

router.get('/signin', function(req, res, next) {

    const url = spotify.createAuthorizeURL(
      (scopes = spotifyAuth.SCOPE),
      (state = "spotify-auth")
    );
    console.log(url);
    url ? res.json(url) : res.status(500)
  
});

router.get('/authorize', function (req, res, next) {
const {code} = req.query
if(code) {
  try {
  spotify.authorizationCodeGrant(`${code}`).then((response) => {
   const accessToken = response.body.access_token;
   if (accessToken) {
    console.log(accessToken)
     const date = new Date();
     const expirationDate = date.setDate(date.getHours() + 1);
     req.session.token = accessToken;
     req.session.expirationDate = expirationDate;
     req.session.save();
  
     res.redirect(`http://localhost:3000/start`);
   } else {
     res.send("No token Created, Please refresh and sign in again ");
   }
 }); 
  }
catch (ex) {
  console.log("exception when retriving token ", ex)
}
}
else {
  console.log(res.query)
  res.send("no code Provided")
}

});

router.post("/signout", function (req, res, next) {
  console.log("LOGGING OUT")
req.session.destroy((result)=>res.json(result))
});

module.exports = router;
