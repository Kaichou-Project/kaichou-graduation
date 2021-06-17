import React, { useState } from 'react'
import styles from '../styles/SoundBoard.module.scss'

let audio: HTMLAudioElement
if (typeof Audio !== 'undefined') {
  audio = new Audio()
}
function stopAudio() {
  audio.pause()
  audio.currentTime = 0
  audio.onended(new Event('end'))
  audio.onended = null
}

function playAudio(url: string) {
  return new Promise((resolve) => {
    if (!audio) return resolve(false)

    // Call previous callback
    if (!audio.paused && typeof audio.onended === 'function') {
      audio.onended(new Event('end'))
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
    <div
      className={styles.card}
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
      <div className={styles.playButton}>
        <img src={isPlaying ? '/pause-icon.svg' : '/play-icon.svg'} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.buttomLine} />
    </div>
  )
}
