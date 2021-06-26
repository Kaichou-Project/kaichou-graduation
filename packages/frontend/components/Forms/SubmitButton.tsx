import React from 'react'
import styles from './Form.module.scss'

interface propsInterface {
  error: string
}

export default function SubmitButton({ error }: propsInterface) {
  return (
    <div className={styles.submit}>
      {error && <div className={styles.error_msg}>{error}</div>}
      <input type="submit" className={styles.button_submit} value="Submit" />
    </div>
  )
}
