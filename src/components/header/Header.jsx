import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const navigate = useNavigate();

  function toHome() {
    navigate('/');
  }

  function toContact() {
    navigate('/contact');
  }
  return (
    <div className={styles.mainContainer}>
      <div className={styles.logo}>
        <img src="logo.png" alt="logo" onClick={toHome} />
      </div>
      <div className={styles.navBar}>
        <NavLink to="home" className={styles.navLink}>
          HOME
        </NavLink>
        <NavLink to="about" className={styles.navLink}>
          ABOUT ME
        </NavLink>
        <NavLink to="projects" className={styles.navLink}>
          PROJECTS
        </NavLink>
        <NavLink to="contact" className={styles.navLink}>
          CONTACT
        </NavLink>
      </div>
      <div className={styles.contactAnimation}>
        <img src="contactcircle.png" alt="circle" onClick={toContact} />
      </div>
    </div>
  );
};

export default Header;
