import React from "react";
import classes from "./Testimonials.module.css";

import quote from "../Imgs/quote.png";

import { FaStar } from "react-icons/fa6";

function Testimonials() {
  return (
    <div className={classes["testimonialsBox"]}>
      <div className={classes["headingBox"]}>
        <h2>Opinie Naszych Klientów</h2>
        <hr />
      </div>
      <div className={classes["testimonialsWrapper"]}>
        <div className={classes["testimonial"]}>
          <img src={quote} alt="quote mark" className={classes["quoteMark"]} />
          <p>
            Fachowiec Godny polecenia sumienny i terminowy . Jesteśmy bardzo
            zadowoleni z wykonywanych usług! gorąco polecam.
          </p>
          <div className={classes["starsWrapper"]}>
            <FaStar className={classes["star"]} />
            <FaStar className={classes["star"]} />
            <FaStar className={classes["star"]} />
            <FaStar className={classes["star"]} />
            <FaStar className={classes["star"]} />
          </div>
          <img
            src={quote}
            alt="quote mark"
            className={`${classes["quoteMark"]} ${classes["quoteMark--rotated"]}`}
          />
        </div>
        <div className={classes["testimonial"]}>
          <img src={quote} alt="quote mark" className={classes["quoteMark"]} />
          <p>
            Firma Bud-Sil to absolutny profesjonalizm! Wykonali dla mnie
            kompleksową instalację CO, wymienili piony i zainstalowali
            nowoczesne ogrzewanie podłogowe. Solidna robota, a obsługa na
            najwyższym poziomie!
          </p>
          <div className={classes["starsWrapper"]}>
            <FaStar className={classes["star"]} />
            <FaStar className={classes["star"]} />
            <FaStar className={classes["star"]} />
            <FaStar className={classes["star"]} />
            <FaStar className={classes["star"]} />
          </div>
          <img
            src={quote}
            alt="quote mark"
            className={`${classes["quoteMark"]} ${classes["quoteMark--rotated"]}`}
          />
        </div>
        <div className={classes["testimonial"]}>
          <img src={quote} alt="quote mark" className={classes["quoteMark"]} />
          <p>
            Zdecydowanie polecam usługi firmy Bud-Sil, wykonali całą kotłownię
            oraz instalacją C.W.U. Rzetelne podejście do klienta, wykonanie i
            fachowe doradztwo. Jestem bardzo zadowolony z efektów współpracy.
          </p>
          <div className={classes["starsWrapper"]}>
            <FaStar className={classes["star"]} />
            <FaStar className={classes["star"]} />
            <FaStar className={classes["star"]} />
            <FaStar className={classes["star"]} />
            <FaStar className={classes["star"]} />
          </div>
          <img
            src={quote}
            alt="quote mark"
            className={`${classes["quoteMark"]} ${classes["quoteMark--rotated"]}`}
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
