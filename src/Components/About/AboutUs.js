import React from "react";
import { useState } from "react";

import classes from "./AboutUs.module.css";

import { FaTrophy, FaChartLine, FaPhoneAlt } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { TbPigMoney } from "react-icons/tb";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

import experience_img from "../Imgs/experience_img.png";
import services_crew_img from "../Imgs/aboutUsWrapper_services_crew.jpg";
import heat_pump_img from "../Imgs/heat_pump.png";
import boiler_room_img from "../Imgs/boiler_room.png";
import co_installation_img from "../Imgs/co_installation.png";
import cwu_installation_img from "../Imgs/cwu_installation.png";

function AboutUs() {
  const [moreAboutCrew, setMoreAboutCrew] = useState(false);

  const [moreAboutHeatPump, setMoreAboutHeatPump] = useState(false);
  const [moreAboutBoilerRoom, setMoreAboutBoilerRoom] = useState(false);
  const [moreAboutCOInstallation, setMoreAboutCOInstallation] = useState(false);
  const [moreAboutCWUInstallation, setMoreAboutCWUInstallation] =
    useState(false);

  function openMoreAboutCrewHandler() {
    setMoreAboutCrew((prev) => !prev);
  }

  function openMoreAboutServicesHandler(e) {
    if (
      e.target.dataset.id === "heat-pump" ||
      e.target.closest("button").dataset.id === "heat-pump"
    ) {
      setMoreAboutHeatPump((prev) => !prev);
    }
    if (
      e.target.dataset.id === "boiler-room" ||
      e.target.closest("button").dataset.id === "boiler-room"
    ) {
      setMoreAboutBoilerRoom((prev) => !prev);
    }
    if (
      e.target.dataset.id === "co-installation" ||
      e.target.closest("button").dataset.id === "co-installation"
    ) {
      setMoreAboutCOInstallation((prev) => !prev);
    }
    if (
      e.target.dataset.id === "cwu-installation" ||
      e.target.closest("button").dataset.id === "cwu-installation"
    ) {
      setMoreAboutCWUInstallation((prev) => !prev);
    }
  }

  return (
    <div className={classes["aboutUsBox"]} id="section-about">
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
      <div className={classes["aboutUsWrapper--services"]}>
        <div className={classes["aboutUsWrapper--services-crew"]}>
          <img src={services_crew_img} alt="Bud-Sil's crew" />
          <p>
            Oferujemy kompleksowe rozwiązania w zakresie instalacji pomp ciepła
            od najlepszych productentów oraz instalacje CO i CWU. Z 30-letnim
            doświadczeniem, gwarantujemy solidność i profesjonalizm. Cieszymy
            się, że możemy uczynić Twoje marzenia o nowoczesnej kotłowni lub
            kompleksowej instalacji rzeczywistością.
          </p>
          {moreAboutCrew && (
            <p>
              Dlaczego warto skorzystać z naszych usług? Nasze 30-letnie
              doświadczenie przekłada się na solidność i profesjonalizm.
              Oferujemy nie tylko instalacje, ale także partnerstwo oparte na
              zaufaniu. Nasza oferta jest dopasowana do Twoich indywidualnych
              potrzeb, a zespół służy fachowym doradztwem i kompleksową obsługą.
              Z nami ciesz się ciepłem w domu, oszczędzając rozsądne pieniądze.
            </p>
          )}
          <button onClick={openMoreAboutCrewHandler}>
            {moreAboutCrew ? (
              <IoMdArrowDropup className={classes["closeArr"]} />
            ) : (
              "Dowiedz się więcej"
            )}
          </button>
        </div>
        <div className={classes["aboutUsWrapper--services-wrapper"]}>
          <div className={classes["aboutUsWrapper--service-box--row"]}>
            <div
              className={classes["service-box"]}
              data-id="heatPump"
              style={
                moreAboutHeatPump
                  ? { height: "auto" }
                  : { height: "max-content" }
              }
            >
              <div className={classes["curtain"]}>
                <button
                  onClick={openMoreAboutServicesHandler}
                  data-id="heat-pump"
                >
                  Pompy ciepła
                  {moreAboutHeatPump ? (
                    <IoMdArrowDropup className={classes["curtain-arr"]} />
                  ) : (
                    <IoMdArrowDropdown className={classes["curtain-arr"]} />
                  )}
                </button>
              </div>
              <img src={heat_pump_img} alt="heat pump" />
              {moreAboutHeatPump && (
                <p>
                  Kompletne rozwiązania z zakresu pomp ciepła, oferując naszym
                  klientom profesjonalną wycenę, fachowy montaż oraz wsparcie w
                  uzyskaniu dostępnych dofinansowań.
                </p>
              )}
            </div>
            <div
              className={classes["service-box"]}
              style={
                moreAboutBoilerRoom
                  ? { height: "auto" }
                  : { height: "max-content" }
              }
            >
              <div className={classes["curtain"]}>
                <button
                  onClick={openMoreAboutServicesHandler}
                  data-id="boiler-room"
                >
                  Kotłownie
                  {moreAboutBoilerRoom ? (
                    <IoMdArrowDropup className={classes["curtain-arr"]} />
                  ) : (
                    <IoMdArrowDropdown className={classes["curtain-arr"]} />
                  )}
                </button>
              </div>
              <img src={boiler_room_img} alt="boiler room" />
              {moreAboutBoilerRoom && (
                <p>
                  Kompleksowo projektujemy i wykonujemy nowoczesne kotłownie,
                  zapewniając naszym klientom pełną gamę usług. Nasza oferta
                  obejmuje zaprojektowanie instalacji oraz montaż.
                </p>
              )}
            </div>
          </div>
          <div className={classes["aboutUsWrapper--service-box--row"]}>
            <div
              className={classes["service-box"]}
              style={
                moreAboutCOInstallation
                  ? { height: "auto" }
                  : { height: "max-content" }
              }
            >
              <div className={classes["curtain"]}>
                <button
                  onClick={openMoreAboutServicesHandler}
                  data-id="co-installation"
                >
                  Instalacje C.O.
                  {moreAboutCOInstallation ? (
                    <IoMdArrowDropup className={classes["curtain-arr"]} />
                  ) : (
                    <IoMdArrowDropdown className={classes["curtain-arr"]} />
                  )}
                </button>
              </div>
              <img src={co_installation_img} alt="co installation" />
              {moreAboutCOInstallation && (
                <p>
                  Profesjonalny montaż kotłów i wymianę pionów grzewczych.
                  Projektujemy instalację CO oraz wykonujemy ogrzewanie
                  podłogowe, zapewniając klientom komfort cieplny i
                  energooszczędność.
                </p>
              )}
            </div>
            <div
              className={classes["service-box"]}
              style={
                moreAboutCWUInstallation
                  ? { height: "auto" }
                  : { height: "max-content" }
              }
            >
              <div className={classes["curtain"]}>
                <button
                  onClick={openMoreAboutServicesHandler}
                  data-id="cwu-installation"
                >
                  Instalacje C.W.U.
                  {moreAboutCWUInstallation ? (
                    <IoMdArrowDropup className={classes["curtain-arr"]} />
                  ) : (
                    <IoMdArrowDropdown className={classes["curtain-arr"]} />
                  )}
                </button>
              </div>
              <img src={cwu_installation_img} alt="cwu installation" />
              {moreAboutCWUInstallation && (
                <p>
                  Nasze instalacje C.W.U. obejmują staranne przyłączenie do
                  sieci wodociągowej, zastosowanie nowoczesnych bojlerów i
                  zabezpieczenia przed utratą ciepła.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
