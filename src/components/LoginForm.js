import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      setErrorMessage("Both username and password are required.");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && (
        <div
          id="errorMessage"
          style={{ color: "red" }}
        >
          {errorMessage}
        </div>
      )}

      <input
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
