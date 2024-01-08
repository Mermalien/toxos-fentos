import "./Header.css";
import { Menu } from "../Menu/Menu";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to={"/"}>
          {" "}
          <img src={logo} className="logo" />
        </Link>
      </div>
      <div className="menu-div">
        <Menu />
      </div>
    </header>
  );
};
