import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Location.module.css";

import { FaPhoneAlt } from "react-icons/fa";


function Location() {
  return (
    <div className={classes["locationBox"]}>
      <div className={classes["headingBox"]}>
        <h2>Tutaj Nas Znajdziesz</h2>
        <hr />
      </div>
      <div className={classes["locationMap-wrapper"]}>
        <div
          className={`${classes["locationMap-wrapper--textbox"]} ${classes["text-box"]}`}
        >
          <FaPhoneAlt className={classes["locationMap-wrapper--phoneIcon"]} />
          <h3>Szukasz porady specjalisty?</h3>
          <h4>Nie wahaj się</h4>
          <NavLink to="/kontakt" className={classes["text-box--btn"]}>
            Skontaktuj się z nami
          </NavLink>
          <p>
            <span>Pn-Pt: </span> 7:00 - 16:00
          </p>
          <p>
            <span>So-N: </span> zamknięte
          </p>
        </div>
        <div className={classes["locationMap-wrapper--map"]}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1259.3614826051055!2d17.46609153725851!3d50.854814187347436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47103020f44043f3%3A0xb141d95e21c33590!2sBud-Sil.%20ZUH.%20Silarski%20W.!5e0!3m2!1spl!2spl!4v1708613197804!5m2!1spl!2spl"
            style={{ border: 0, width: "100%", height: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Location;
