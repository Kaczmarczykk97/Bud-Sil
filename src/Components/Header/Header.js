import classes from "./Header.module.css";

function Header() {
  return (
    <header>
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
