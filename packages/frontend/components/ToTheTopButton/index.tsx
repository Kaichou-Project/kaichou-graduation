import React from 'react'
import styles from './ToTheTopButton.module.scss'

// function goToTop() {
//   window.scrollTo(0, 0)
// }

export default function ToTheTopButton() {
  const goToTop = () => window.scrollTo(0, 0)

  return (
    <div className={styles.container}>
      <div className={styles.button} onClick={goToTop}>
        <img src={'/arrow-up-icon.svg'} />
        <span>To the top</span>
      </div>
    </div>
  )
}
