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
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="email" />
      <input type="password" placeholder="password" />
      <button type="submit">Log in</button>
    </form>
  );
};

export default Login;
