import { FaLinkedin } from 'react-icons/fa6';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

import styles from './Contact.module.css';
const Contact = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>
        <h1>CONTACT</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.social}>
          <FaLinkedin />
          <a
            href="https://www.linkedin.com/in/maksymhudinovych/"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            Linkedin
          </a>
        </div>
        <div className={styles.social}>
          <FaPhoneSquareAlt />
          <p>+41 76 594 10 69</p>
        </div>
        <div className={styles.social}>
          <IoMail />
          <a
            href="mailto:maksymhudinovych@gmail.com"
            target="_blank"
            rel="noreferrer"
            className={styles.mail}
          >
            Mail me
          </a>
          <p>(maksymhudinovych@gmail.com)</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
