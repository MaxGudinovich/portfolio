import { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Squash as Hamburger } from 'hamburger-react';
import styles from './Header.module.scss';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);
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

  const navVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const handleOutsideClick = (e) => {
    if (
      navRef.current &&
      !navRef.current.contains(e.target) &&
      hamburgerRef.current &&
      !hamburgerRef.current.contains(e.target)
    ) {
      setOpen(false);
    }
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header__logo}>
          {logoItems.map((item, index) => (
            <motion.span
              className={styles.header__logo_text}
              key={index}
              style={index === 2 ? { color: 'var(--primary-orange)' } : {}}
              variants={logoVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              {item}
            </motion.span>
          ))}
        </div>
        <nav className={styles.header__nav}>
          <a className={styles.header__nav_link} href="#about">
            About me
          </a>
          <a className={styles.header__nav_link} href="#skills">
            Skills
          </a>
          <a className={styles.header__nav_link} href="#projects">
            Projects
          </a>
          <a className={styles.header__nav_link} href="#contacts">
            Contact
          </a>
        </nav>
        <div className={styles.header__hamburger} ref={hamburgerRef}>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={48}
            color="rgba(100, 155, 146, 1)"
            easing="ease-in"
          />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileNav}
            ref={navRef}
            variants={navVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <a
              className={styles.mobileNav__link}
              href="#about"
              onClick={handleLinkClick}
            >
              About me
            </a>
            <a
              className={styles.mobileNav__link}
              href="#skills"
              onClick={handleLinkClick}
            >
              Skills
            </a>
            <a
              className={styles.mobileNav__link}
              href="#projects"
              onClick={handleLinkClick}
            >
              Projects
            </a>
            <a
              className={styles.mobileNav__link}
              href="#contacts"
              onClick={handleLinkClick}
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
