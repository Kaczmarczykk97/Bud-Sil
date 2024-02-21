import { useEffect, useState } from "react";

import classes from "./Header.module.css";

import header_backgrounds from "../Imgs/header_backgrounds/header_bacgkorund";

function Header() {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundIndex(
        (prevIndex) => (prevIndex + 1) % header_backgrounds.length
      );
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <header
      style={{
        backgroundImage: `linear-gradient(to right, rgb(6, 57, 112, 0.8), rgba(0, 0, 0, 0.6)), url(${header_backgrounds[backgroundIndex]})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className={classes["text-box"]}>
        <h1>
          Bud-<span>Sil.</span>
        </h1>
        <h2>ZUH. Silarski W.</h2>
        <p>"Z nami będziesz miał ciepło za rozsądne pieniądze."</p>
        <button>Kontakt</button>
      </div>
    </header>
  );
}

export default Header;
