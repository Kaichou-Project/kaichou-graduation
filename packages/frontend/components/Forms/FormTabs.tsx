import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../styles/Form.module.scss'

export default function FormTabs() {
  const selected = true
  return (
    <div className={styles.tabs}>
      <label>I want to submit a ...</label>
      <div className={`${styles.button} ${selected ? styles.selected : ''}`}>
        MESSAGE
      </div>
      <div className={`${styles.button} ${styles.yellow}`}>FANART</div>
      <div className={`${styles.button} ${styles.yellow}`}>VIDEO/CLIP</div>
    </div>
  )
}
