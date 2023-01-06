import { BiRightArrowAlt } from "react-icons/bi";
import styles from "./Info.module.scss";

export function Info() {
  return (
    <div className={styles.info_home}>
      <div className={styles.box_left}>
        <h1>
          Full-time UI/UX designer <br /> Head of Design at VeronaLabs.com
        </h1>
        <BiRightArrowAlt size={24} />
      </div>
      <div className={styles.box_right}>
        <p>
          We work with clients around the world from our headquarters in
          Charleston, South Carolina.
        </p>
        <p>
          We focus on naming, branding, brand narratives, website design and
          development, and brand experiences.
        </p>
      </div>
    </div>
  );
}
