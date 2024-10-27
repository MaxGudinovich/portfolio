import { useState, useEffect } from 'react';
import styles from './AsideNavigation.module.scss';

const AsideNavigation = () => {
  const [activeLink, setActiveLink] = useState('#home');

  const handleClick = (id) => {
    setActiveLink(id);
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', id);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = `#${entry.target.id}`;
            setActiveLink(sectionId);
            window.history.replaceState(null, '', sectionId);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className={styles.asideNavigation}>
      <a
        href="#home"
        title="Home"
        aria-label="Home"
        className={`${styles.asideNavigation__link} ${
          activeLink === '#home' ? styles.active : ''
        }`}
        onClick={() => handleClick('#home')}
      ></a>
      <a
        href="#about"
        title="About"
        aria-label="About"
        className={`${styles.asideNavigation__link} ${
          activeLink === '#about' ? styles.active : ''
        }`}
        onClick={() => handleClick('#about')}
      ></a>
      <a
        href="#skills"
        title="Skills"
        aria-label="Skills"
        className={`${styles.asideNavigation__link} ${
          activeLink === '#skills' ? styles.active : ''
        }`}
        onClick={() => handleClick('#skills')}
      ></a>
      <a
        href="#projects"
        title="Projects"
        aria-label="Projects"
        className={`${styles.asideNavigation__link} ${
          activeLink === '#projects' ? styles.active : ''
        }`}
        onClick={() => handleClick('#projects')}
      ></a>
      <a
        href="#contacts"
        title="Contacts"
        aria-label="Contacts"
        className={`${styles.asideNavigation__link} ${
          activeLink === '#contacts' ? styles.active : ''
        }`}
        onClick={() => handleClick('#contacts')}
      ></a>
    </div>
  );
};

export default AsideNavigation;
