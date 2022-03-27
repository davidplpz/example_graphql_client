import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../users/mutations";

const LoginForm = ({ notifyError, setToken }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [login, result] = useMutation(LOGIN, {
    onError: (error) => notifyError(error.graphQLErrors[0].message),
  });

  useEffect(() => {
    if (result.data) {
      const token = result.data.login.value;
      setToken(token);
      localStorage.setItem("react-app-token", token);
    }
  }, [result.data]);

  const handleSubmit = (event) => {
    event.preventDefault();
    login({ variables: { username, password } });
    setUserName("");
    setPassword("");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
