import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-wc5t9i7f.eu.auth0.com"
    clientId="McRz98HUD59UsMO0xpwPd4ReKOGFpIhE"
    redirectUri={window.location.origin}
    audience="bookworm"
    scope="openid profile email"
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
