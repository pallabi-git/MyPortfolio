import React from "react";
import styles from "./Experience.module.css";
import skills from "./../../data/skills.json";
import experiences from "./../../data/experience.json";
import { getImageUrl } from "../../utils";

export default function Experience() {
  return (
    <section className={styles.container} id="experience">
      <h3 className={styles.title}>Experience</h3>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.experience}>
          {experiences.map((experienceItem, id) => {
            return (
              <li className={styles.experienceItem} key={id}>
                <img
                  src={getImageUrl(experienceItem.imageSrc)}
                  alt={`${experienceItem.organisation} Logo`}
                />
                <div className={styles.experienceItemDetails}>
                  <h3>{`${experienceItem.role}, ${experienceItem.organisation}`}</h3>
                  <p>{`${experienceItem.startDate} - ${experienceItem.endDate}`}</p>
                  <ul>
                    {experienceItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
