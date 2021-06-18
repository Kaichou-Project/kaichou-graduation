import React from 'react'
import SoundCard from './SoundCard'
import styles from './SoundBoard.module.scss'
import soundCategory from '../../interfaces/soundCategory'

export default function SoundCardList(props: soundCategory) {
  const cards = props.list.map((sound, i) => <SoundCard key={i} {...sound} />)

  return (
    <div className={styles.container}>
      <h2>{props.name}</h2>
      <div className={styles.grid}>{cards}</div>
    </div>
  )
}
