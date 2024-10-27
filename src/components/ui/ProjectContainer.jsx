import styles from './ProjectContainer.module.scss';
import { FiArrowUpRight } from 'react-icons/fi';
import SkillTag from './SkillTag';

const ProjectContainer = ({ props, index }) => {
  return (
    <div
      className={`${styles.project} ${
        index % 2 !== 0 ? styles.projectReverse : ''
      }`}
    >
      <img
        src={`portfolio/${props.image}`}
        alt={props.name}
        className={`${
          index % 2 !== 0
            ? styles.projectReverse__image
            : styles.project__content_image
        }`}
      />
      <div className={styles.project__content}>
        <div className={styles.project__content_tags}>
          {props.tags.map((el, i) => (
            <div className={styles.project__content_tag} key={i}>
              <SkillTag key={i} props={el} />
            </div>
          ))}
        </div>
        <div className={styles.project__content_title}>{props.name}</div>
        <div className={styles.project__content_description}>
          {props.description}
        </div>
        <div className={styles.project__content_link}>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
          <FiArrowUpRight style={{ fontSize: '30px' }} />
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
