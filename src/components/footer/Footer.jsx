import { useEffect, useRef, useState } from 'react';
import styles from './Footer.module.scss';
import { motion } from 'framer-motion';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);
  const logoItems = ['MAKSYM', 'HUDINOVYCH', 'STUDIO'];
  const logoVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.5,
        duration: 1,
        type: 'spring',
        stiffness: 70,
      },
    }),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.footer} ref={footerRef}>
      <div className={styles.footer__logo}>
        {logoItems.map((item, index) => (
          <motion.span
            className={styles.footer__logo_text}
            key={index}
            style={index === 2 ? { color: 'var(--primary-orange)' } : {}}
            variants={logoVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            custom={index}
          >
            {item}
          </motion.span>
        ))}
      </div>
      <div className={styles.footer__pages}>
        <h3 className={styles.footer__pages_title}>Pages</h3>
        <a className={styles.footer__pages_link} href="#home">
          Home
        </a>
        <a className={styles.footer__pages_link} href="#about">
          About me
        </a>
        <a className={styles.footer__pages_link} href="#skills">
          Skills
        </a>
        <a className={styles.footer__pages_link} href="#projects">
          My projects
        </a>
        <a className={styles.footer__pages_link} href="#contact">
          Contact me
        </a>
      </div>
      <div className={styles.footer__contact}>
        <h3 className={styles.footer__contact_title}>Contact</h3>
        <div className={styles.footer__contact_text}>
          <img
            src="https://maxgudinovich.github.io/portfolio/phone.svg"
            alt="phone"
          />
          <p>+41 76 5941069</p>
        </div>
        <div className={styles.footer__contact_text}>
          <img
            src="https://maxgudinovich.github.io/portfolio/email.svg"
            alt="email"
          />
          <p>maksymhudinovych@gmail.com</p>
        </div>
        <div className={styles.footer__contact_text}>
          <img
            src="https://maxgudinovich.github.io/portfolio/location.svg"
            alt="location"
          />
          <p>3006 Bern</p>
        </div>
      </div>
      <div className={styles.footer__social}>
        <a
          href="https://www.linkedin.com/in/maksymhudinovych/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.footer__social_icon}
            src="https://maxgudinovich.github.io/portfolio/linkedinFooter.svg"
            alt="linkedin"
          />
        </a>
        <a
          href="https://github.com/MaxGudinovich"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.footer__social_icon}
            src="https://maxgudinovich.github.io/portfolio/githubFooter.svg"
            alt="github"
          />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=100090751292505"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.footer__social_icon}
            src="https://maxgudinovich.github.io/portfolio/facebookFooter.svg"
            alt="facebook"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
