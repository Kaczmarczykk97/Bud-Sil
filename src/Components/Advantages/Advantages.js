import React from "react";
import classes from "./Advantages.module.css";

import { GiReceiveMoney } from "react-icons/gi";
import { RiLightbulbFlashFill, RiPlantLine } from "react-icons/ri";
import { FaRegHandshake } from "react-icons/fa6";

function Advantages() {
  return (
    <div className={classes["advantagesBox"]}>
      <div className={classes["advantage"]}>
        <GiReceiveMoney className={classes["advantage-icon"]} />
        <p>Oszczędność na rachunkach</p>
      </div>
      <div className={classes["advantage"]}>
        <RiLightbulbFlashFill className={classes["advantage-icon"]} />
        <p>Niezależność energetyczna</p>
      </div>
      <div className={classes["advantage"]}>
        <RiPlantLine className={classes["advantage-icon"]} />
        <p>W zgodzie ze środowiskiem</p>
      </div>
      <div className={classes["advantage"]}>
        <FaRegHandshake className={classes["advantage-icon"]} />
        <p>Dofinansowania na pompy ciepła</p>
      </div>
    </div>
  );
}

export default Advantages;
