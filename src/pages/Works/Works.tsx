import { CardWork } from "../../components/Card/CardWork/CardWork";
import styles from "./Works.module.scss";

export function Works() {
  return (
    <div className={`${styles.works} , container `}>
      <div className={styles.works__header}>
        <h1>Works</h1>
        <p>
          Hello! I’m Manifest – a Freelance UI/UX Designer from Berlin, Germany.
        </p>
      </div>
      <CardWork />
      <CardWork />
      <CardWork />
    </div>
  );
}
