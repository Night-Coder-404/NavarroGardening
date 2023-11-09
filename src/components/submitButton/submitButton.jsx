'use client'

import { useFormStatus } from 'react-dom'
import styles from './submitButton.module.css'

export default function SubmitButton() {
  const formStatus = useFormStatus();
  console.log(formStatus);

  return (
    <button className={styles.button} type='submit' disabled={formStatus.pending} >Submit</button>
  )
}
