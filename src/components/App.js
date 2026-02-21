import React, { useState } from "react";

const userData = [
  {
    id: 1,
    name: "ABC",
    email: "abc@gmail.com",
    password: "12",
  },
  {
    id: 2,
    name: "DEF",
    email: "def@gmail.com",
    password: "1234",
  },
  {
    id: 3,
    name: "GHI",
    email: "ghi@gmail.com",
    password: "123456",
  },
];

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Reset errors
    setUserError("");
    setPasswordError("");
    setLoading(true);

    setTimeout(() => {
      const foundUser = userData.find((user) => user.email === email);

      if (!foundUser) {
        console.log("User not found");
        setUserError("User not found");
        setLoading(false);
        return;
      }

      if (foundUser.password !== password) {
        console.log("Password Incorrect");
        setPasswordError("Password Incorrect");
        setLoading(false);
        return;
      }

      console.log(foundUser);
      setLoading(false);
    }, 3000);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
      <form onSubmit={handleLogin}>
        <div>
          <input
            id="input-email"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p id="user-error" style={{ color: "red" }}>
            {userError}
          </p>
        </div>

        <div>
          <input
            id="input-password"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p id="password-error" style={{ color: "red" }}>
            {passwordError}
          </p>
        </div>

        <button id="submit-form-btn" type="submit">
          {loading ? "Checking..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;