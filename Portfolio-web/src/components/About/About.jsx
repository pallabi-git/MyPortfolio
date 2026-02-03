import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div>
              <h3>Frontend Developer</h3>
              <p>
                Results‑oriented Frontend Developer skilled in crafting fast,
                responsive, and user‑friendly interfaces. Successfully enhanced
                page load speed by 20%, driving measurable conversion growth.
                Implemented an improved development system that cut development
                time by 15% and elevated website performance by 20%.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div>
              <h3>Backend Developer</h3>
              <p>
                Results‑driven Backend Developer skilled in creating scalable
                APIs and optimized backend systems. Boosted website traffic and
                conversions by 15% and achieved a 25% reduction in errors
                through meticulous code quality and system improvements.
              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <div>
              <h3>Full Stack Developer</h3>
              <p>
                Results‑oriented Full Stack Developer skilled in creating fast, responsive frontends and robust, scalable backend systems. Delivered a 20% improvement in page load speed and a 15% boost in traffic and conversions. Implemented development optimizations that reduced build time by 15% and cut system errors by 25%, consistently enhancing overall performance and user experience.
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};

export default About;
