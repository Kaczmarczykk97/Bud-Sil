import React from "react";
import classes from "./ArrowScrollTop.module.css";

import { FaArrowUp } from "react-icons/fa";

function ArrowScrollTop() {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div className={classes["arrowScrollTop"]} onClick={scrollToTop}>
      <FaArrowUp className={classes["arrowScrollTop-icon"]} />
    </div>
  );
}

export default ArrowScrollTop;
