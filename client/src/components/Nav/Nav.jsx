import { useState } from "react";
import "./Nav.css";
import { Auth } from "../Auth/Auth";

export const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="navBar">
      <div className={`hamburguer ${open ? "open" : ""}`} onClick={handleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {open && (
        <ol className="menu">
          <li>
            {" "}
            <Auth />
          </li>
        </ol>
      )}
      <div className="menu-items">
        <div className="auth-nav">
          <span>
            <Auth />
          </span>
        </div>
      </div>
    </nav>
  );
};
