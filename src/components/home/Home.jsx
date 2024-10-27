import styles from './Home.module.scss';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className={styles.home} id="home">
      <div className={styles.home__content}>
        <motion.h1
          className={styles.home__content_title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          I'm{' '}
          <span className={styles.home__content_title_span}>
            Maksym
            <br />
            Hudinovych.
            <br />
          </span>
          Fullstack
          <br />
          Developer
        </motion.h1>
        <p className={styles.home__content_text}>
          My focus is on delivering solid and dependable software solutions that
          not only solve today's challenges but provide a foundation for
          tomorrow's opportunities.
        </p>
        <button className={styles.home__content_btn}>
          <a className={styles.home__content_btn_a} href="#contacts">
            Contact me
          </a>
        </button>
      </div>
      <div className={styles.home__photo}>
        <img
          className={styles.home__photo_img}
          src="portfolio/photoTitle.svg"
          alt="photoTit"
        />
      </div>
    </section>
  );
};

export default Home;
