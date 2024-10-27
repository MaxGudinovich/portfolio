import styles from './SkillTag.module.scss';

const SkillTag = ({ props }) => {
  return (
    <div className={styles.tag}>
      <img
        src={`portfolio/${props.icon}`}
        alt={props.name}
        className={styles.tag__icon}
      />
      <span className={styles.tag__name}>{props.name}</span>
    </div>
  );
};

export default SkillTag;
