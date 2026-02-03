import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { AiFillLinkedin } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { BsPersonVcard } from "react-icons/bs";

const Hero = () => {
  return (
    <section className={styles.container} id="#hero">
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pallabi</h1>
        <p className={styles.description}>
          Full Stack Developer with 6+ years of experience building scalable
          Java, Spring Boot, and React applications with a focus on clean code,
          performance, and seamless user experience.
        </p>
        <span className={styles.infoBtnContainer}>
          <a
            href="https://www.linkedin.com/in/pallabi15/"
            className={styles.infoBtn}
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://leetcode.com/u/pallabi_15/"
            className={styles.infoBtn}
          >
            <SiLeetcode />
          </a>
          <a
            href={getImageUrl("resume/Pallabi_Resume.pdf")}
            className={styles.infoBtn}
          >
            <BsPersonVcard />
          </a>
          <a href=""></a>
        </span>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
