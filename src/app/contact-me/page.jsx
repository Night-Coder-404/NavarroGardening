import React from 'react'
import styles from './page.module.css'
import sendMail from '@/server/action'
import SubmitButton from '@/components/submitButton/submitButton'

export default function Contact() {

  return (
    <>
    <h1 className={styles.title}>Contact Page</h1>
    <main className={styles.main}>
      {/* Left side of Contact info page */}
      <section className={styles.contactInfo}>
        <h1 className={styles.leftTitle}>If you would like to contact us, you can either:</h1>
        <article className={`${styles.center} ${styles.leftContactInfo}`}>
          <span>Contact us through our email</span>
          <span className={styles.info}>navarrogardening@gmail.com</span>
          <span>Contact us through our Phone number</span>
          <span className={styles.info}>(805)-712-4856</span>
          <span>Or you can just contact us in this form on the right!</span>
          <span>--&gt;</span>
        </article>
      </section>
      {/* Form section */}
      <form className={styles.form} action={sendMail} >
        <div className={styles.center}>
          <label className={styles.emailLabel} for='email'>Email</label>
          <input className={styles.input} id='email' name='email' type='email' placeholder='Email' minlength='3' maxlength='30' required={true} />
        </div>
        <div className={styles.center}>
          <label className={styles.messageLabel} for='message'> Enter Message</label>
          {/* change minlength back to 15 */}
          <textarea className={styles.message} id='message' name='message' rows='12' cols='50' placeholder='Enter Message Here' minlength='1' maxlength='500' required={true} />
        </div>
        <SubmitButton />
      </form>
    </main>
    </>
  )
}
