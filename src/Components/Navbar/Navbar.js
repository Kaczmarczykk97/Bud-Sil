import { NavLink } from "react-router-dom";

import classes from "./Navbar.module.css";

import logo from "../Imgs/logo_2.PNG";

function Navbar() {
  return (
    <nav className={classes["navbar"]}>
      <NavLink to="/" className={classes["navbar_logoContainer"]}>
        <img
          className={classes["navbar_logoContainer--logo"]}
          src={logo}
          alt="Bud-Sil logo"
        />
      </NavLink>
      <ul>
        <li>
          <NavLink to="/">O Nas</NavLink>
        </li>
        <li>
          <NavLink to="/">Realizacje</NavLink>
        </li>
        <li>
          <NavLink to="/">Kontakt</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
