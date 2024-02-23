import classes from "./ContactPage.module.css";

import { FaPhoneAlt, FaHome, FaBook } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

function ContactPage() {
  return (
    <div className={classes["contactPageWrapper"]}>
      <h2>Skontaktuj się z nami</h2>
      <div className={classes["contactPage-box"]}>
        <div className={classes["contact-wrapper--textbox"]}>
          <div className={classes["contact-wrapper"]}>
            <FaPhoneAlt className={classes["contact-wrapper--icon"]} />
            <p>+48 123 456 789</p>
          </div>
          <div className={classes["contact-wrapper"]}>
            <FaPhoneAlt className={classes["contact-wrapper--icon"]} />
            <p>+48 987 654 321</p>
          </div>
          <div className={classes["contact-wrapper"]}>
            <SiMinutemailer className={classes["contact-wrapper--icon"]} />
            <p>bud-sil@gmail.com</p>
          </div>
          <div className={classes["contact-wrapper"]}>
            <FaHome className={classes["contact-wrapper--icon"]} />
            <p>Brzeg, ul.Towarowa 6</p>
          </div>
          <div className={classes["contact-wrapper"]}>
            <FaBook className={classes["contact-wrapper--icon"]} />
            <p>NIP: xxxxxxxxx</p>
          </div>
        </div>

        <div className={classes["contact-wrapper--formbox"]}>
          <form>
            <label htmlFor="firstName">Imię:</label>
            <input type="text" id="firstName" name="firstName" required />
            <label htmlFor="lastName">Nazwisko:</label>
            <input type="text" id="lastName" name="lastName" required />

            <label htmlFor="email">Twój Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Wiadomość:</label>
            <textarea id="message" name="message" rows="8" required></textarea>

            <button type="submit">Wyślij</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
