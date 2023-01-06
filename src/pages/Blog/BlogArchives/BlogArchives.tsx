import { CardBlog } from "../../../components/Card/CardBlog/CardBlog";
import { Form } from "../../../components/Form/Form";
import styles from "./BlogArchives.module.scss";

export function BlogArchives() {
  return (
    <div className={`${styles.blog_archive}`}>
      <Form />
      <div className={styles.blog_archive_grid}>
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
      </div>
    </div>
  );
}
