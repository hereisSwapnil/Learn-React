import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

export const Profile = () => {
  const { user } = useContext(UserContext);
  return <>{user && <h1>User {user.username} has logged in.</h1>}</>;
};
