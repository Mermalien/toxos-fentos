import "./Header.css";
import { Menu } from "../Menu/Menu";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to={"/"} className="logo-link">
          {" "}
          <p className="logo">Toxos&Fentos</p>
        </Link>
      </div>
      <div className="menu-div">
        <Menu />
      </div>
    </header>
  );
};
