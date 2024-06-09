import React, { useContext, useEffect, useState } from "react";
import { Context, server } from "../main";
import Loader from "../components/Loader";
import { Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Profile = () => {
  const { isAuthenticated, loading } = useContext(Context);
  const [myUser, setMyUser] = useState({});

  useEffect(() => {
    axios
      .get(`${server}/users/me`, {
        withCredentials: true,
      })
      .then((res) => {
        setMyUser(res.data.user);
      })
      .catch((error) => {
        setMyUser("");
      });
  });

  if (!isAuthenticated) {
    toast.error("Login First");
    return <Navigate to={"/login"} />;
  }

  return loading ? (
    <Loader />
  ) : (
    <div>
      <h1>{myUser.name}</h1>
      <p>{myUser.email}</p>
    </div>
  );
};

export default Profile;
