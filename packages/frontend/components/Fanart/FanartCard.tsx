import React, { useState } from 'react'
import { FanartInterface } from '../../interfaces/fanart'
import styles from './styles.module.scss'

export default function FanartCard({ creator, imageUrl }: FanartInterface) {
  const [isEnlarged, setIsEnlarged] = useState(false)

  function showEnlarged() {
    setIsEnlarged(true)
    document.body.style.overflow = 'hidden'
  }

  function hideEnlarged() {
    setIsEnlarged(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <div className={styles.fanart}>
      {isEnlarged && (
        <div className={styles.enlarged} onClick={hideEnlarged}>
          <img src={imageUrl} />
        </div>
      )}
      <img src={imageUrl} onClick={showEnlarged} />
      <div className={styles.name}>{creator}</div>
    </div>
  )
}
