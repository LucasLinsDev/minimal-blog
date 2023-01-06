import { Button } from "../../components/Button/Button";
import styles from "./About.module.scss";
import woman from "../../assets/img/woman.png";
export function About() {
  return (
    <div className={`${styles.about} , container`}>
      <div className={styles.box}>
        <h1>About </h1>
        <p className="mt-3">I’m Manifest</p>
        <p className="mt-1">Full-time UI/UX designer</p>
        <p className="mt-1">Head of Design at VeronaLabs.com</p>
        <img src={woman} className={"mt-4"} />
      </div>
      <div className={styles.box}>
        <p>
          I was born in January 1990. After getting my Degree in computer
          science in 2002, I persuaded my higher study in Human Computer
          Interaction Design. I got my first job as Graphic Designer in the year
          2008. After getting experience in graphic for a year, I moved to UI-UX
          Designing.
        </p>
        <p className={"mt-4 mb-4"}>
          In 2010, I decided to work as a Freelance Web, UI-UX & Mobile
          Interface Designer. I find myself still in the learning phase and have
          strong desire to achieve as many skills as I can.
        </p>
        <Button />
      </div>
    </div>
  );
}
