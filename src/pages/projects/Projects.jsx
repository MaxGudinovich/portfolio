import styles from './Projects.module.css';

const Projects = () => {
  function toWebsite(link) {
    window.open(link, '_blank');
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>
        <h1>MY PROJECTS</h1>
      </div>
      <div className={styles.project}>
        <img
          src="project1.svg"
          alt="1"
          onClick={(e) =>
            toWebsite('https://blue-sea-0c87b5f03.4.azurestaticapps.net/')
          }
        />
        <div className={styles.descriptions}>
          <div className={styles.name}>CookiFy</div>
          <div className={styles.description}>
            A culinary startup leveraging artificial intelligence for recipe
            generation. Allowing users to customize recipes based on their
            preferred ingredients.
          </div>
          <button className={styles.link}>
            <a
              href="https://blue-sea-0c87b5f03.4.azurestaticapps.net/"
              target="_blank"
              rel="noreferrer"
            >
              Link
            </a>
          </button>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.descriptions}>
          <div className={styles.name}>Fake shop</div>
          <div className={styles.description}>
            Crafted a Fake Shop application using React, showcasing proficiency
            in classic React components and implementing advanced routing
            features. Demonstrated adeptness in creating seamless and dynamic
            user interfaces.
          </div>

          <a
            href="https://maxgudinovich.github.io/fakeshop/"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            Link
          </a>
        </div>
        <img
          src="project3.svg"
          alt="3"
          onClick={(e) =>
            toWebsite('https://maxgudinovich.github.io/fakeshop/')
          }
        />
      </div>
      <div className={styles.project}>
        <img
          src="project2.svg"
          alt="2"
          onClick={(e) =>
            toWebsite('https://maxgudinovich.github.io/ankiclone/')
          }
        />
        <div className={styles.descriptions}>
          <div className={styles.name}>Anki clone</div>
          <div className={styles.description}>
            "Developed an Anki Clone – a language learning platform that enables
            users to create custom decks and vocabulary entries for effective
            studying. Implemented state management with Redux"
          </div>

          <a
            href="https://maxgudinovich.github.io/ankiclone/"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
