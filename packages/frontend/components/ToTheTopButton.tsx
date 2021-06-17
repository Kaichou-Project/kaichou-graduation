import React from 'react'
import styles from '../styles/ToTheTopButton.module.scss'

function goToTop() {
  window.scrollTo(0, 0)
}

export default function ToTheTopButton() {
  return (
    <div className={styles.container}>
      <div className={styles.button} onClick={goToTop}>
        <img src={'/arrow-up-icon.svg'} />
        <span>To the top</span>
      </div>
    </div>
  )
}
