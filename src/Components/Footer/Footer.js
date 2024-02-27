import React from "react";
import classes from "./Footer.module.css";

// import logo from "../Imgs/logo_2.PNG";
import logo from "../Imgs/logo_1.png";
import footer_img from "../Imgs/footer_img.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={classes["footer"]}>
      <img
        src={footer_img}
        alt="heat pump vector"
        className={classes["heatPump-icon"]}
      />
      <div className={classes["footer-wrapper"]}>
        <div className={classes["footer-contact"]}>
          <div className={classes["footer-contact--col-1"]}>
            <img src={logo} alt="Bud-Sil's logo" />
            <p>Towarowa 6</p>
            <p>49-340 Brzeg</p>
            <p>NIP: xxxxxxxx</p>
          </div>
          <div className={classes["footer-contact--col-2"]}>
            <h3>Kontakt</h3>
            <p>+48 123 456 789</p>
            <p>+48 987 654 321</p>
            <p>budsil.biuro@gmail.com</p>
          </div>
        </div>
        <div className={classes["footer-services"]}>
          <h3>Usługi</h3>
          <p>Pompy ciepła</p>
          <p>Instalacje c.w.u.</p>
          <p>Instalacje C.O.</p>
          <p>Fotowoltaika</p>
          <p>Wentylacje</p>
          <p>Klimatyzacje</p>
        </div>
      </div>
      <hr />
      <div className={classes["copyright"]}>
        <p>{currentYear}© Wszelkie prawa zastrzeżone</p>
        <p>wykonał: Kamil Kaczmarczyk</p>
      </div>
    </div>
  );
}

export default Footer;
