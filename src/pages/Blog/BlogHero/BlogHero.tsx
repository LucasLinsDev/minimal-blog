import styles from "./Blog.module.scss";
import blog from "../../../assets/img/hero-card.png";
export function BlogHero() {
  return (
    <div className={styles.blog_hero}>
      <div className={styles.blog_hero_left}>
        <img src={blog} alt="" />
      </div>
      <div className={styles.blog_hero_right}>
        <span>Technology, Interface Design</span>
        <h2 className="mt-3">
          Using UX Design to Build a<br /> Sustainable Future
        </h2>
        <span className="mt-2">6 May, 2020</span>
        <p className="mt-6">
          Transformation has to be driven by everybody, not just by climate
          groups, and we have a responsibility to use our influence to drive
          this.
        </p>
        <div className={styles.blog_step}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    </div>
  );
}
