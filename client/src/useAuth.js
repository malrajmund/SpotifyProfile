import axios from "axios";
import { useState, useEffect } from "react";

export default function useAuth(code) {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expireTime, setExpireTime] = useState();

  useEffect(() => {
    axios
      .post("http://localhost:5000/api/user/login", {
        code,
      })
      .then((res) => {
        setAccessToken(res.data.access_token);
        setRefreshToken(res.data.refresh_token);
        setExpireTime(res.data.expires_in);
      })
      .catch((error) => console.log(error));
  }, [code]);

  return accessToken;
}
