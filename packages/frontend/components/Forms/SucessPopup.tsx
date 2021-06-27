import React, { useEffect } from 'react'
import styles from './Form.module.scss'
import Link from 'next/link'

interface propInterface {
  form: string
}

export default function SuccessPopup({ form }: propInterface) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <div
      className={styles.success_popup}
      onWheelCapture={(evt) => evt.stopPropagation()}
    >
      <div className={styles.box}>
        <h2>Thank you for your submission</h2>
        <h3>Your submission will now be confirmed by a moderator</h3>
        <a href="/submission">
          <div className={styles.button}>Go to Home Page</div>
        </a>
        <a href="/submission">
          <div className={styles.button}>Submit another {form}</div>
        </a>
      </div>
    </div>
  )
}
