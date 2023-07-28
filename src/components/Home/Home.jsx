import React, { useState, useEffect } from "react";
import { findAllGames } from "../../utilities/apiRoutes/games-api";
import styles from "./Home.module.css";

function Home() {
  const [game, setGames] = useState([]);

  const fetchGames = async (evt) => {
    try {
      const response = await findAllGames();
      setGames(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchGames();
  }, []);

  const loading = () => {
    return <h1>No games to Display</h1>;
  };

  const loaded = () => {
    return (
      <>
        {/* <Link to={"/pokemon"}>
          <img src={pokemon} className="img-fluid" />
        </Link> 
        {/* <Carousel/> */}
        <div className=" d-flex flex-wrap justify-content-around">
          {game.map((element, index) => (
            <>
              <div>
                <article className={styles.card}>
                  <article className={styles.card__one}>
                    <div className={styles.card__info_hover}>
                      {/* <i className="fa-regular fa-heart"><p onClick={evenClickFavorite}>Add  {element.title} to favorites</p></i> */}

                      {/* <svg className={styles.card__like}  viewBox="0 0 24 24">
    <path fill="#000000" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
</svg> */}

                      <div className={styles.card__clock_info}>
                        <svg className={styles.card__clock} viewBox="0 0 24 24">
                          <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
                        </svg>
                        <span className={styles.card__time}>1 min</span>
                      </div>
                    </div>
                    <div className={styles.card__img}></div>
                    <a href={`/${element._id}`} className={styles.card_link}>
                      <div className={styles.card__img__hover}>
                        <a>
                          <img src={`${element.img}.jpg`} />
                        </a>
                      </div>
                    </a>
                    <div className={styles.card__info}>
                      <span className={styles.card__category}> </span>
                      <h3 className={styles.card__title}>{element.title}</h3>
                      <div className="short">{element.description}</div>
                      {/* <button onClick={() =>handleAddToOrder(element._id) }>Add Game</button> */}

                      <span className={styles.card__by}>
                        by{" "}
                        <a
                          href="https://github.com/Orlandouchiha425/gamestop"
                          target="_blank"
                          className={styles.card__author}
                        >
                          orlando valadez
                        </a>
                      </span>
                    </div>
                  </article>
                </article>
                <div className={styles.buttonSize}>
                  <button type="button" className="btn btn-light ">
                    {" "}
                    <i className="fa-regular fa-heart">
                      <p className={styles.favorite}>
                        Add {element.title} to favorites
                      </p>
                    </i>
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </>
    );
  };
  return game && game.title ? loading() : loaded();
}

export default Home;
