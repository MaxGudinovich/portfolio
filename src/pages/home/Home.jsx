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
          Lorem ipsum dolor sit amet consectetur. Auctor turpis quam ut sagittis
          pharetra diam. Aenean odio elit etiam aliquam tellus nisl massa.Aenean
          odio elit etiam aliquam tellus nisl massa.
        </p>
        <button onClick={toAbout}>Get Started</button>
      </div>
      <div className={styles.photoContainer}>
        <img src="photoGroup.png" alt="photoGroup" className={styles.photo} />
      </div>
    </div>
  );
};

export default Home;
