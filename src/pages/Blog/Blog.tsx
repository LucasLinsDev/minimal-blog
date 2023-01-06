import styles from "./Blog.module.scss";
import { BlogArchives } from "./BlogArchives/BlogArchives";
import { BlogHero } from "./BlogHero/BlogHero";

export function Blog() {
  return (
    <div className={`${styles.blog}, container`}>
      <h1>Blog</h1>
      <BlogHero />
      <BlogArchives />
      <div className={styles.blog_button_load}>
        <button>Load More</button>
      </div>
    </div>
  );
}
