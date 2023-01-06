import styles from "./CardHero.module.scss";
import card from "../../../assets/img/hero-card.png";

interface CardProps{
  image:string,
  txx:string
}

export function CardHero() {
  return (
    <div className={styles.card_hero}>
      <div className={styles.card_image}>
        <img src={card} />
      </div>
      <p className="mt-2">Mixkit Inspo</p>
    </div>
  );
}
