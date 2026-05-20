import React {useState,useEffect} from "react";
function LoginForm(){
const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
 const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      setErrorMessage("Username and Password are required");
    } else {
      setErrorMessage("");
      console.log("Login Success");
    }
  };
return (
    <form onSubmit={handleSubmit}>
      <div
        id="errorMessage"
        style={{ color: "red", marginBottom: "10px" }}
      >
        {errorMessage}
      </div>

      <input
        id="username"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br />

      <input
        id="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
