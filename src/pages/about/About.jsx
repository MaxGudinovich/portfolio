import { SiJavascript } from 'react-icons/si';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { FaSass } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { FaDocker } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

import styles from './About.module.css';
const About = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>
        <h1>ABOUT ME</h1>
        <p>I am glad to share some information about me</p>
      </div>
      <div className={styles.content}>
        <div className={styles.photo}>
          <img src="aboutGroup.png" alt="aboutGroup" />
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.descOne}>
            <p>
              Would like to apply for the The Power coders Bootcamp program, in
              which I am particularly interested. I have been learning
              JavaScript for 1 year on my own. During my studies i found out
              that I am passionate about programming. I was especially focus on
              Front-End. I am flexible and open minded. I approach every task
              with a dedication to giving my best. I believe I would be a good
              fit for the program because of my strong aim to gain new
              experiences, refine my skills and broaden my understanding.
            </p>
          </div>
          <div className={styles.descTwo}>
            <h2>MY SKILLS</h2>
            <div className={styles.skills}>
              <div className={styles.skill}>
                <SiJavascript className={styles.icon} />
                JavaScript
              </div>
              <div className={styles.skill}>
                <FaHtml5 className={styles.icon} />
                HTML
              </div>
              <div className={styles.skill}>
                <FaCss3Alt className={styles.icon} />
                CSS
              </div>
              <div className={styles.skill}>
                <FaReact className={styles.icon} />
                React
              </div>
              <div className={styles.skill}>
                <SiRedux className={styles.icon} />
                Redux
              </div>
              <div className={styles.skill}>
                <SiTypescript className={styles.icon} />
                TypeScript
              </div>
              <div className={styles.skill}>
                <FaSass className={styles.icon} />
                SASS
              </div>
              <div className={styles.skill}>
                <FaNodeJs className={styles.icon} />
                Node.js
              </div>
              <div className={styles.skill}>
                <FaDocker className={styles.icon} />
                Docker
              </div>
              <div className={styles.skill}>
                <FaGithub className={styles.icon} />
                GitHub
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
