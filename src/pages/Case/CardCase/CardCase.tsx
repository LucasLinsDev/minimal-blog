import styles from "./CardCase.module.scss";
import card from "../../../assets/img/case-study-card.png";
export function CardCase() {
  return (
    <div className={styles.card}>
      <h2>User Research and Personas</h2>
      <img src={card} alt="" />
      <p>
        Who is your user? Indicate her KEY personality traits and help round out
        her overall image.
      </p>
      <p>
        Originally, the personality section of this persona was based off the
        Myers Briggs personality test. According to the Myers Briggs, there are
        16 potential user personality types. Our template integrates questions
        from this online personality test example into a series of sliding bar
        graphics. If you’re confused as to what the sliders mean, check out the
        Myers Briggs basics article.
      </p>
    </div>
  );
}
