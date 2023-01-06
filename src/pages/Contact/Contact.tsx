import { Input } from "../../components/Form/Form";
import styles from "./Contact.module.scss";

export function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.contact__info}>
        <h1>Contact Us </h1>
        <div className={styles.contact__list}>
          <h2>Contact information</h2>
          <ul>
            <li>486 Rahi street, Berlin .98 Germany</li>
            <li>+48 601 366 816</li>
            <li>company@support.com</li>
          </ul>
          <h3>Follow Us</h3>
          <div className={styles.contact__social}></div>
        </div>
      </div>
      <div className={styles.contact__formbox}>
        <p>
          If you need our help with your user account, have questions about how
          to use the platform or are experiencing technical difficulties, please
          do not hesitate to contact us.
        </p>
        <div className={styles.contact__form}>
          <Input />
          <Input />
          <Input />
          <Input />
          <button className={styles.button_dark}>Send</button>
        </div>
      </div>
    </div>
  );
}
