import React from "react";
import Button from "react-bootstrap/Button";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=72e72a14a818422ea80251f202add5d9&response_type=code&redirect_uri=http://localhost:3000/callback&scope=user-read-private%20user-read-email&state=34fFs29kd09";

export default function Login() {
  return (
    <Button variant='success' href={AUTH_URL}>
      Login
    </Button>
  );
}
