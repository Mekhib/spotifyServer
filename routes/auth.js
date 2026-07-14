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

router.get('/authorize', async function (req, res, next) {
  const { code } = req.query;

  if (!code) {
    return res.send("No code provided by Spotify.");
  }

  try {

    const response = await spotify.authorizationCodeGrant(code);
    const accessToken = response.body.access_token;

    if (accessToken) {
      console.log("Token successfully retrieved");
      
      const date = new Date();
      const expirationDate = date.setDate(date.getHours() + 1);
      req.session.token = accessToken;
      req.session.expirationDate = expirationDate;
      req.session.save((err) => {
        if (err) console.error("Session save error:", err);
        console.log("Session After Save: ", req.session)
       
        const frontendUrl = process.env.NODE_ENV === 'production' 
          ? 'https://spotify-server-ruby.vercel.app/start' 
          : 'http://localhost:3000/start';

        return res.redirect(frontendUrl);
      });
    } else {
      return res.send("No token created. Please refresh and sign in again.");
    }

  } catch (ex) {
    
    console.error("Spotify Auth Error:", ex.body?.error_description || ex.message);
    
  
    const fallbackUrl = process.env.NODE_ENV === 'production' 
      ? 'https://spotify-server-ruby.vercel.app' 
      : 'http://localhost:3000';
      
    return res.redirect(`${fallbackUrl}?error=auth_failed`);
  }
});

router.post("/signout", function (req, res, next) {
  console.log("LOGGING OUT")
req.session.destroy((result)=>res.json(result))
});

module.exports = router;
