import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { findAllGames } from "../../utilities/apiRoutes/games-api";
import styles from "./Home.module.css";
export default function Home() {
  const [data, setData] = useState([]);
  const [favorite, SetFavorite] = useState(true);

  const fetchData = async (evt) => {
    try {
      const response = await findAllGames();
      setData(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const loading = () => {
    return <h1>No games to Display</h1>;
  };

  const loaded = () => {
    return (
      <>
        <div className=" d-flex flex-wrap justify-content-around">
          {data.map((element, index) => (
            <>
              <div>
                <article className={styles.card}>
                  <article className={styles.card__one}>
                    <div className={styles.card__info_hover}>
                      <div className={styles.card__clock_info}>
                        <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
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
                      <div className={styles.short}>{element.description}</div>
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
                  <button class={styles.card__btn}>View More</button>
                </article>
              </div>
            </>
          ))}
        </div>
      </>
    );
  };
  return data && data.title ? loading() : loaded();
}
