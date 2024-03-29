import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navbar.module.css";

import logo from "../Imgs/logo_2.PNG";

import { MdClose, MdMenu } from "react-icons/md";

function Navbar() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const openMobileMenuHandler = () => {
    setOpenMobileMenu((prev) => !prev);
  };

  useEffect(() => {
    if (window.innerWidth > 550) {
      setOpenMobileMenu(false);
    }
  }, []);

  const scrollToSection = () => {
    const section = document.getElementById("section-about");
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <nav className={classes["navbar"]}>
      <NavLink to="/" className={classes["navbar_logoContainer"]}>
        <img
          className={classes["navbar_logoContainer--logo"]}
          src={logo}
          alt="Bud-Sil logo"
        />
      </NavLink>
      <ul className={`${openMobileMenu ? classes["closedMobileMenu"] : ""} `}>
        <li>
          <NavLink to="/" onClick={scrollToSection}>
            O Nas
          </NavLink>
        </li>
        <li>
          <NavLink to="/realizacje">Realizacje</NavLink>
        </li>
        <li>
          <NavLink to="/kontakt">Kontakt</NavLink>
        </li>
      </ul>
      {openMobileMenu ? (
        <MdClose
          className={classes["mobileIcon"]}
          onClick={openMobileMenuHandler}
        />
      ) : (
        <MdMenu
          className={classes["mobileIcon"]}
          onClick={openMobileMenuHandler}
        />
      )}
    </nav>
  );
}

export default Navbar;
