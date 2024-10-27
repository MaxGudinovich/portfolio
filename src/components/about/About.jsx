import LanguageTag from '../ui/LanguageTag';
import styles from './About.module.scss';
import { GrLanguage } from 'react-icons/gr';

const About = ({ languages }) => {
  return (
    <section className={styles.about} id="about">
      <h2 className={styles.about__title}>ABOUT ME</h2>
      <div className={styles.description}>
        <img
          src="portfolio/photoSubtitle.svg"
          alt="aboutPhoto"
          className={styles.description__img}
        />
        <div className={styles.description__content}>
          <h3 className={styles.description__content_subtitle}>
            Hey everyone!
          </h3>
          <p className={styles.description__content_text}>
            A motivated full-stack developer with a focus on both front-end and
            back-end technologies, aiming to create efficient and user-friendly
            web applications. Enjoys combining clean design with strong
            server-side functionality to deliver high-quality solutions.
            Continuously seeks to improve skills and stay up to date with
            current web development trends. Able to tackle challenges
            effectively and bring value to projects through practical,
            well-structured solutions.
          </p>

          <div className={styles.description__content_language}>
            <div className={styles.description__content_language_title}>
              <GrLanguage style={{ marginRight: '10px' }} />
              Languages:
            </div>
            <div className={styles.description__content_language_tags}>
              {languages.map((el, i) => (
                <LanguageTag key={i} props={el} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
