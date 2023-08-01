import { useState, useEffect } from "react";
import { findOnegameById } from "../../utilities/apiRoutes/games-api";
import { useParams } from "react-router-dom";

export default function OneGame() {
  const [data, setData] = useState();
  let { id } = useParams();

  const getOneGameOnly = async () => {
    try {
      const response = await findOnegameById(id);
      setData(response);
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
    if (!data || !data._id) {
      return null;
    }

    return (
      <div>
        <img
          src={`${data.img}.jpg`}
          height="500px"
          width="500px"
          alt="Game Poster"
        />
        <h1>{capitalizeFirstCharacter(data.title)}</h1>
        <h3>{data.price}$</h3>
        <h5>this is just a test2 {data._id}</h5>
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

  return data ? loaded() : loading();
}
