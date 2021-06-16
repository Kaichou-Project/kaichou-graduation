import React from 'react'
import SoundCard from './SoundCard'

export default function SoundCardList({ list }) {
  const cards = []
  for (const key in list) {
    const { title, url } = list[key]
    cards.push(<SoundCard key={key} title={title} url={url} />)
  }
  return <>{cards}</>
}
