import React, { useState, useContext } from "react";
import UserContext from "../../context/UserContext";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);
  const handleLogin = () => {
    setUser({
      username: username,
      password: password,
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};
