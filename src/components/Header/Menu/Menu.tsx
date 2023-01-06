import styles from "./Menu.module.scss";
import { Link } from "react-router-dom";
export function Menu() {
  return (
    <div className={styles.menu}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/works">Works</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}
