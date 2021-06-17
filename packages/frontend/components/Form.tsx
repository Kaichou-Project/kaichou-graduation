import React from 'react'
import styles from '../styles/Form.module.scss'

export default function Message({ children }) {
  return <div className={styles.form}>{children}</div>
}
