import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Avatar from "@mui/material/Avatar";
import "./profile.scss";

function Profile() {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="profile__info">
        <Avatar
          sx={{ width: 56, height: 56 }}
          src={user.picture}
          alt={user.name}
        ></Avatar>
        <p>{user.name}</p>
      </div>
    )
  );
}

export default Profile;
