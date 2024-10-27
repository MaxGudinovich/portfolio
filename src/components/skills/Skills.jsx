import SkillContainer from '../ui/SkillContainer';
import styles from './Skills.module.scss';

const Skills = ({ skills }) => {
  return (
    <section className={styles.skills} id="skills">
      <h2 className={styles.skills__title}>SKILLS</h2>
      <h3 className={styles.skills__subtitle}>Lets explore some skills</h3>
      <p className={styles.skills__text}>
        Throughout my career, I have developed a diverse skill set that enables{' '}
        <br />
        me to tackle various challenges in software development.
      </p>
      <div className={styles.skills__content}>
        {skills.map((el, i) => (
          <div className={styles.skills__content_container} key={i}>
            <SkillContainer key={i} props={el} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
