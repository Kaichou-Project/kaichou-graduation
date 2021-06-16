import React from 'react'
import SoundCard from './SoundCard'
import styles from '../styles/SoundBoard.module.scss'

export default function SoundCardList({ list }) {
  const cards = []
  for (const key in list) {
    const { title, url } = list[key]
    cards.push(<SoundCard key={key} title={title} url={url} />)
  }
  return (
    <div className={styles.container}>
      <h2>Category</h2>
      <div className={styles.grid}>{cards}</div>
    </div>
  )
}
