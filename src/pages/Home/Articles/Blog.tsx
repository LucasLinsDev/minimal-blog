import styles from "./Blog.module.scss";
import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";
import { CardBlog } from "../../../components/Card/CardBlog/CardBlog";
export function BlogArticle() {
  return (
    <div className={styles.blog_section}>
      <div className={styles.blog_header}>
        <h1>Latest Posts</h1>
        <Link to="/blog">
          View All <BiRightArrowAlt size={24} />
        </Link>
      </div>
      <div className={styles.blog_cards}>
        {[1, 2, 3].map(() => (
          <CardBlog />
        ))}
      </div>
    </div>
  );
}
