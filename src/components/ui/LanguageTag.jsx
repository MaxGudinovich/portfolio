import styles from './LanguageTag.module.scss';

const LanguageTag = ({ props }) => {
  return (
    <div className={styles.languageTag}>
      <span className={styles.languageTag__lang}>{props.language}</span>
      <span className={styles.languageTag__lvl}>{props.level}</span>
    </div>
  );
};

export default LanguageTag;
