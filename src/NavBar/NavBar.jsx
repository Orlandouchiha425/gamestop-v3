import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser } from "../utilities/users-api";
import "./NavBar.css";

export default function NavBar({ user }) {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUser();
        setUserData(response);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    fetchUserData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const renderUserNav = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-around">
        <Link to="/home">
          <h3 className="text-body gameStopnavFont">
            <strong>GameStop</strong>
          </h3>
        </Link>
        <Link to="/home">Home</Link>
        <Link to="/logout">About Me</Link>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
        <div className="rounded-circle">
          <p>Welcome {user.name}</p>
        </div>
        <Link to="/cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-cart3"
            viewBox="0 0 16 16"
          >
            <path d="..." />
          </svg>
        </Link>
      </nav>
    );
  };

  const renderAdminNav = () => {
    return (
      <nav className="nav styles bg-light">
        <Link className="nav-link active" to="/home">
          <i className="fa-solid fa-user account">Show Games</i>
        </Link>
        <Link className="nav-link active" to="/create">
          Create Games
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-controller"
            viewBox="0 0 16 16"
          >
            <path d="..." />
          </svg>
        </Link>
        <Link to="/logout">
          <strong>About Me</strong>
        </Link>
      </nav>
    );
  };

  const renderLoginNav = () => {
    return (
      <nav className="nav styles bg-light">
        <Link className="nav-link active" to="/login">
          <i className="fa-solid fa-user account">Login</i>
        </Link>
        <Link className="nav-link active" to="/signup">
          Sign Up
        </Link>
        <Link className="nav-link active" to="/adminlogin">
          Admin Login{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-controller"
            viewBox="0 0 16 16"
          >
            <path d="..." />
          </svg>
        </Link>
      </nav>
    );
  };

  if (!user) {
    return renderLoginNav();
  }

  if (user.role === "admin") {
    return renderAdminNav();
  } else {
    return renderUserNav();
  }
}
