import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/auth/login", {
      email,
      password,
    });
    setEmail("");
    setPassword("");
  };
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label htmlFor="email">
        E-mail <input id="email" type="email" placeholder="email" />
      </label>

      <label htmlFor="password">
        Password <input id="password" type="password" placeholder="password" />
      </label>

      <button type="submit">Log in</button>
    </form>
  );
};

export default Login;
