import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser } from "../utilities/users-api";

export default function NavBar({ user }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUser();
        setData(response);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const Loading = () => {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  };
  const navBar = (userData) => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-around">
          <Link to="/home">
            <strong>Home</strong>
          </Link>

          <Link to="/logout">
            <strong>About Me</strong>
          </Link>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
          <div className="rounded-circle ">
            {/* <Link > */}
            <p>Welcome {user.name}</p>
            {/* </Link> */}
          </div>
        </nav>
      </div>
    );
  };

  return isLoading ? Loading : user ? navBar(data) : null;
}
