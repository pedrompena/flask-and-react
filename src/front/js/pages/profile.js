import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const Profile = () => {
  const [userData, setUserData] = useState({});
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleClick = () => {
    actions.clearToken();
  };

  const getUser = async () => {
    const user = await actions.getUserInfo();
    setUserData(user);
  };

  useEffect(() => {
    store.token && store.token != "" && store.token != undefined && getUser();
  }, [store.token]);

  return (
    <div>
      {store.token && store.token != "" && store.token != undefined ? (
        <div className="box">
          <div className="title">
            <i className="fa-solid fa-circle-user"></i>
          </div>
          <p>{userData.email}</p>
          <div className="box-item">
            <button type="submit" onClick={handleClick}>
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="box">
          <p>You need</p>
          <button onClick={() => navigate("/login")}>Login</button>
          <p>or</p>
          <button onClick={() => navigate("/signup")}>Signup</button>
        </div>
      )}
    </div>
  );
};
