import styles from "./Card.module.scss";
import blog from "../../../assets/img/card-blog.png";
export function CardBlog() {
  return (
    <div className={styles.card_blog}>
      <div className={styles.card_image}>
        <img src={blog} alt="" />
      </div>
      <div className={styles.card_row}>
        <span>Interface Design</span>
        <span>8 June, 2020</span>
      </div>
      <h1>UX traffic light colours</h1>
      <p>
        UI has to make a huge visual difference between warning, an alert and a
        success.
      </p>
    </div>
  );
}
