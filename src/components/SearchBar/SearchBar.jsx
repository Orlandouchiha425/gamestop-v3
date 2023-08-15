import React, { useState, useEffect } from "react";
import { findAllGames } from "../../utilities/apiRoutes/games-api";
import { Link } from "react-router-dom";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [allGames, setAllGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);

  const fetchData = async () => {
    try {
      const response = await findAllGames();
      setAllGames(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (evt) => {
    setSearchInput(evt.target.value);
    filterGames(evt.target.value);
  };

  const filterGames = (input) => {
    const filtered = allGames.filter((game) =>
      game.title.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredGames(filtered);
  };

  const handleSearchSubmit = () => {
    if (filteredGames.length > 0) {
      const gameId = filteredGames[0]._id;
      <Link to={`/home/${gameId}`} />;
    }
  };

  const handleKeyPress = (evt) => {
    if (evt.key === "Enter") {
      handleSearchSubmit();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title..."
        value={searchInput}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />

      {filteredGames.length > 0 ? (
        <Link to={`/home/${filteredGames[0]._id}`}>
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="button"
          >
            Submit!
          </button>
        </Link>
      ) : (
        <p>No games found</p>
      )}
    </div>
  );
}

export default SearchBar;
