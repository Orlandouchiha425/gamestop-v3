import { useState, useEffect } from "react";
import { deleteGames } from "../../utilities/apiRoutes/games-api";
import { findOnegameById } from "../../utilities/apiRoutes/games-api";
import { useParams, useNavigate, Link } from "react-router-dom";
import styles from "./OneGame.module.css"; // Import the CSS module directly into the component file
import Rating from "../Rating/Rating";
import CartProduct from "../../components/Cart/CartProduct";
// import Cart from "../Cart/Cart";
import { CartContext } from "../../CartContext";
import { useContext } from "react";
export default function OneGame({ user }) {
  const [data, setData] = useState();
  let { id } = useParams();

  /////CART LOGIC
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(id);

  const navigate = useNavigate();
  const getOneGameOnly = async () => {
    try {
      const response = await findOnegameById(id);
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      deleteGames(id);
      navigate("/home");
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

  const adminGame = () => {
    if (!data || !data._id) {
      return null;
    }
    <CartProduct data={data} setData={setData} />;

    return user.role === "admin" ? (
      <div className={styles["main-wrapper"]}>
        <div className={styles.container}>
          <div className={styles["product-div"]}>
            <div className={styles["product-div-left"]}>
              <Link to="/create">
                <button type="button" class="btn btn-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="30"
                    fill="currentColor"
                    class="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                </button>
              </Link>
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
                  <Link to={`/${data._id}`}>
                    <i className="fas fa-shopping-cart"></i>Edit Game
                  </Link>
                </button>

                <button
                  type="button"
                  className={styles["buy-now-btn"]}
                  onClick={() => handleDelete()}
                >
                  <i className="fas fa-wallet"></i>Delete Game
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className={styles["main-wrapper"]}>
        <div className={styles.container}>
          <div className={styles["product-div"]}>
            <div className={styles["product-div-left"]}>
              <Link to="/home">
                <button type="button" class="btn btn-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="30"
                    fill="currentColor"
                    class="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                </button>
              </Link>

              <div className={styles["img-container"]}>
                <img
                  src={`${data.img}.jpg`}
                  alt="game"
                  className={`${styles.zoom} ${styles.images}`}
                />
                <p className={styles.textalign}>By: {data.platform}</p>
                <h5>Quantity:</h5> {productQuantity}
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
                {productQuantity > 0 ? (
                  <>
                    <button
                      m
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        console.log("button clicked");
                        cart.addOneToCart(id);
                      }}
                    >
                      +{/* <i className="fas fa-shopping-cart">+</i> */}
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button
                      type="button"
                      className="btn-primary"
                      onClick={() => {
                        console.log("button clicked");
                        cart.removeOneFromCart(id);
                      }}
                    >
                      -
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    className={styles["add-cart-btn"]}
                    onClick={() => {
                      console.log("button clicked");
                      cart.addOneToCart(id);
                    }}
                  >
                    <i className="fas fa-shopping-cart"></i>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
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

  return data ? adminGame() : loading();
}
