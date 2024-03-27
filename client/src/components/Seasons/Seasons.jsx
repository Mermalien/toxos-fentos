import "./Seasons.css";
import { Link } from "react-router-dom";
import { SeasonsCountdown } from "./SeasonsCountdown/SeasonCountdown";

export const Seasons = () => {
  return (
    <div id="seasons" className="seasons-container">
      <div className="seasons-page">
        <SeasonsCountdown />
        <div className="seasons-btns">
          <div className="spring-div">
            <button className="spring-btn">
              <p>
                <Link to={"/seasons/spring"} className="seasons-p">
                  PRIMAVERA
                </Link>
              </p>
            </button>
          </div>

          <div className="summer-div">
            <button className="summer-btn">
              <p>
                {" "}
                <Link to={"/seasons/summer"} className="seasons-p">
                  VERANO
                </Link>
              </p>
            </button>
          </div>

          <div className="autumn-div">
            <button className="autumn-btn">
              <p>
                {" "}
                <Link to={"/seasons/autumn"} className="seasons-p">
                  OTOÑO
                </Link>
              </p>
            </button>
          </div>

          <div className="winter-div">
            <button className="winter-btn">
              <p>
                <Link to={"/seasons/winter"} className="seasons-p">
                  INVIERNO
                </Link>
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
