import React, { useState, useEffect } from 'react'
import styles from './ToTheTopButton.module.scss'

function shouldHide(): boolean {
  return window.innerHeight > window.scrollY
}

function goToTop() {
  window.scrollTo(0, 0)
}

export default function ToTheTopButton() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setHidden(shouldHide())
    }

    setHidden(shouldHide())
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`${styles.container} ${hidden ? styles.hide : ''}`}>
      <div className={styles.button} onClick={goToTop}>
        <img src={'/arrow-up-icon.svg'} />
        <span>To the top</span>
      </div>
    </div>
  )
}
