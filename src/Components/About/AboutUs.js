import classes from "./AboutUs.module.css";

import { FaTrophy, FaChartLine, FaPhoneAlt } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { TbPigMoney } from "react-icons/tb";

import experience_img from "../Imgs/experience_img.png";

function AboutUs() {
  return (
    <div className={classes["aboutUsBox"]}>
      <div className={classes["headingBox"]}>
        <h2>O Nas</h2>
        <hr />
      </div>
      <div className={classes["aboutUsWrapper--experience"]}>
        <div className={classes["aboutUsWrapper--experience-bullets"]}>
          <div className={classes["experience-bullet"]}>
            <div className={classes["experience-iconBox"]}>
              <FaTrophy className={classes["experience-icon"]} />
            </div>
            <p>Ponad 30 lat doświadczenia na rynku</p>
          </div>
          <div className={classes["experience-bullet"]}>
            <div className={classes["experience-iconBox"]}>
              <FaChartLine className={classes["experience-icon"]} />
            </div>
            <p>
              Stosowanie nowoczesnych rozwiązań w obszarze fotowoltaiki, HVAC i
              systemów grzewczych
            </p>
          </div>
          <div className={classes["experience-bullet"]}>
            <div className={classes["experience-iconBox"]}>
              <FaPhoneAlt className={classes["experience-icon"]} />
            </div>
            <p>
              Otwarta komunikacja i współpraca z klientami na każdym etapie
              projektu
            </p>
          </div>
          <div className={classes["experience-bullet"]}>
            <div className={classes["experience-iconBox"]}>
              <MdEngineering className={classes["experience-icon"]} />
            </div>
            <p>Fachowe doradztwo i szybka wycena</p>
          </div>
          <div className={classes["experience-bullet"]}>
            <div className={classes["experience-iconBox"]}>
              <TbPigMoney className={classes["experience-icon"]} />
            </div>
            <p>Pomoc przy dofinansowaniu do montażu pompy ciepła</p>
          </div>
        </div>
        <div className={classes["aboutUsWrapper--experience-img"]}>
          <img
            src={experience_img}
            alt="Air conditioning, HVAC, Renewable energy, Heat pump"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
