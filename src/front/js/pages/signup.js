import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { actions, store } = useContext(Context);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.signup(email, password).then(navigate("/"))
  };

  useEffect(() => {
    store.token &&
      store.token != "" &&
      store.token != undefined &&
      navigate("/profile");
  });

  return (
    <form className="box" onSubmit={(e) => handleSubmit(e)}>
      <div className="title">
        <i className="fa-solid fa-fingerprint"></i>
      </div>
      <div className="box-item">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          placeholder="Your Email"
          type="text"
          onChange={({ target }) => setEmail(target.value)}
          value={email}
        />
      </div>
      <div className="box-item">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          placeholder="Your password"
          type="password"
          onChange={({ target }) => setPassword(target.value)}
          value={password}
        />
      </div>
      <div className="box-item">
        <button type="submit">Signup</button>
      </div>
    </form>
  );
};
