import { BlogArticle } from "./Articles/Blog";
import { Hero } from "./Hero/Hero";
import styles from "./Home.module.scss";
import { Info } from "./Info/Info";

export function Home() {
  return (
    <div className={`${styles.hero}, container`}>
      <Hero />
      <Info />
      <BlogArticle />
    </div>
  );
}
