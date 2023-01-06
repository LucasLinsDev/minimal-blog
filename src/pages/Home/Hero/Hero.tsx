import { CardHero } from "../../../components/Card/CardHero/CardHero";
import { SwiperWrapper } from "../../../components/Swipper/Swiper";
import styles from "./Hero.module.scss";

export function Hero() {
  return (
    <div className={styles.hero}>
      <h1>Manifest is a newborn theme. Clean, simple and fast.</h1>
      <div className={styles.swiper}>
        <SwiperWrapper />
      </div>
    </div>
  );
}
