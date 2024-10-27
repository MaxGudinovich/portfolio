import ProjectContainer from '../ui/ProjectContainer';
import styles from './Projects.module.scss';

const Projects = ({ projects }) => {
  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.projects__title}>EXPLORE MY PROJECTS</h2>
      {projects.map((el, i) => (
        <div className={styles.projects__content} key={i}>
          <ProjectContainer key={i} props={el} index={i} />
        </div>
      ))}
    </section>
  );
};

export default Projects;
