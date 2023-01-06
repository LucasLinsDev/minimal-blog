import styles from "./Footer.module.scss";
export function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.footer_info}>
          <h1>Need a project?</h1>
          <p>(239) 555-0108</p>
          <p>tanya.hill@example.com</p>
        </div>
        <div className={styles.footer_social}>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Dribble</li>
            <li>Linkedin</li>
          </ul>
        </div>
        <div className={styles.footer_copyright}>
          <p>© Copyright Manifest Theme. Allrights reserved</p>
        </div>
      </div>
    </footer>
  );
}
