import React from "react";
import useAuth from "./useAuth";
import { useState, useEffect } from "react";
const spotifyWebApi = require("spotify-web-api-node");

const spotifyApi = new spotifyWebApi({
  redirectUri: "http://localhost:3000/callback",
  clientId: "72e72a14a818422ea80251f202add5d9",
  clientSecret: "ee9874a1afe2406ca3fbfe360d2e1cb9",
});

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code);
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.getMe().then((res) => {
      setUser({
        name: res.body.display_name,
        email: res.body.email,
      });
    });
  }, [accessToken]);
  return (
    <div>
      <p>{user.name}</p>
      {user.email}
      <p></p>
    </div>
  );
};

export default Dashboard;
