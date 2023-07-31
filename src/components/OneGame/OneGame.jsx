import { useState, useEffect } from "react";
import { findOnegameById } from "../../utilities/apiRoutes/games-api";
import { useParams } from "react-router-dom";

export default function Onegame({ games, setGames }) {
  //   const [data, setData] = useState(null);
  let { id } = useParams();

  const getOneGameOnly = async () => {
    try {
      const response = await findOnegameById(id);
      setGames(response);
    } catch (error) {
      console.log(error);
    }
  };

  const capitalizeFirstCharacter = (title) => {
    let arr = title.split(" ");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let str2 = arr.join(" ");
    return str2;
  };

  useEffect(() => {
    getOneGameOnly();
  }, []);

  const loaded = () => {
    return (
      <div>
        <img src={`${games.img}.jpg`} height="500px" width="500px" />
        <h1>{capitalizeFirstCharacter(games.title)}</h1>
        <h3>{games.price}$</h3>
        <h5>this is just a test2 {games._id}</h5>

        {/* <DeleteGame /> */}
        {/* <Link to={`/${data.games._id}`}>Edit Game</Link> */}
      </div>
    );
  };
  const loading = () => {
    return (
      <main className="loading-screen">
        <h2>loading.... Please Wait for your Awesome Game!</h2>
        <h1>this is ID: {id}</h1>
      </main>
    );
  };

  return games ? loaded() : loading();
}
