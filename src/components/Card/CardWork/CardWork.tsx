import { Button } from "../../Button/Button";
import styles from "./CardWork.module.scss";
import work from "../../../assets/img/hero-card.png";
export function CardWork() {
  return (
    <div className={styles.card_work}>
      <div className={styles.box_left}>
        <h2>Car Sharing App</h2>
        <div></div>
        <p className="mt-3">Product Design</p>
        <p className="mt-3 mb-4">2020</p>
        <Button />
      </div>
      <div className={styles.box_right}>
        <img src={work} />
      </div>
    </div>
  );
}
