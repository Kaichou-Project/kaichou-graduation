import React from 'react'
import styles from './Form.module.scss'

interface propsInterface {
  name: string
  label: string
  error: string
}

export default function TextArea({ name, label, error }: propsInterface) {
  return (
    <div className={styles.textInput}>
      <label htmlFor={name}>{label}</label>
      <textarea name={name} rows={4} />
      {error && <div className={styles.error_msg}>{error}</div>}
    </div>
  )
}
