import React, { useState } from 'react'
import soundInfo from '../interfaces/soundInfo'
import styles from '../styles/SoundBoard.module.scss'

let audio: HTMLAudioElement
if (typeof Audio !== 'undefined') {
  audio = new Audio()
}

export default function SoundCard(props: soundInfo) {
  const { title, url } = props
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentProgress, setCurrentProgress] = useState(0)

  let timer: number
  function onAudioEnd() {
    audio.onended = null
    setIsPlaying(false)
    setCurrentProgress(0)

    window.clearInterval(timer)
  }

  function stopAudio() {
    audio.pause()
    audio.currentTime = 0
    audio.onended(new Event('end'))
    audio.onended = null
  }

  function playAudio() {
    if (!audio) return setIsPlaying(false)

    setIsPlaying(true)

    // Call previous callback
    if (!audio.paused && typeof audio.onended === 'function') {
      audio.onended(new Event('end'))
    }

    audio.src = url
    audio.play()
    audio.onended = onAudioEnd

    timer = window.setInterval(() => {
      const percentage = Math.round((audio.currentTime / audio.duration) * 100)
      setCurrentProgress(percentage)
    }, 60)
  }

  return (
    <div
      className={styles.card}
      onClick={() => (isPlaying ? stopAudio() : playAudio())}
    >
      <div>
        <div className={styles.play_button}>
          <img src={isPlaying ? '/pause-icon.svg' : '/play-icon.svg'} />
        </div>
        <div className={styles.title}>{title}</div>
        <div
          style={{ width: `${currentProgress}%` }}
          className={styles.progress_bar}
        />
      </div>
    </div>
  )
}
