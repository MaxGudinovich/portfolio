import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.content}>
        <p>Made with ❤️ in Switrzerland especially for Powercoders © 2024</p>
        <p>Thanks for watching</p>
      </div>
    </div>
  );
};

export default Footer;
