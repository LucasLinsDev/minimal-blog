import styles from "./Case.module.scss";
import casestudy from "../../assets/img/case-study.png";
import { CardCase } from "./CardCase/CardCase";
export function Case() {
  return (
    <div className={` ${styles.case}, container`}>
      <div className={styles.case__hero}>
        <span>CASE STUDY</span>
        <h1>AL Fashion Platform</h1>
        <img src={casestudy} alt="" />
      </div>
      <div className={styles.case__description}>
        <div className={styles.box_left}>
          <h2>Project Overview</h2>
          <p>
            FashHanger is a bespoke sustainable high-fashion accessory company
            based out of Berlin, currently operated by Siesly and her sister
            Ashely. They needed help for a big rebrand and wanted to relaunch
            their website.
          </p>
          <p>
            Their goals were simple, create a unique e-commerce store that bring
            a wonderful shopping experience at every stage of the buyer’s
            journey.
          </p>
        </div>
        <div className={styles.box_right}>
          <div className={styles.info}>
            <h2>Year</h2>
            <p>2019</p>
          </div>
          <div className={styles.info}>
            <h2>Platform</h2>
            <p>Shopify, Webflow</p>
          </div>
          <div className={styles.info}>
            <h2>Role</h2>
            <p>Research, Design</p>
          </div>
          <div className={styles.info}>
            <h2>Deliverables</h2>
            <p>www.fashhanger.com</p>
          </div>
        </div>
      </div>
      <div className={styles.case__articles}>
        <CardCase />
        <CardCase />
        <CardCase />
      </div>
    </div>
  );
}
