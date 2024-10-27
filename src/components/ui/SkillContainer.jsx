import styles from './SkillContainer.module.scss';

const SkillContainer = ({ props }) => {
  return (
    <div className={styles.skill}>
      <img
        src={`portfolio/${props.icon}`}
        alt={props.skill}
        className={styles.skill__icon}
      />
      <span className={styles.skill__name}>{props.name}</span>
    </div>
  );
};

export default SkillContainer;
