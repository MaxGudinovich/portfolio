import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './ContactForm.module.scss';

function ContactForm() {
  const [state, handleSubmit] = useForm('manyyolv');
  if (state.succeeded) {
    return (
      <div className={styles.aftermessage}>
        <img src="portfolio/done.svg" alt="done" />
        <p>Thanks for the message!</p>
      </div>
    );
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.form__input}
        id="name"
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        className={styles.form__input}
        id="email"
        type="email"
        name="email"
        placeholder="Email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        className={styles.form__textarea}
        id="message"
        name="message"
        placeholder="Message"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        className={styles.form__button}
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
