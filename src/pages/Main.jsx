import About from '../components/about/About';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Home from '../components/home/Home';
import styles from './Main.module.scss';
import AsideNavigation from '../components/ui/AsideNavigation';
import Skills from '../components/skills/Skills';
import Projects from '../components/projects/Projects';
import Contact from '../components/contact/Contact';

const Main = () => {
  const languages = [
    { language: 'English', level: 'B2' },
    { language: 'German', level: 'A2' },
    { language: 'Russian', level: 'Native' },
    { language: 'Ukrainian', level: 'Native' },
  ];

  const skills = [
    {
      name: 'JavaScript',
      icon: 'https://maxgudinovich.github.io/portfolio/javascript.svg',
    },
    {
      name: 'TypeScript',
      icon: 'https://maxgudinovich.github.io/portfolio/typescript.svg',
    },
    {
      name: 'C#',
      icon: 'https://maxgudinovich.github.io/portfolio/csharp.svg',
    },
    {
      name: '.NET',
      icon: 'https://maxgudinovich.github.io/portfolio/dotnet.svg',
    },
    {
      name: 'React',
      icon: 'https://maxgudinovich.github.io/portfolio/reactjs.svg',
    },
    {
      name: 'Redux',
      icon: 'https://maxgudinovich.github.io/portfolio/redux.svg',
    },
    {
      name: 'Vue.js',
      icon: 'https://maxgudinovich.github.io/portfolio/vuejs.svg',
    },
    {
      name: 'Angular',
      icon: 'https://maxgudinovich.github.io/portfolio/angular.svg',
    },
    {
      name: 'MongoDB',
      icon: 'https://maxgudinovich.github.io/portfolio/mongodb.svg',
    },
    {
      name: 'My SQL',
      icon: 'https://maxgudinovich.github.io/portfolio/mysql.svg',
    },
    {
      name: 'Docker',
      icon: 'https://maxgudinovich.github.io/portfolio/docker.svg',
    },
    {
      name: 'Node.js',
      icon: 'https://maxgudinovich.github.io/portfolio/nodejs.svg',
    },
    {
      name: 'GitHub',
      icon: 'https://maxgudinovich.github.io/portfolio/github.svg',
    },
    {
      name: 'Sass',
      icon: 'https://maxgudinovich.github.io/portfolio/sass.svg',
    },
    { name: 'CSS', icon: 'https://maxgudinovich.github.io/portfolio/css.svg' },
    {
      name: 'HTML',
      icon: 'https://maxgudinovich.github.io/portfolio/html.svg',
    },
  ];

  const projects = [
    {
      name: 'CookyFy',
      description:
        'CookyFy is a startup that allows users to generate unique recipes using AI based on ingredients they have or want. Users can also create custom recipes and share them with others. Currently, the development is on hold.',
      tags: [
        { name: 'JavaScript', icon: 'javascript.svg' },
        { name: 'React', icon: 'reactjs.svg' },
        { name: 'Redux', icon: 'redux.svg' },
        { name: 'Sass', icon: 'sass.svg' },
        { name: 'CSS', icon: 'css.svg' },
        { name: 'HTML', icon: 'html.svg' },
      ],
      image: 'https://maxgudinovich.github.io/portfolio/cookify.svg',
      link: 'https://blue-sea-0c87b5f03.4.azurestaticapps.net/',
    },
    {
      name: 'Anki Clone',
      description:
        'Anki Clone is a web application that allows users to create flashcards and learn new words. This pet project was created to improve my skills in Vue.js.',
      tags: [
        { name: 'JavaScript', icon: 'javascript.svg' },
        { name: 'Vue.js', icon: 'vuejs.svg' },
        { name: 'Node.js', icon: 'nodejs.svg' },
        { name: 'Sass', icon: 'sass.svg' },
        { name: 'CSS', icon: 'css.svg' },
        { name: 'HTML', icon: 'html.svg' },
      ],
      image: 'https://maxgudinovich.github.io/portfolio/ankiclone.svg',
      link: 'https://vue-anki-learning.netlify.app/',
    },
    {
      name: 'Fake Store',
      description:
        'Fake Store is a web application that allows users to search for products and add them to the cart. This pet project was created to improve my skills in React.',
      tags: [
        { name: 'JavaScript', icon: 'javascript.svg' },
        { name: 'React', icon: 'reactjs.svg' },
        { name: 'Sass', icon: 'sass.svg' },
        { name: 'CSS', icon: 'css.svg' },
        { name: 'HTML', icon: 'html.svg' },
      ],
      image: 'https://maxgudinovich.github.io/portfolio/fakeshop.svg',
      link: 'https://maxgudinovich.github.io/fakeshop/',
    },
    {
      name: 'News App',
      description:
        'News App is a web platform that allows users to search for news articles by keywords, pulling data from the most popular news agencies. Each article will feature a "truth score," calculated by AI to assess the reliability of the content. Currently under development, with a website coming soon.',
      tags: [
        { name: 'C#', icon: 'csharp.svg' },
        { name: '.NET', icon: 'dotnet.svg' },
      ],
      image: 'https://maxgudinovich.github.io/portfolio/news.svg',
      link: 'https://github.com/teach-lab/orphea-be',
    },
  ];

  return (
    <div className={styles.gradientBg}>
      <Header />
      <div className={styles.main}>
        <div className={styles.main__content}>
          <Home />
          <About languages={languages} />
          <Skills skills={skills} />
          <Projects projects={projects} />
          <Contact />
        </div>
        <AsideNavigation />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
