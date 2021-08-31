const express = require("express");
const router = express.Router();
const spotifyWebApi = require("spotify-web-api-node");

const spotifyApi = new spotifyWebApi({
  redirectUri: "http://localhost:3000/callback",
  clientId: "72e72a14a818422ea80251f202add5d9",
  clientSecret: "ee9874a1afe2406ca3fbfe360d2e1cb9",
});

router.post("/login", (req, res) => {
  const code = req.body.code;
  spotifyApi.authorizationCodeGrant(code).then(
    function (data) {
      console.log("The token expires in " + data.body["expires_in"]);
      console.log("The access token is " + data.body["access_token"]);
      console.log("The refresh token is " + data.body["refresh_token"]);

      // Set the access token on the API object to use it in later calls
      spotifyApi.setAccessToken(data.body["access_token"]);
      spotifyApi.setRefreshToken(data.body["refresh_token"]);
      res.json({
        access_token: data.body.access_token,
        refresh_token: data.body.refresh_token,
        expires_in: data.body.expires_in,
      });
    },
    function (err) {
      console.log("Logowanie error!", err);
    }
  );
});

router.get("/userInfo", (req, res) => {
  spotifyApi.getMe().then(
    function (data) {
      res.json(data.body);
    },
    function (err) {
      console.log("Something went wrong!", err);
    }
  );
});

module.exports = router;
