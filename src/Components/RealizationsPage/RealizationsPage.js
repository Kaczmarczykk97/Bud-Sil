import React from "react";
import { useState } from "react";

import classes from "./RealizationsPage.module.css";

import gallery_imgs from "../Imgs/gallery/gallery-imgs";

import ModalGallery from "../ModalGallery/ModalGallery";

function RealizationsPage() {
  const [filteredGallery, setFilteredGallery] = useState(gallery_imgs);

  const [allBtnActive, setAllBtnActive] = useState(true);
  const [heatPumpBtnActive, setHeatPumpBtnActive] = useState(false);
  const [bathroomBtnActive, setBathroomBtnActive] = useState(false);
  const [coCwuBtnActive, setCoCwuBtnActive] = useState(false);

  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  function filterGalleryByCategoryHandler(e) {
    if (
      e.target.dataset.id === "heat_pump" ||
      e.target.closest("button").dataset.id === "heat_pump"
    ) {
      setHeatPumpBtnActive(() => true);
      setBathroomBtnActive(() => false);
      setAllBtnActive(() => false);
      setCoCwuBtnActive(() => false);

      setFilteredGallery(() => {
        return gallery_imgs.filter((img) => img.category === "heat_pump");
      });
    }
    if (
      e.target.dataset.id === "bathroom" ||
      e.target.closest("button").dataset.id === "bathroom"
    ) {
      setHeatPumpBtnActive(() => false);
      setBathroomBtnActive(() => true);
      setAllBtnActive(() => false);
      setCoCwuBtnActive(() => false);
      setFilteredGallery(() => {
        return gallery_imgs.filter((img) => img.category === "bathroom");
      });
    }
    if (
      e.target.dataset.id === "CO_CWU" ||
      e.target.closest("button").dataset.id === "CO_CWU"
    ) {
      setHeatPumpBtnActive(() => false);
      setBathroomBtnActive(() => false);
      setAllBtnActive(() => false);
      setCoCwuBtnActive(() => true);
      setFilteredGallery(() => {
        return gallery_imgs.filter((img) => img.category === "CO_CWU");
      });
    }
    if (
      e.target.dataset.id === "all" ||
      e.target.closest("button").dataset.id === "all"
    ) {
      setHeatPumpBtnActive(() => false);
      setBathroomBtnActive(() => false);
      setAllBtnActive(() => true);
      setCoCwuBtnActive(() => false);

      setFilteredGallery(gallery_imgs);
    }
  }

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.img);
  };

  const handelRotationRight = () => {
    const totalLength = filteredGallery.length;
    console.log(totalLength);
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = filteredGallery[0].img;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = filteredGallery.filter((item) => {
      return filteredGallery.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].img;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = filteredGallery.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = filteredGallery[totalLength - 1].img;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = filteredGallery.filter((item) => {
      return filteredGallery.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].img;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div className={classes["realizationPageWrapper"]}>
      <div className={classes["banner"]}>
        <h2>REALIZACJE</h2>
      </div>
      <div className={classes["gallery-nav"]}>
        <ul>
          <li>
            <button
              data-id="all"
              onClick={filterGalleryByCategoryHandler}
              className={allBtnActive ? classes["active"] : ""}
            >
              Wszystkie
            </button>
          </li>
          <li>
            <button
              data-id="heat_pump"
              onClick={filterGalleryByCategoryHandler}
              className={heatPumpBtnActive ? classes["active"] : ""}
            >
              Pompy Ciepła
            </button>
          </li>
          <li>
            <button
              data-id="bathroom"
              onClick={filterGalleryByCategoryHandler}
              className={bathroomBtnActive ? classes["active"] : ""}
            >
              Wykończenie łazienek
            </button>
          </li>
          <li>
            <button
              data-id="CO_CWU"
              onClick={filterGalleryByCategoryHandler}
              className={coCwuBtnActive ? classes["active"] : ""}
            >
              Instalacje C.O i C.W.U.
            </button>
          </li>
        </ul>
      </div>
      <div className={classes["gallery"]}>
        {filteredGallery.map((img, i) => {
          return (
            <div className={classes["galleryImg-container"]} key={i}>
              <img
                src={img.img}
                alt={img.category}
                onClick={() => handleClick(img, i)}
              />
            </div>
          );
        })}
      </div>
      {clickedImg && (
        <ModalGallery
          clickedImg={clickedImg}
          handelRotationRight={handelRotationRight}
          setClickedImg={setClickedImg}
          handelRotationLeft={handelRotationLeft}
        />
      )}
    </div>
  );
}

export default RealizationsPage;
