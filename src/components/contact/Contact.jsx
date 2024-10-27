import styles from './Contact.module.scss';
import ContactForm from '../ui/ContactForm';
const Contact = () => {
  return (
    <section className={styles.contact} id="contacts">
      <div className={styles.contact__text}>
        <h2 className={styles.contact__text_title}>
          Contact Me Right <br /> Now
        </h2>
        <p className={styles.contact__text_description}>
          If you have any questions or suggestions, feel free to email me. I'll
          get back to you as soon as possible. Have a great day!
        </p>
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;
