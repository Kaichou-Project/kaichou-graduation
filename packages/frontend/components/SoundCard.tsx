import React, { useState } from 'react'
import styles from '../styles/SoundBoard.module.scss'

let audio
if (typeof Audio !== 'undefined') {
  audio = new Audio()
}
function stopAudio() {
  audio.pause()
  audio.currentTime = 0
  audio.onended()
  audio.onended = null
}

function playAudio(url: string) {
  return new Promise((resolve) => {
    if (!audio) return resolve(false)

    // Call previous callback
    if (!audio.paused && typeof audio.onended === 'function') {
      audio.onended()
    }

    audio.src = url
    audio.play()
    audio.onended = function () {
      audio.onended = null
      resolve(true)
    }
  })
}

export default function SoundCard({ title, url }) {
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <div
        className={styles.playButton}
        onClick={async () => {
          if (isPlaying) {
            stopAudio()
          } else {
            setIsPlaying(true)
            await playAudio(url)
            setIsPlaying(false)
          }
        }}
      >
        {isPlaying ? '⏸️' : '▶️'}
      </div>
    </div>
  )
}
