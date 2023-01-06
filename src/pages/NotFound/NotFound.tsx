import styles from "./NotFound.module.scss";
export function NotFound() {
  return (
    <div className={` ${styles.not_found} , container`}>
      <h1>404</h1>
      <p> we are sorry, but the page you requested was not found.</p>
      <button className={styles.button_dark}>Go Home</button>
    </div>
  );
}
