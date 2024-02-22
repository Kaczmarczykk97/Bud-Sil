import classes from "./Companies.module.css";

import logo_1 from "../Imgs/logo_Brötje_Heizung.png";
import logo_2 from "../Imgs/logo_York.png";
import logo_3 from "../Imgs/logo_Geberit.png";
import logo_4 from "../Imgs/logo_Bosch.png";

function Companies() {
  return (
    <div className={classes["companiesBox"]}>
      <div className={classes["headingBox"]}>
        <h2>Korzystamy tylko ze sprawdzonych marek</h2>
        <hr />
      </div>
      <div className={classes["companies_imgs--wrapper"]}>
        <img src={logo_1} alt="Brötje Heizung logo" />
        <img src={logo_2} alt="York logo" />
        <img src={logo_3} alt="Geberit logo" />
        <img src={logo_4} alt="Bosch logo" />
      </div>
    </div>
  );
}

export default Companies;
