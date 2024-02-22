import Header from "../Header/Header";
import Companies from "../Companies/Companies";
import AboutUs from "../About/AboutUs";

import classes from "./MainPage.module.css";

function MainPage() {
  return (
    <div className={classes["mainPageWrapper"]}>
      <Header />
      <Companies />
      <AboutUs />
    </div>
  );
}

export default MainPage;
