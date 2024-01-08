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
          src="https://maxgudinovich.github.io/portfolio/project1.svg"
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
          <button
            onClick={(e) =>
              toWebsite('https://blue-sea-0c87b5f03.4.azurestaticapps.net/')
            }
          >
            Link
          </button>
        </div>
      </div>
      <div className={`${styles.project} ${styles.projectReverse}`}>
        <div className={styles.descriptions}>
          <div className={styles.name}>Fake shop</div>
          <div className={styles.description}>
            Crafted a Fake Shop application using React, showcasing proficiency
            in classic React components and implementing advanced routing
            features. Demonstrated adeptness in creating seamless and dynamic
            user interfaces.
          </div>

          <button
            onClick={(e) =>
              toWebsite('https://maxgudinovich.github.io/fakeshop/')
            }
          >
            Link
          </button>
        </div>
        <img
          src="https://maxgudinovich.github.io/portfolio/project3.svg"
          alt="3"
          onClick={(e) =>
            toWebsite('https://maxgudinovich.github.io/fakeshop/')
          }
        />
      </div>
      <div className={styles.project}>
        <img
          src="https://maxgudinovich.github.io/portfolio/project2.svg"
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

          <button
            onClick={(e) =>
              toWebsite('https://maxgudinovich.github.io/ankiclone/')
            }
          >
            Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
