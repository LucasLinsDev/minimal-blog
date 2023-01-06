import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";
export function Logo() {
  return (
    <Link className={styles.logo} to="/">
      Manifest
    </Link>
  );
}
