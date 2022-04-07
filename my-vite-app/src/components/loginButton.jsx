import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect()}
    >
      <LoginIcon />
      Log In
    </Button>
  );
};

export default LoginButton;
