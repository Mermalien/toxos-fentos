import "./Seasons.css";
import { Link } from "react-router-dom";

export const Seasons = () => {
  return (
    <div id="seasons" className="seasons-container">
      <div className="seasons-page">
        <h2>Plantas de temporada</h2>
        <div className="seasons-btns">
          <button className="spring-btn">
            <Link to={"/seasons/spring"}>Primavera</Link>
          </button>

          <button className="summer-btn">
            <Link to={"/seasons/summer"}>Verano</Link>
          </button>

          <button className="autumn-btn">
            <Link to={"/seasons/autumn"}>Otoño</Link>
          </button>

          <button className="winter-btn">
            <Link to={"/seasons/winter"}>Invierno</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
