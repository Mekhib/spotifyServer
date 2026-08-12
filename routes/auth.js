var spotifyAuth = require("../api/global");
var express = require('express');
const SpotifyWebApi = require("spotify-web-api-node");
var router = express.Router();
const spotify = spotifyAuth.spotifyApi
const frontendUrl = process.env.NODE_ENV === 'production' 
  ? 'https://super-spotify-beta.vercel.app/start' 
  : 'http://127.0.0.1:3000/start';

router.get('/demo', function(req, res) {
  req.session.token = "demo_access_token";
  req.session.isDemo = true;
  req.session.expirationDate = Date.now() + 3600000;

  req.session.save((err) => {
    if (err) {
      console.error("Demo session save error:", err);
      return res.status(500).json({ error: "Failed to initialize demo session" });
    }
    console.log("Demo Session Created Successfully:", req.sessionID);
    
    if (req.xhr || req.headers.accept?.includes('application/json')) {
      console.log("Demo session created, sending JSON response with redirect URL.");
      return res.status(200).json({ success: true, isDemo: true, redirectUrl: frontendUrl });
    }

    return res.redirect(frontendUrl);
  });
});

router.get('/signin', function(req, res, next) {
  try {
    const url = spotify.createAuthorizeURL(
      spotifyAuth.SCOPE,
      "spotify-auth"
    );
    console.log("Redirecting to Spotify:", url);
   
    return res.redirect(url); 

  } catch (error) {
    console.error("Error generating authorization URL:", error);
    return res.status(500).send("Failed to generate Spotify login URL");
  }
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
      

        return res.redirect(frontendUrl);
      });
    } else {
      return res.send("No token created. Please refresh and sign in again.");
    }

  } catch (ex) {
    
    console.error("Spotify Auth Error:", ex.body?.error_description || ex.message);
    
  
    const fallbackUrl = process.env.NODE_ENV === 'production' 
      ? 'https://super-spotify-beta.vercel.app' 
      : 'http://localhost:3000';
      
    return res.redirect(`${fallbackUrl}?error=auth_failed`);
  }
});

router.post("/signout", function (req, res, next) {
  console.log("LOGGING OUT")
req.session.destroy((result)=>res.json(result))
});

module.exports = router;
