import React from 'react'

const audioCache = new Map<string, HTMLAudioElement>()
function playAudio(url: string) {
  const audio = audioCache[url] || new Audio(url)
  audio.play()
}

export default function SoundCard({ title, url }) {
  return <button onClick={() => playAudio(url)}>{title}</button>
}
