import React, { useState } from 'react'

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
    <div>
      <div>{title}</div>
      <button
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
        {isPlaying ? 'Stop' : 'Play'}
      </button>
    </div>
  )
}
