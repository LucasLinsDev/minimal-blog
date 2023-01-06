import styles from "./Single.module.scss";
import single from "../../assets/img/hero-single.png";
import avatar from "../../assets/img/avatar.png";
import { Input, TextArea } from "../../components/Form/Form";

export function Single() {
  return (
    <div className={`${styles.single}, container`}>
      <div className={styles.single__hero}>
        <span>Technology, Interface Design</span>
        <h1 className="mt-3">Using UX Design to Build a Sustainable Future</h1>
        <div className={`${styles.single__date} , mt-3`}>
          <span>6 May, 2020</span>
          <span>8 comments</span>
        </div>
        <img src={single} />
      </div>
      <div className={styles.content}>
        <div className={styles.content__avatar}>
          <img src={avatar} />
          <p>Monica Geller</p>
        </div>
        <p>
          Transformation has to be driven by everybody, not just by climate
          groups, and we have a responsibility to use our influence to drive
          this. Overwhelming evidence points to the fact that we have about a
          decade to combat climate change caused by human activity before
          irreversible damage is caused. It is the biggest crisis of our
          generation.
        </p>
        <h2 className="mt-3">What Can UX Designers Do?</h2>
        <p className="mt-3">
          Firstly, on a broader scale, influence is held by people who work in
          tech, economically, socially and politically. People follow and listen
          to what happens in the world of tech. We need to take advantage of
          this to highlight important issues and create awareness around the
          environmental impact of tech.{" "}
        </p>
        <div className={styles.content__line}>
          <p>
            “UX designers are in a unique position to create tools with
            sustainability at their heart by streamlining user workflows,
            minimizing information overload, and removing potential distractions
            that keep users from accomplishing tasks they set out to do.”
          </p>
          <p className="mt-2">
            ‘Designing For Sustainability, Tim Frick, 2014'
          </p>
        </div>
        <p className="mt-3">
          Most of the Internet is unsustainable, so there is an opportunity to
          make a very real and lasting impact through our work. The following
          are some ideas for ways in which UX designers can play their part in
          managing this global crisis.
        </p>
        <ul className={styles.content__list}>
          <li>Ask if the product is solving a real-world problem?</li>
          <li>Ask if the product is solving a real-world problem?</li>
          <li>Ask if the product is solving a real-world problem?</li>
        </ul>
        <div className={styles.content__tags}>
          <p>Tags:</p>
          <span>Technology, Interface Design, Visual Design</span>
        </div>
      </div>

      <div className={styles.comments}>
        <div className={styles.comments__header}>
          <h2>Leave a Reply</h2>
          <p>Required fields are marked *</p>
          <div className={styles.comments__form}>
            <div className={styles.comments__inputs}>
              <Input />
              <Input />
              <Input />
            </div>
            <div className={styles.comments__checkbox}></div>
            <div className={styles.comments__textarea}>
              <TextArea />
            </div>
            <button className={styles.button_dark}>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}
