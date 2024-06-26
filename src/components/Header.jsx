import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context, server } from "../main";
import axios from "axios";
import toast from "react-hot-toast";

const Header = () => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);
  console.log(isAuthenticated);

  const logoutHandler = async (e) => {
    setLoading(true);

    e.preventDefault();

    try {
      const { data } = await axios.get(`${server}/users/logout`, {
        withCredentials: true,
      });
      toast.success(data.message);
      setLoading(false);
      setIsAuthenticated(false);
    } catch (error) {
      setLoading(false);
      toast.error("Some error");
      console.log(error.response.data.message);
      setIsAuthenticated(true);
    }
  };
  return (
    <nav className="header">
      <div>
        <h2>KaamKarBhai</h2>
      </div>
      <article>
        <Link to={"/"}>Home</Link>
        <Link to={"/profile"}>Profile</Link>
        {isAuthenticated ? (
          <button disabled={loading} onClick={logoutHandler} className="btn">
            Logout
          </button>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </article>
    </nav>
  );
};

export default Header;
