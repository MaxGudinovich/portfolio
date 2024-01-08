import { useNavigate } from 'react-router-dom';

import styles from './Home.module.css';
const Home = () => {
  const navigate = useNavigate();

  function toAbout() {
    navigate('/about');
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.content}>
        <h1>Embark on a coding adventure</h1>
        <p>
          I am enthusiastic about joining a collaborative team to contribute my
          coding skills and learn from experienced professionals. Excited about
          the prospect of continuous learning and growth within a
          forward-thinking team.
        </p>
        <button onClick={toAbout}>Get Started</button>
        <div className={styles.mobileImageContainer}>
          <img
            src="https://maxgudinovich.github.io/portfolio/mobileHome.png"
            alt="mobilePhoto"
            className={styles.mobilePhoto}
          />
        </div>
      </div>
      <div className={styles.photoContainer}>
        <img
          src="https://maxgudinovich.github.io/portfolio/photoGroup.png"
          alt="photoGroup"
          className={styles.photo}
        />
      </div>
    </div>
  );
};

export default Home;
