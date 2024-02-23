import Header from "../Header/Header";
import Companies from "../Companies/Companies";
import AboutUs from "../About/AboutUs";
import Testimonials from "../Testimonials/Testimonials";
import Advantages from "../Advantages/Advantages";
import Location from "../Location/Location";
import ArrowScrollTop from "../ArrowScrollTop/ArrowScrollTop";

import classes from "./MainPage.module.css";

function MainPage() {
  return (
    <div className={classes["mainPageWrapper"]}>
      <Header />
      <Companies />
      <AboutUs />
      <Testimonials />
      <Advantages />
      <Location />
      <ArrowScrollTop />
    </div>
  );
}

export default MainPage;
