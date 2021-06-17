import React from 'react'
import SoundCard from './SoundCard'
import soundInfo from '../interfaces/soundInfo'
import styles from '../styles/SoundBoard.module.scss'

export default function SoundCardList(props: { list: soundInfo[] }) {
  const cards = props.list.map(({ title, url }, i) => (
    <SoundCard key={i} title={title} url={url} />
  ))

  return (
    <div className={styles.container}>
      <h2>Category</h2>
      <div className={styles.grid}>{cards}</div>
    </div>
  )
}
