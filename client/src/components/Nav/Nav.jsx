import { useState } from "react";
import "./Nav.css";
import { Auth } from "../Auth/Auth";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  const handleMenuClick = () => {
    setOpen(false);
  };

  return (
    <nav className="navBar">
      <div className={`hamburguer ${open ? "open" : ""}`} onClick={handleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {open && (
        <div className="menu" onClick={handleMenuClick}>
          {" "}
          <Auth />
          <Link to={"seasons"} className="link">
            Plantas de temporada
          </Link>
          <Link to={"/normas-de-uso"} className="link">
            Normas de uso
          </Link>
        </div>
      )}
      <div className="menu-items">
        <div className="menu-items-nav">
          <Auth />
          <Link to={"seasons"} className="link">
            Plantas de temporada🌸
          </Link>
          <Link to={"/normas-de-uso"} className="link">
            Normas de uso
          </Link>
        </div>
      </div>
    </nav>
  );
};
