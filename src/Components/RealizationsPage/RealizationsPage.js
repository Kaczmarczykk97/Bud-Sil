import { useState } from "react";

import classes from "./RealizationsPage.module.css";

import gallery_imgs from "../Imgs/gallery/gallery-imgs";

function RealizationsPage() {
  const [filteredGallery, setFilteredGallery] = useState(gallery_imgs);

  function filterGalleryByCategoryHandler(e) {
    if (
      e.target.dataset.id === "heat_pump" ||
      e.target.closest("button").dataset.id === "heat_pump"
    ) {
      setFilteredGallery(() => {
        return gallery_imgs.filter((img) => img.category === "heat_pump");
      });
    }
    if (
      e.target.dataset.id === "bathroom" ||
      e.target.closest("button").dataset.id === "bathroom"
    ) {
      setFilteredGallery(() => {
        return gallery_imgs.filter((img) => img.category === "bathroom");
      });
    }
    if (
      e.target.dataset.id === "CO_CWU" ||
      e.target.closest("button").dataset.id === "CO_CWU"
    ) {
      setFilteredGallery(() => {
        return gallery_imgs.filter((img) => img.category === "CO_CWU");
      });
    }
    if (
      e.target.dataset.id === "all" ||
      e.target.closest("button").dataset.id === "all"
    ) {
      setFilteredGallery(gallery_imgs);
    }
  }

  return (
    <div className={classes["realizationPageWrapper"]}>
      <div className={classes["banner"]}>
        <h2>REALIZACJE</h2>
      </div>
      <div className={classes["gallery-nav"]}>
        <ul>
          <li>
            <button data-id="all" onClick={filterGalleryByCategoryHandler}>
              Wszystkie
            </button>
          </li>
          <li>
            <button
              data-id="heat_pump"
              onClick={filterGalleryByCategoryHandler}
            >
              Pompy Ciepła
            </button>
          </li>
          <li>
            <button data-id="bathroom" onClick={filterGalleryByCategoryHandler}>
              Wykończenie łazienek
            </button>
          </li>
          <li>
            <button data-id="CO_CWU" onClick={filterGalleryByCategoryHandler}>
              Instalacje C.O i C.W.U.
            </button>
          </li>
        </ul>
      </div>
      <div className={classes["gallery"]}>
        {filteredGallery.map((img, i) => {
          return (
            <div className={classes["galleryImg-container"]} key={i}>
              <img src={img.img} alt={img.category} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RealizationsPage;
