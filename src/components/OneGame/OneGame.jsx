import { useState, useEffect } from "react";
import { findOnegameById } from "../../utilities/apiRoutes/games-api";
import { useParams } from "react-router-dom";
import styles from "./OneGame.module.css"; // Import the CSS module directly into the component file
import Rating from "../Rating/Rating";

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

    return data ? (
      <div className={styles["main-wrapper"]}>
        <div className={styles.container}>
          <div className={styles["product-div"]}>
            <div className={styles["product-div-left"]}>
              <div className={styles["img-container"]}>
                <img
                  src={`${data.img}.jpg`}
                  alt="game"
                  className={`${styles.zoom} ${styles.images}`}
                />
                <p className={styles.textalign}>By: {data.platform}</p>
              </div>
              {/* <div className={stysles["hover-container"]}>
              {data.}
            </div> */}
            </div>
            <div className={styles["product-div-right"]}>
              <span className={styles["product-name"]}>
                <h1>{capitalizeFirstCharacter(data.title)}</h1>
              </span>
              <span className={styles["product-price"]}>$ {data.price}</span>
              <Rating />
              <p
                className={`${styles["product-description"]} ${styles.firstLetter}`}
              >
                {data.description}
              </p>
              <div className={styles["btn-groups"]}>
                <button type="button" className={styles["add-cart-btn"]}>
                  <i className="fas fa-shopping-cart"></i>add to cart
                </button>
                <button type="button" className={styles["buy-now-btn"]}>
                  <i className="fas fa-wallet"></i>buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <main className={styles["loading-screen"]}>
        <h2>loading.... Please Wait for your Awesome Game!</h2>
        <h1>this is ID: {id}</h1>
      </main>
    );
  };

  const loading = () => {
    return (
      <main classNameName="loading-screen">
        <h2>loading.... Please Wait for your Awesome Game!</h2>
        <h1>this is ID: {id}</h1>
      </main>
    );
  };

  return data ? loaded() : loading();
}
